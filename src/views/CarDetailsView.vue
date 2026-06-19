<template>
  <v-container>

    <h1>
      Автомобиль № {{ id }}
    </h1>

    <p>
      Страница создана через Vue Router Dynamic Route.
    </p>

    <v-btn
        color="red"
        to="/cars"
    >
      Назад
    </v-btn>

  </v-container>
</template>

<script setup>
defineProps({
  id: String
})
</script>