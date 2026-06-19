<template>
  <v-container>

    <h1 class="mb-5">
      Автомобили GT3
    </h1>

    <v-row>

      <v-col
          v-for="car in cars"
          :key="car.id"
          cols="12"
          md="4"
      >

        <v-card>

          <v-img
              :src="car.image"
              height="250"
              cover
          />

          <v-card-title>
            {{ car.name }}
          </v-card-title>

          <v-card-text>
            {{ car.power }} л.с.
          </v-card-text>

          <v-card-actions>

            <v-btn
                color="red"
                :to="'/car/' + car.id"
            >
              Подробнее
            </v-btn>

          </v-card-actions>

        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<script setup>
const cars = [
  {
    id: 1,
    name: 'Porsche 911 GT3 R',
    power: 565,
    image: 'https://i.pinimg.com/736x/4e/62/f4/4e62f4212a1210aeb425b169e882648d.jpg'
  },
  {
    id: 2,
    name: 'BMW M4 GT3',
    power: 590,
    image: 'https://i.pinimg.com/736x/8f/98/db/8f98dbdfb56fba6589e04f0022398154.jpg'
  },
  {
    id: 3,
    name: 'Mercedes AMG GT3',
    power: 550,
    image: 'https://i.pinimg.com/1200x/92/2b/5a/922b5a7fb189064ca28efc66c6a4eb5d.jpg'
  }
]
</script>