<script setup lang="ts">
import { ref } from "vue";

let model = ref(null);
let options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>

<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select outlined v-model="model" :options="options" label="Kategória" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 3vw;
}
</style>
