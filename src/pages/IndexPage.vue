<script setup lang="ts">
import AdvertisementCard from "src/components/AdvertisementCard.vue";
import CategorySelector from "../components/CategorySelector.vue";
import {ads} from '../ads'

const advertisements = ads
</script>

<template>
  <q-page class="q-mx-auto">
    <div class="row justify-center">
      <CategorySelector/>
    </div>
    <div class="row justify-center">
      <AdvertisementCard class="col-lg-4 col-md-6 col-sm-12" />
      <AdvertisementCard class="col-lg-4 col-md-6 col-sm-12" />
      <AdvertisementCard class="col-lg-4 col-md-6 col-sm-12" />
      <AdvertisementCard class="col-lg-4 col-md-6 col-sm-12" />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 3vw;
}
</style>
