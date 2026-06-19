<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="GT3 Racing Hub" />
        <v-divider />
        <v-list-item title="Автомобили GT3" />
        <v-list-item title="Результаты сезона" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="red-darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>GT3 Racing Hub</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="text-center my-6">
          Автомобили GT3
        </h1>

        <v-row>
          <v-col
            v-for="car in cars"
            :key="car.name"
            cols="12"
            md="4"
          >
            <v-card elevation="8">
              <v-img
                :src="car.image"
                height="250"
                cover
                :position="car.position"
              />

              <v-card-title>
                {{ car.name }}
              </v-card-title>

              <v-card-text>
                <div class="mb-2">
                  Мощность: {{ car.power }} л.с.
                </div>

                <v-rating
                  :model-value="car.rating"
                  readonly
                  color="amber"
                  density="comfortable"
                />
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="red"
                  variant="text"
                  @click="openDialog(car)"
                >
                  Подробнее
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <h2 class="mt-8 mb-4">
          Результаты сезона
        </h2>

        <v-data-table
          :headers="headers"
          :items="results"
        />
      </v-container>
    </v-main>

    <v-dialog
      v-model="dialog"
      max-width="700"
    >
      <v-card>
        <v-img
          :src="selectedCar.image"
          height="300"
          cover
          :position="selectedCar.position"
        />

        <v-card-title>
          {{ selectedCar.name }}
        </v-card-title>

        <v-card-text>
          <p>{{ selectedCar.description }}</p>

          <p class="mt-3">
            Мощность: {{ selectedCar.power }} л.с.
          </p>

          <v-rating
            :model-value="selectedCar.rating"
            readonly
            color="amber"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="red"
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const dialog = ref(false)

const selectedCar = ref({})

const cars = [
  {
    name: 'Porsche 911 GT3 R',
    power: 565,
    rating: 5,
    position: 'center',
    image: 'https://i.pinimg.com/736x/4e/62/f4/4e62f4212a1210aeb425b169e882648d.jpg',
    description:
      'Porsche 911 GT3 R — один из самых успешных автомобилей категории GT3. Используется во множестве международных чемпионатов.'
  },
  {
  name: 'BMW M4 GT3',
  power: 590,
  rating: 4,
  position: 'center',
  image: 'https://i.pinimg.com/736x/8f/98/db/8f98dbdfb56fba6589e04f0022398154.jpg',
  description:
    'BMW M4 GT3 — современный гоночный автомобиль BMW Motorsport. Оснащён мощным турбированным двигателем и активно используется в GT World Challenge, IMSA и других международных сериях.'
},
  {
    name: 'Mercedes AMG GT3',
    power: 550,
    rating: 5,
    position: 'center',
    image: 'https://i.pinimg.com/1200x/92/2b/5a/922b5a7fb189064ca28efc66c6a4eb5d.jpg',
    description:
      'Mercedes-AMG GT3 является одним из самых популярных и успешных автомобилей класса GT3 последних лет.'
  }
]

const headers = [
  {
    title: 'Пилот',
    key: 'driver'
  },
  {
    title: 'Команда',
    key: 'team'
  },
  {
    title: 'Очки',
    key: 'points'
  }
]

const results = [
  {
    driver: 'Max Verstappen',
    team: 'Red Bull',
    points: 350
  },
  {
    driver: 'Lando Norris',
    team: 'McLaren',
    points: 310
  },
  {
    driver: 'Charles Leclerc',
    team: 'Ferrari',
    points: 285
  }
]

function openDialog(car) {
  selectedCar.value = car
  dialog.value = true
}
</script>

<style>
body {
  background-color: #0a0a0a;
}
</style>