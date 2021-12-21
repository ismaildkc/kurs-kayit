<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" autocomplete="off" class="w-100">
        <h2>Kayıt Ol</h2>
        
        <div class="row">
          <div class="form-group col-12 col-md-6">
            <label for="userName">Adınız</label>
            <input 
              v-model="form.userName" 
              v-on:input="removeSpace"
              v-bind:class="{error: $v.form.userName.$error, valid: $v.form.userName.$dirty && !$v.form.userName.$invalid}"
              type="text" class="form-control">
            <p class="form-warning" v-if="!$v.form.userName.nameSurnameLength">En az 2 karakter girmelisiniz</p>
            <p class="form-warning" v-if="!$v.form.userName.minLength">En az 2 karakter girmelisiniz</p>
            <p class="form-warning" v-if="!$v.form.userName.required">Bu alan zorunludur.</p>
          </div>
          
          <div class="form-group col-12 col-md-6">
            <label for="userSurname">Soyadınız</label>
            <input 
              v-model="form.userSurname" 
              v-on:input="removeSpace"
              v-bind:class="{error: $v.form.userSurname.$error, valid: $v.form.userSurname.$dirty && !$v.form.userSurname.$invalid}"
              type="text" class="form-control">
            <p class="form-warning" v-if="!$v.form.userSurname.nameSurnameLength">En az 2 karakter girmelisiniz</p>
            <p class="form-warning" v-if="!$v.form.userSurname.minLength">En az 2 karakter girmelisiniz</p>
            <p class="form-warning" v-if="!$v.form.userSurname.required">Bu alan zorunludur.</p>
          </div>
        </div>

        <div class="form-group">
          <label for="userMail">E-Posta</label>
          <input 
            v-model="form.userMail" 
            v-bind:class="{error: $v.form.userMail.$error, valid: $v.form.userMail.$dirty && !$v.form.userMail.$invalid}"
            inputmode="email" type="email" class="form-control">
          <p class="form-warning" v-if="!$v.form.userMail.email">Yanlış mail formatı</p>
          <p class="form-warning" v-if="!$v.form.userMail.required">Bu alan zorunludur.</p>
        </div>

        <div class="form-group">
          <label for="userPhone">Telefon Numarası</label>
          <div class="d-flex">
            <the-mask name="phone" autocomplete="tel"
              mask="0(###) ### ## ##"
              placeholder="(---) --- -- --"
              v-model="form.userPhone"
              v-bind:class="{ error: $v.form.userPhone.$error, valid: $v.form.userPhone.$dirty && !$v.form.userPhone.$invalid,}"
              type="tel"
              class="form-control"
            />
          </div>
          <p class="form-warning" v-if="!$v.form.userPhone.required">Bu alan zorunludur.</p>
          <p class="form-warning" v-if="!$v.form.userPhone.minLength">Yanlış telefon formatı</p>
        </div>

        <div class="form-group">
          <label for="userTc">TC Kimlik No</label>
          <the-mask
            mask="###########"
            v-model="form.userTc"
            v-bind:class="{
              error: $v.form.userTc.$error,
              valid: $v.form.userTc.$dirty && !$v.form.userTc.$invalid,
            }"
            type="tel"
            class="form-control"
          />
          <p class="form-warning" v-if="!$v.form.userTc.required">Bu alan zorunludur.</p>
          <p class="form-warning" v-if="!$v.form.userTc.minLength">Yanlış format</p>
        </div>
          

        <div class="form-group password position-relative">
          <label for="userPass">Şifre</label>
          <input class="form-control" type="password"
            v-model="form.userPass" 
            v-on:input="removeSpace"
            v-bind:class="{error: $v.form.userPass.$error, valid: $v.form.userPass.$dirty && !$v.form.userPass.$invalid}"
            >
          <p class="form-warning" v-if="!$v.form.userPass.required">Bu alan zorunludur.</p>
          <p class="form-warning" v-if="!$v.form.userPass.minLength">En az 2 karakter girmelisiniz</p>          
        </div>
        
        <div class="form-group password position-relative">
          <label for="passRepeat">Şifre Tekrar</label>
          <input class="form-control" type="password"
            v-model="form.passRepeat" 
            v-on:input="removeSpace"
            v-bind:class="{error: $v.form.passRepeat.$error, valid: $v.form.passRepeat.$dirty && !$v.form.passRepeat.$invalid}"
            >
          <p class="form-warning" v-if="!$v.form.passRepeat.sameAsPassword">Şifreler uyuşmuyor.</p>          
        </div>


        <label class="custom-checkbox flex-wrap d-flex align-items-center"><a class="mx-1" href="/kvkk" target="_blank">KVKK</a>  okudum, onaylıyorum.
          <input type="checkbox"
          v-model="form.kvkk"
          v-bind:class="{error: $v.form.kvkk.$error, valid: $v.form.kvkk.$dirty && !$v.form.kvkk.$invalid}"
          >
          <span class="checkmark"></span>
        </label>
        
    
        <div class="d-flex align-items-center justify-content-between">
          <p v-if="formMessage">Kaydını alındı.</p>
          <Button class="ml-auto"
            Text="Kayıt Ol"
            :isRouting="false"
          />
        </div>

      </form>
    </div>

  </div>
</template>

<script>
import Button from '@/components/Button';

import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import "firebase/firestore";

// init services
export const db = getFirestore();
export const auth = getAuth();

import {required, email, minLength, sameAs} from 'vuelidate/lib/validators';

const checkTcNum = function (value) {
  if (value.length > 0) {
    value = value.toString();
    var isEleven = /^[0-9]{11}$/.test(value);
    var totalX = 0;
    for (var i = 0; i < 10; i++) {
      totalX += Number(value.substr(i, 1));
    }
    var isRuleX = totalX % 10 == value.substr(10, 1);
    var totalY1 = 0;
    var totalY2 = 0;
    for (var i = 0; i < 10; i += 2) {
      totalY1 += Number(value.substr(i, 1));
    }
    for (var i = 1; i < 10; i += 2) {
      totalY2 += Number(value.substr(i, 1));
    }
    var isRuleY = (totalY1 * 7 - totalY2) % 10 == value.substr(9, 0);
    return isEleven && isRuleX && isRuleY;
  }
  return true;
};

const nameSurnameLength = (value) => {
  let isValid = true;
  value.split(" ").forEach(e => {
    if(e.length < 2){
      isValid = false;
    }
  });
  return isValid;
}

export default {
  components: { Button },
  data(){
    return{
      formMessage: false,
      form: {
        userName: '',
        userSurname: '',
        userMail: '',
        userPhone: '',
        userTc: '',
        userPass: '',
        kvkk: false,
      },
    }
  },
  validations: {
    form:{
      userName: {
        required,
        nameSurnameLength,
        minLength: minLength(2),
      },
      userSurname: {
        required,
        nameSurnameLength,
        minLength: minLength(2),
      },
      userMail: {
        required,
        email: email
      },
      userPhone: {
        required,
        minLength: minLength(10),
      },
      userTc: {
        required,
        checkTcNum,
      },
      userPass: {
        required,
        minLength: minLength(2),
      },
      passRepeat: {
        sameAsPassword: sameAs('userPass')
      },
      kvkk: { checked: value => value === true },
    },
  },
  methods:{
    removeSpace: function(event){
      this.form.userName = this.form.userName.replace( /\s\s+/g, ' ' ).trimStart();
      this.form.userName = this.form.userName.replace(/[0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
    },
    submitForm(){
      this.$v.$touch();
      if(!this.$v.form.$invalid){
        console.log(this.$v.form);
        
        let form = {
          email: this.$v.form.$model.userMail,
          password: this.$v.form.$model.userPass,
          name: this.$v.form.$model.userName,
          surname: this.$v.form.$model.userSurname,
          isActive: true,
          phone: this.$v.form.$model.userPhone,
          // displayName: this.$v.form.$model.userName + this.$v.form.$model.userSurname,
          // phoneNumber: this.$v.form.$model.userPhone,
        }

        console.log(form);

        createUserWithEmailAndPassword(auth, form.email, form.password)
          .then((cred) => {
            console.log(cred.user);
          })
          .catch((err) =>{
            console.log(err.message);
          })

        // this.$api.createUser(form.email, form.password);
        // this.$api.addDoc("teachers", form);
        // this.formMessage = true;
        
      }else{}
    }
  }
}
</script>

<style lang="scss" scoped>
.container{

  .form-wrapper{
    max-width: 900px;
    min-width: 550px;
    background-color: #fff;
    padding: 2rem;
    border-radius: var(--radiusF);
  }

  @media (max-width: 567px) {
    .form-wrapper{
      min-width: unset
    }
  }
}
</style>