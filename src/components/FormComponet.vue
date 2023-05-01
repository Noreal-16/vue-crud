<template>
  <form class="form" @submit.prevent="registerPost">
    <v-text-field v-model="title" name="title" :counter="10" label="Title" required></v-text-field>
    <v-text-field v-model="body" name="body" :counter="10" label="Body" required></v-text-field>
    <v-text-field v-model="userId" name="userId" :counter="10" type="number" label="UserId" required></v-text-field>
    <v-btn class="mr-4" type="submit" :disabled="invalid">
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script>
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
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: this.title,
          body: this.body,
          userId: this.userId
        }), headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((dataResponse) => {
          console.log(dataResponse)
          window.location.href ='/'
        })
    },
    clear() {
      this.title = ''
      this.body = ''
      this.userId = ''
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