<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="form-wrapper">
      
      <!-- SignIn For -->
      <form @submit.prevent="signIn" autocomplete="off" class="w-100">
        <h2>Giriş Yap</h2>
                  
        <div class="form-group">
          <label for="userMail">E-Posta</label>
          <input 
            v-model="formLogin.userMail" 
            v-bind:class="{error: $v.formLogin.userMail.$error, valid: $v.formLogin.userMail.$dirty && !$v.formLogin.userMail.$invalid}"
            inputmode="email" type="email" class="form-control">
          <p class="form-warning" v-if="!$v.formLogin.userMail.email">Yanlış mail formatı</p>
          <p class="form-warning" v-if="!$v.formLogin.userMail.required">Bu alan zorunludur.</p>
        </div>
          

        <div class="form-group password position-relative">
          <label for="userPass">Şifre</label>
          <input class="form-control" type="password"
            v-model="formLogin.userPass" 
            v-bind:class="{error: $v.formLogin.userPass.$error, valid: $v.formLogin.userPass.$dirty && !$v.formLogin.userPass.$invalid}"
            >
          <p class="form-warning" v-if="!$v.formLogin.userPass.required">Bu alan zorunludur.</p>
          <p class="form-warning" v-if="!$v.formLogin.userPass.minLength">En az 2 karakter girmelisiniz</p>          
        </div>

        <div class="d-flex align-items-center justify-content-between">
          <p>Üye değilsen <router-link to="kayit-ol" class="text-underline">Kayıt ol</router-link></p>

          <Button class="float-right"
            Text="Giriş Yap"
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
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';
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
      login: true,
      formMessage: false,
      formLogin: {
        userMail: '',
        userPass: '',
      },
    }
  },
  validations: {
    formLogin:{
      userMail: {
        required,
        email: email
      },
      userPass: {
        required,
        minLength: minLength(2),
      },
    }
  },
  methods:{
    signIn(){
      this.$v.$touch();
      if(!this.$v.formLogin.$invalid){
        
        signInWithEmailAndPassword(auth, this.$v.formLogin.$model.userMail, this.$v.formLogin.$model.userPass)
          .then((cred) => {
            console.log("user login:", cred.user);
            this.$store.commit("_userInfo", cred.user);
            localStorage.setItem("_userInfo", JSON.stringify(cred.user));
          })
          .catch((err) => {
            console.log(err.message);
          })
        // this.getinfoCreate(this.$v.formLogin);
      }else{}
    },
    signOut(){
      signOut(auth)
      .then(() => {
        console.log("signed out.");
      })
      .catch((err) => {
        console.log(err.message);
      })
    },
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