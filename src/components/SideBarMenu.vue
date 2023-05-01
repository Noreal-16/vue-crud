
<template>
    <v-card min-width="100%">
        <v-layout>
            <v-navigation-drawer expand-on-hover rail permanent>
                <v-list>
                    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
                        subtitle="sandra_a88@gmailcom"></v-list-item>
                </v-list>

                <v-divider></v-divider>
                <v-list dense nav>
                    <v-list-item @click="changeView('registro')" prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
                    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 90vh; padding-left: 18%">
                <h1 style="padding: 0px 50px;">Hola Mundo</h1>
                <div v-if="views === 'registro'">
                    <form-componet/>
                </div>
                <router-view />
            </v-main>
        </v-layout>
    </v-card>
</template>
<script >
import FormComponet from './FormComponet.vue';
export default {
    data() {
        return {
            views: null
        }
    },
    methods:{
        changeView(view){
            this.views = view;
        }
    },
    components:{
        FormComponet
    }
}
</script>