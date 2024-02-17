<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "../stores/store";
import { ref } from "vue";
const store = useStore();

function editDocument() {
  store.many.document._id = store.app.selectedMany[0]._id;
  store.app.showEditDialog = true;
}

interface Hirdetes {
  _id: number;
  kategoria_id: number;
  cim: string;
  evjarat: string;
  km_allas: number;
  szin: string;
  uzemanyag: string;
  hengerurtartalom: number;
  teljesitmeny: number;
  serulesmentes: boolean;
  leiras: string;
  hirdetes_datum: string;
  vetelar: number;
  kepek: string[];
  teljesitmeny_kw: number;
}

let slide = ref(0);

const r = reactive<Hirdetes>({
  _id: 20,
  kategoria_id: 1,
  cim: "OPEL VECTRA C Caravan 2.2 Elegance (Automata)",
  evjarat: "2007",
  km_allas: 247857,
  szin: "bordó/meggy",
  uzemanyag: "Benzin",
  hengerurtartalom: 2198,
  teljesitmeny: 155,
  serulesmentes: false,
  leiras:
    "Amit tudni érdemes róla: 248326 km van az autóban. 2024.11-ig érvényes műszakival rendelkezik. Az autón található egy két karcolás ami működésében nem befolyásolja. Levehető vonóhorog van az autón, a termosztát cserélve van, a gyertyák, az összes szűrő kivan cserélve, Sajnálatos módon a katalizátor feladta a szolgálatot amit körülbelül 75-100k ért lehet cserélni. Téli gumi van rajta. 2.2 benzines motor Z22YH motor kóddal. Az ár fix!",
  hirdetes_datum: "2023-01-05T00:00:00.000Z",
  vetelar: 1000000,
  kepek: [
    "https://nitslaszlo.github.io/static/hahu/20a.jpg",
    "https://nitslaszlo.github.io/static/hahu/20b.jpg",
    "https://nitslaszlo.github.io/static/hahu/20c.jpg",
  ],
  teljesitmeny_kw: 114,
});

let title = "Mercedes";
let szin = "ezüst";
let evjarat = 2006;
let henger = 2148;
let hirdetes = new Date("2023-08-30");

let teljesLeiras = ref(false);

let image = "https://nitslaszlo.github.io/static/hahu/24a.jpg";

let desc =
  "Mercedes CLK 220CDI, 2006 évjárat. Extrákkal gazdagon szerelt (minden rendeltetés szerűen működik) Motor, váltó, futómű, hibátlan költség mentes állapot! Autóbeszámítás lehetséges (nagyobb kategóriás ...";

let expanded = ref(false);
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section class="bg-secondary">
        <div class="text-h5 q-mt-sm text-center q-mb-sm">{{ r.cim }}</div>
      </q-card-section>

      <q-card-section class="bg-primary">
        <ul>
          <li>
            Szín: <b> {{ szin }} </b>
          </li>
          <li>
            Évjárat: <b> {{ evjarat }} </b>
          </li>
          <li>
            Hengerűrtaltalom: <b> {{ henger }} cm <sup>2</sup> </b>
          </li>
          <li>
            Hirdetés dátuma: <b> {{ hirdetes.toISOString() }} </b>
          </li>
        </ul>
      </q-card-section>

      <q-card-section class="bg-secondary">
        <div class="q-mt-sm text-justify q-mb-sm">{{ desc }}</div>
        <q-separator inset />
        <q-toggle v-model="teljesLeiras" label="Teljes leírás" />
      </q-card-section>

      <q-card-section v-if="r.kepek.length === 1" class="bg-primary">
        <q-img :src="r.kepek[0]" />
      </q-card-section>

      <q-card-section v-else class="bg-primary">
        <div class="q-pa-md">
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide v-for="kep, index in r.kepek" :name="index" :img-src="kep" />
          </q-carousel>
        </div>
      </q-card-section>

      <q-card-section class="bg-secondary">
        <div v-for="kep in r.kepek">
          {{ kep }}
        </div>
      </q-card-section>

      <q-card-section class="bg-primary text-center">
        <q-btn color="green" label="Hirdetés szerkesztése" no-caps @click="editDocument()" />
      </q-card-section>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
