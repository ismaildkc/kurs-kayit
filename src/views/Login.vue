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

import { getFirestore, collection, getDocs, onSnapshot, doc, query, where } from 'firebase/firestore';
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import "firebase/firestore";

// init services
export const db = getFirestore();
export const auth = getAuth();

import {required, email, minLength, sameAs} from 'vuelidate/lib/validators';

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
            this.getThisUser(cred.user.email)
          })
          .catch((err) => {
            console.log(err.message);
          })
        // this.getinfoCreate(this.$v.formLogin);
      }else{}
    },
    getThisUser(email){
      console.log("email", email)
      const colRef = collection(db, 'users');
      const q = query(colRef, where("email", "==", email));

      onSnapshot(q, (snapshot) => {
        let course = [];
        snapshot.docs.forEach((doc) => {
          course.push({ ...doc.data(), id: doc.id })
        })
        console.log("bu", course);
      })

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