<script setup lang="ts">
import { useStore } from "../stores/store";
import { Dialog } from "quasar";
import { reactive } from "vue";
import { ref } from "vue";
const store = useStore();

let date = ref("2019/02/01");
let value = ref(null);

function ShowDialog() {
  // kategórák kiolvasása az "egy" oldalról
  store.one_GetAll();
  store.many_GetById(); // Before show dialog set "store.many.document.id" field!!!
}

function HideDialog() {
  store.many.document = {};
}

function Close() {
  store.app.showEditDialog = false;
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

function Submit() {
  Dialog.create({
    title: "Megerősítés",
    message: "Szeretnéd menteni a változásokat?",
    ok: "Igen",
    cancel: "Nem",
    persistent: true,
  })
    .onOk(() => {
      store.many_EditById();
      // router.push("/xcard");
    })
    .onCancel(() => {
      // router.push("/xcard");
    });
}

function Reset() {
  store.many.document = { ...store.many.documentOld };
}
</script>

<template>
  <q-dialog v-model="store.app.showEditDialog" persistent @hide="HideDialog()" @show="ShowDialog()">
    <q-card class="q-pa-md q-gutter-md" style="width: 60vw; min-width: 300px">
      <q-form @reset="Reset()" @submit="Submit()">
        <div class="q-gutter-md">
          <h5 class="text-center">Hirdetés szerkesztése</h5>

          <q-select
            v-model="r.kategoria_id"
            filled
            emit-value
            label="Kategória"
            map-options
            option-label="categoryNameField"
            option-value="id"
            :options="store.one.documents"
            :rules="[(v) => v != null || 'Kérem válasszon kategóriát!']"
          />
          <q-input
            v-model="r.cim"
            filled
            label="Cím"
            :rules="[(v) => (v != null && v != '') || 'A hirdetés címe nem lehet üres!']"
            type="text"
          />

          <q-input
            v-model="r.leiras"
            filled
            label="Leírás"
            :rules="[(v) => (v != null && v != '') || 'Kérem töltse ki a leírást!']"
            type="textarea"
          />

          <q-input filled v-model="date" mask="date" :rules="['date']" label="Leírás">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-checkbox v-model="r.serulesmentes" label="Sérülésmentes" />

          <q-field
            class="q-field--filled q-input q-field--float q-field--labeled q-field--with-bottom"
            label="Meghirdetett ár"
          >
            <input class="q-field__native q-placeholder" v-model="r.vetelar" type="number" />
          </q-field>

          <q-input filled bottom-slots v-for="kep, index in r.kepek" v-model="r.kepek[index]" label="Label" >
            <template v-slot:append>
              
              <q-icon name="close" @click="" class="cursor-pointer" />
            </template>
            
          </q-input>

          <div class="row justify-center q-gutter-lg">
            <q-btn color="green" label="Save" no-caps type="submit" />
            <q-btn color="red" label="Reset" no-caps type="reset" />
            <q-btn color="blue" label="Close" no-caps @click="Close()" />
          </div>
        </div>
      </q-form>
      <!-- {{ store.many.document }} -->
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped></style>
