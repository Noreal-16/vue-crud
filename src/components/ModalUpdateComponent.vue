<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn style="margin-right: 2vh;" class="text-none text-subtitle-1 d-flex justify-content-center"
                    color="teal-darken-2" size="small" variant="outlined" prepend-icon="mdi-pencil" v-bind="props">
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="teal lighten-2 accent-4">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Actualizar Posts</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <form @submit.prevent="updatePosts">
                    <v-text-field v-model="title" name="title" :counter="10" label="Title" required></v-text-field>
                    <v-text-field v-model="body" name="body" :counter="10" label="Body" required></v-text-field>
                    <v-text-field v-model="userId" name="userId" :counter="10" type="number" label="UserId"
                        required></v-text-field>
                    <v-btn class="mr-4" type="submit" :disabled="invalid">
                        Actualizar
                    </v-btn>
                </form>

            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    props: {
        idPosts: Number
    },
    data() {
        return {
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            title: '',
            body: '',
            userId: '',
            id: 0,
        }
    },
    mounted() {
        this.getPostById()
    },
    methods: {
        getPostById() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.idPosts}`)
                .then((response) => response.json())
                .then((json) => {
                    this.title = json.title;
                    this.body = json.body;
                    this.userId = json.userId
                });
        },
        updatePosts() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.idPosts}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: this.idPosts,
                    title: this.title,
                    body: this.body,
                    userId: this.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    this.$swal({
                        position: 'top-end',
                        icon: 'success',
                        title: `Se Actualizó título ${json.title} correctamente`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }
    }
}
</script>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
}
</style>