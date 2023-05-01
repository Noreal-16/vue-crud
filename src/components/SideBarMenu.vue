
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
                    <v-list-item @click="changeView('registro')" prepend-icon="mdi-plus" title="Registrar Posts"
                        value="myfiles"></v-list-item>
                    <v-list-item @click="changeView('gallery')" prepend-icon="mdi-image-album" title="Galeria"
                        value="myfiles"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: auto; padding-left: 18%">
                <div v-if="views === 'registro'" style="margin-top: 5vh;">
                    <form-componet />
                </div>
                <div v-else-if="views === 'gallery'" style="margin-top: 5vh;">
                    <gallery-components />
                </div>
                <div v-else style="margin-top: 10vh; margin-left: 5vh; margin-right: 4vh;">
                    <table-components />
                </div>
                <router-view />
            </v-main>
        </v-layout>
    </v-card>
</template>
<script >
import FormComponet from './FormComponet.vue';
import TableComponents from './TableComponents.vue';
import GalleryComponents from './GalleryComponents.vue';
export default {
    data() {
        return {
            views: null
        }
    },
    methods: {
        changeView(view) {
            this.views = view;
        }
    },
    components: {
        FormComponet,
        TableComponents,
        GalleryComponents
    }
}
</script>