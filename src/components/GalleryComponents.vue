<template>
  <app-bar-component />
  <side-bar-menu>
    <v-row style="margin-bottom: 10vh; margin-right: 5vh; margin-top: 10vh;">
      <v-col v-for="images in dataRickAndMorty" :key="images.id" class="d-flex child-flex" cols="4">
        <v-img :src="`${images.image}`" :lazy-src="`${images}`" aspect-ratio="1" cover class="bg-grey-lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </side-bar-menu>
</template>

<script>
import AppBarComponent from './AppBarComponent.vue';
import SideBarMenu from './SideBarMenu.vue';
export default {
  components: {
    AppBarComponent,
    SideBarMenu
  },
  data() {
    return {
      dataRickAndMorty: [],
    }
  },
  created: function () {
    this.getDataRickAndMorty()
  },
  methods: {
    getDataRickAndMorty() {
      fetch('https://consultasecuador.com/api/pokemon')
        .then(response => response.json())
        .then((responseData) => {

          responseData.data.forEach(element => {
            this.dataRickAndMorty.push(element)
          });

        }).catch(console.log)
    },
  }
}
</script>