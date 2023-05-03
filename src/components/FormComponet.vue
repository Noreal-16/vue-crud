<template>
  <app-bar-component />
  <side-bar-menu>
    <form class="form" @submit.prevent="registerPost" style="margin-bottom: 10vh; margin-top: 10vh;">
      <v-text-field v-model="title" name="title" :counter="30" label="Título" :error-messages="inputErrorMsg" required></v-text-field>
      <v-text-field v-model="body" name="body" :counter="30" label="Cuerpo" :error-messages="inputErrorMsg" required></v-text-field>
      <v-text-field v-model="userId" name="userId"  type="number" label="Id Usuario" required></v-text-field>
      <v-btn class="mr-4" :disabled="lengthInputs > 30 " type="submit" color="teal-darken-2" variant="outlined" >
        Registrar
      </v-btn>
      <v-btn color="red-darken-4" variant="outlined" @click="goBack">
        Cancelar
      </v-btn>

    </form>
  </side-bar-menu>
</template>

<script>
import dataPost from '../utils/data';
import AppBarComponent from './AppBarComponent.vue';
import SideBarMenu from './SideBarMenu.vue';
export default {
  components: {
    AppBarComponent,
    SideBarMenu
  },
  data: () => ({
    title: '',
    body: '',
    userId: '',
    inputErrorMsg:''
  }),
  computed: {
    lengthInputs() {
      return this.title.length || this.body.length
    }
  },
  methods: {
    registerPost() {

      if (!this.title && !this.body && !this.userId) {
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: `Los campos del formulario son requeridos por favor completarlos`,
          showConfirmButton: false,
          timer: 1500
        })
      }

      if (this.lengthInputs > 30) {
        this.inputErrorMsg = 'No se puede exceder en la cantidas de carácteres permitidos'
      }

      this.inputErrorMsg =''
      const dataForm = {
        id: dataPost.length + 3,
        title: this.title,
        body: this.body,
        userId: this.userId
      }

      dataPost.push(dataForm);
      this.$swal({
        position: 'top-end',
        icon: 'success',
        title: `Se registro título ${dataForm.title} correctamente`,
        showConfirmButton: false,
        timer: 1500
      })

      console.log(dataPost)
      this.clear();
      this.$router.push('/')
    },
    clear() {
      this.title = ''
      this.body = ''
      this.userId = ''
    },
    goBack() {
      window.history.go(-1);
    }
  },
}
</script>

<style scoped>
.form {
  max-width: 600px;
  margin: 0 auto;
}

.form-input {
  width: 100%;
  margin-bottom: 10px;
}

.form-btn {
  margin-top: 20px;
}
</style>