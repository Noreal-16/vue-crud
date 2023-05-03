
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
                    <v-list-item to="/" prepend-icon="mdi-home" title="Home"></v-list-item>
                    <v-list-item to="/form" prepend-icon="mdi-plus" title="Registrar Posts"></v-list-item>
                    <v-list-item to="/gallery" prepend-icon="mdi-image-album" title="Galeria"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: auto; padding-left: 18%">
                <slot></slot>
            </v-main>
        </v-layout>
    </v-card>
</template>
<script >
//import FormComponet from './FormComponet.vue';
//import TableComponents from './TableComponents.vue';
//import GalleryComponents from './GalleryComponents.vue';
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
        //FormComponet,
        //TableComponents,
        //GalleryComponents
    }
}
</script>