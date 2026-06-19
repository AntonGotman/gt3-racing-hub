<template>
  <v-container>
    <h1 class="mb-5">
      Избранные автомобили
    </h1>

    <v-alert
      v-if="favorites.length === 0"
      type="info"
    >
      Пока нет избранных автомобилей
    </v-alert>

    <v-row>
      <v-col
        v-for="car in favorites"
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

          <v-card-actions>
            <v-btn
              color="red"
              @click="removeFavorite(car.id)"
            >
              Удалить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const favorites = computed(
  () => store.state.favorites
)

function removeFavorite(id) {
  store.dispatch('deleteFavorite', id)
}
</script>