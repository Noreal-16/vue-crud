<template>
  <form class="form" @submit.prevent="registerPost" style="margin-bottom: 10vh;">
    <v-text-field v-model="title" name="title" :counter="10" label="Título" required></v-text-field>
    <v-text-field v-model="body" name="body" :counter="10" label="Cuerpo" required></v-text-field>
    <v-text-field v-model="userId" name="userId" :counter="10" type="number" label="Id Usuario" required></v-text-field>
    <v-btn class="mr-4" type="submit" color="teal-darken-2" variant="outlined" :disabled="invalid">
      Registrar
    </v-btn>
    <v-btn color="red-darken-4" variant="outlined" @click="redirection">
      Cancelar
    </v-btn>

  </form>
</template>

<script>
import dataPost from '../utils/data';
export default {
  components: {
  },
  data: () => ({
    title: '',
    body: '',
    userId: '',
  }),

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

      const dataForm = {
        id: dataPost.length + 1,
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
    },
    clear() {
      this.title = ''
      this.body = ''
      this.userId = ''
    },
    redirection() {
      window.location.href = '/'
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