<script setup lang="ts">
import CategorySelector from "../components/CategorySelector.vue";
//import EditDialogComponent from "../components/EditDialogComponent.vue";
import { useStore } from "../stores/store";
const store = useStore();

//store.app.showEditDialog = true;
</script>

<template>
  <q-page>
    <CategorySelector></CategorySelector>
    <EditDialogComponent></EditDialogComponent>
  </q-page>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 3vw;
}
</style>
