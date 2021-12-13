<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" autocomplete="off" class="w-100">
        <h2>Kurs Oluştur</h2>
        
        <div class="form-group">
          <label for="userName">Adı</label>
          <input 
            v-model="form.userName" 
            v-on:input="removeSpace"
            v-bind:class="{error: $v.form.userName.$error, valid: $v.form.userName.$dirty && !$v.form.userName.$invalid}"
            type="text" class="form-control">
          <p class="form-warning" v-if="!$v.form.userName.nameSurnameLength">En az 2 karakter girmelisiniz</p>
          <p class="form-warning" v-if="!$v.form.userName.minLength">En az 2 karakter girmelisiniz</p>
          <p class="form-warning" v-if="!$v.form.userName.required">Bu alan zorunludur.</p>
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


        <label class="custom-checkbox flex-wrap d-flex align-items-center"><a class="mx-1" href="/kvkk" target="_blank">KVKK</a> ve  <a href="/aydinlatma-ve-riza-metni" class="mx-1" target="_blank"> Aydınlatma metnini</a>  okudum, onaylıyorum.
          <input type="checkbox"
          v-model="form.kvkk"
          v-bind:class="{error: $v.form.kvkk.$error, valid: $v.form.kvkk.$dirty && !$v.form.kvkk.$invalid}"
          >
          <span class="checkmark"></span>
        </label>
        
    
        <Button class="float-right"
          Text="Kayıt Ol"
          :isRouting="false"
        />

      </form>
    </div>

  </div>
</template>

<script>
import Button from '@/components/Button';

import {required, email, minLength, sameAs} from 'vuelidate/lib/validators';

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
      form: {
        userName: '',
        userSurname: '',
        userMail: '',
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
      userPass: {
        required,
        minLength: minLength(2),
      },
      passRepeat: {
        sameAsPassword: sameAs('userPass')
      },
      kvkk: { checked: value => value === true },
    }
  },
  methods:{
    removeSpace: function(event){
      this.form.userName = this.form.userName.replace( /\s\s+/g, ' ' ).trimStart();
      this.form.userName = this.form.userName.replace(/[0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
    },
    submitForm(){
      this.$v.$touch();
      console.log(this.$v.form);
      if(!this.$v.form.$invalid){
        // this.getinfoCreate(this.$v.form);
      }else{}
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  min-height: 100vh;

  .form-wrapper{
    max-width: 550px;
    background-color: #fff;
    padding: 2rem;
    border-radius: var(--radiusF);
  }
}
</style>