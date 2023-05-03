<template>
    <div>
        <v-app-bar color="teal lighten-2 accent-4" dense dark>

            <v-toolbar-title to="/">Aplicación Prueba Técnica</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn class="mr-4" :disabled="lengthInputs > 30" type="submit" color="white" append-icon="mdi-logout"
                variant="outlined" @click="logoutUser">
                Cerrar Sesión
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    methods: {
        logoutUser() {

            this.$swal({
                title: `Seguro que desea Cerrar sesión?`,
                showDenyButton: true,
                confirmButtonText: 'Si, Seguro',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('user');
                    localStorage.removeItem('email');
                    this.$swal(`Bye`, '', 'success').then(() => {
                        this.$router.push('/auth')
                    })
                } else if (result.isDenied) {
                    this.$swal('No se guardaron los cambios', '', 'info')
                }
            })


        }
    }
}
</script>
<style></style>