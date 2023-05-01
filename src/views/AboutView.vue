<template>
  <app-bar-component/>
  <side-bar-menu/>

</template>

<script>
import AppBarComponent from '@/components/AppBarComponent.vue';
import SideBarMenu from '@/components/SideBarMenu';
export default {
  components:{
    AppBarComponent,
    SideBarMenu
  }
}
</script>