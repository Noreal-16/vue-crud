<template>
    <form @submit.prevent="loginUsers">
        <v-text-field v-model="email" type="email" label="Correo" required></v-text-field>
        <v-text-field v-model="password" type="password" label="Contraseña" required></v-text-field>
        <v-btn class="me-4" type="submit">
            Iniciar Sesión
        </v-btn>
        <v-btn @click="handleReset">
            Cancelar
        </v-btn>
    </form>
</template>

<script>
import dataLogin from '@/utils/dataLogin';
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    }, methods: {
        loginUsers() {
            const verifyEmail = dataLogin.find(data => data.email === this.email);
            if (!verifyEmail || verifyEmail.password !== this.password || !verifyEmail.username) {

                this.$swal({
                    position: 'top-end',
                    icon: 'error',
                    title: `Usuario o contraseña son Incorrectos`,
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    this.email = '';
                    this.password = '';
                })
            } else {
                this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: `Bienvenido al sistema ${verifyEmail.username}`,
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    localStorage.setItem('email', verifyEmail.email);
                    localStorage.setItem('user', verifyEmail.username);
                    this.$router.push('/')
                })
            }
        }
    }
}
</script>