<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" autocomplete="off" class="w-100">
        
        <h2>Kurs Oluştur</h2>
        
        <div class="form-group">
          <label for="courseName">Kurs Adı</label>
          <input 
            v-model="form.courseName" 
            v-bind:class="{error: $v.form.courseName.$error, valid: $v.form.courseName.$dirty && !$v.form.courseName.$invalid}"
            type="text" class="form-control">
          <p class="form-warning" v-if="!$v.form.courseName.minLength">En az 2 karakter girmelisiniz</p>
          <p class="form-warning" v-if="!$v.form.courseName.required">Bu alan zorunludur.</p>
        </div>

        <div class="form-group">
          <label for="description">Açıklama</label>
          <textarea
            v-model="form.description"
            v-bind:class="{
              error: $v.form.description.$error,
              valid:
                $v.form.description.$dirty && !$v.form.description.$invalid,
            }"
            type="text"
            class="form-control"
          ></textarea>
          <p class="form-warning" v-if="!$v.form.description.required">
            Bu alan zorunludur.
          </p>
          <p class="form-warning" v-if="!$v.form.description.minLength">
            En az 10 karakter giriniz.
          </p>
        </div>

        <div class="row">
          <div class="form-group col-12 col-sm-6">
            <label for="teacher">Eğitmen</label>
            <select class="d-block" v-model="form.teacher">
              <option value="0" disabled selected>Seçiniz</option>
              <option value="1">Ali Maran</option>
              <option value="2">Ali Maran</option>
              <option value="3">Ali Maran</option>
              <option value="4">Ali Maran</option>
              <option value="5">Ali Maran</option>
            </select>
          </div>

          <div class="form-group col-12 col-sm-6">
            <label for="capacity">Kapasite</label>
            <input 
              v-model="form.capacity" 
              v-bind:class="{error: $v.form.capacity.$error, valid: $v.form.capacity.$dirty && !$v.form.capacity.$invalid}"
              type="text" class="form-control">
            <p class="form-warning" v-if="!$v.form.capacity.minLength">En az 2 karakter girmelisiniz</p>
            <p class="form-warning" v-if="!$v.form.capacity.required">Bu alan zorunludur.</p>
          </div>

        </div>
        
        <div class="form-group">
          <label for="neighborhood">Mahalle</label>
          <select class="d-block" v-model="form.neighborhood">
            <option value="0" disabled selected>Seçiniz</option>
            <option value="1">Esen Tepe</option>
            <option value="2">Esen Tepe</option>
            <option value="3">Esen Tepe</option>
            <option value="4">Esen Tepe</option>
            <option value="5">Esen Tepe</option>
          </select>
        </div>

        <div class="row">
          <div class="form-group col-12 col-sm-6">
            <label for="teacher">Başlangıç</label>
            <flat-pickr class="form-control" :config="config" v-model="form.dateStart" 
              v-bind:class="{
                error: $v.form.dateStart.$error,
                valid:
                  $v.form.dateStart.$dirty &&
                  !$v.form.dateStart.$invalid,
              }"></flat-pickr>
            <p class="form-warning" v-if="$v.form.dateStart.$invalid">
              Bu alan zorunludur.
            </p>
          </div>
          
          <div class="form-group col-12 col-sm-6">
            <label for="teacher">Bitiş</label>
            <flat-pickr class="form-control" :config="config" v-model="form.dateEnd" 
              v-bind:class="{
                error: $v.form.dateEnd.$error,
                valid:
                  $v.form.dateEnd.$dirty &&
                  !$v.form.dateEnd.$invalid,
              }"></flat-pickr>
            <p class="form-warning" v-if="$v.form.dateEnd.$invalid">
              Bu alan zorunludur.
            </p>
          </div>

        </div>
        
    
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
import {required, minLength} from 'vuelidate/lib/validators';

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { Turkish } from "flatpickr/dist/l10n/tr.js";


export default {
  components: { Button, flatPickr },
  data(){
    return{
      form: {
        courseName: '',
        description: '',
        teacher: '',
        capacity: '',
        dataStart: '',
        dataEnd: '',
      },
      config: {
        wrap: true, 
        altInput: false,
        allowInput: false,
        readOnly: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        locale: Turkish,
      },
    }
  },
  validations: {
    form:{
      courseName: {
        required,
        minLength: minLength(2),
      },
      description: {
        required,
      },
      capacity: {
        required,
      },
      teacher: {
        required
      },
      neighborhood: { required },
      dateStart: { required },
      dateEnd: { required }
    }
  },
  methods:{
    submitForm(){
      this.$v.$touch();
      console.log(this.$v.form);
      if(!this.$v.form.$invalid){
        // this.getinfoCreate(this.$v.form);
        let dataObj = {
          name: this.$v.form.$model.courseName,
          description: this.$v.form.$model.description,
          neighborhood: this.$v.form.$model.neighborhood,
          capacity: this.$v.form.$model.capacity,
          teacher: this.$v.form.$model.teacher,
          dateStart: this.$v.form.$model.dataStart,
          dateEnd: this.$v.form.$model.dataEnd,
        }

        this.$api.addDoc("courses", dataObj);
      }else{}
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  min-height: 100vh;

  .form-wrapper{
    min-width: 550px;
    background-color: #fff;
    padding: 2rem;
    border-radius: var(--radiusF);
  }
}
</style>