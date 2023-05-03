<template>
  <app-bar-component/>
  <side-bar-menu>
    <table-components/>
  </side-bar-menu>

</template>

<script>
import AppBarComponent from '@/components/AppBarComponent.vue';
import SideBarMenu from '@/components/SideBarMenu';
import TableComponents from '@/components/TableComponents.vue';
export default {
  components:{
    AppBarComponent,
    SideBarMenu,
    TableComponents
  }
}
</script>