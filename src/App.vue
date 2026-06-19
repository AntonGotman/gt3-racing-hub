<template>
  <v-app>

    <v-app-bar color="red-darken-4">

      <v-toolbar-title>
        GT3 Racing Hub
      </v-toolbar-title>

      <v-spacer />

      <v-btn to="/" variant="text">
        Главная
      </v-btn>

      <v-btn to="/cars" variant="text">
        Автомобили
      </v-btn>

      <v-btn to="/results" variant="text">
        Результаты
      </v-btn>

      <!-- 💙 ИЗБРАННОЕ С БЕЙДЖЕМ -->
      <v-btn to="/favorites" variant="text" class="ml-2">

        <v-badge
          :content="favoriteCount"
          color="blue"
          v-if="favoriteCount > 0"
          offset-x="5"
          offset-y="5"
        >
          <v-icon>mdi-heart</v-icon>
        </v-badge>

        <v-icon v-else>
          mdi-heart-outline
        </v-icon>

        <span class="ml-2">
          Избранное
        </span>

      </v-btn>

      <v-btn to="/about" variant="text">
        О проекте
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const favoriteCount = computed(() => store.getters.favoriteCount)
</script>