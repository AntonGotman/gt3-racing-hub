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
</script>