<template>
  <form class="form" @submit.prevent="submit">
    <v-text-field v-model="name" :counter="10" :error-messages="errors" label="Name" required></v-text-field>
    <v-text-field v-model="phoneNumber" :counter="7" :error-messages="errors" label="Phone Number"
      required></v-text-field>
    <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
    <v-select v-model="select" :items="items" :error-messages="errors" label="Select" data-vv-name="select"
      required></v-select>
    <v-checkbox v-model="checkbox" :error-messages="errors" value="1" label="Option" type="checkbox"
      required></v-checkbox>
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
    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: null,
  }),

  methods: {
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
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