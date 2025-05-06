<template>
    <div class="row">
      <div class="text-h4 text-primary">{{ title }}</div>
    </div>
    <q-img :src="image" height="350px" class="rounded-img" />
  </template>
  
  <script setup>
  const props = defineProps({
    title: { type: String, required: true },
    image: { type: String, required: true }
  })
  </script>
  
  <style scoped>
  .rounded-img {
    border-radius: 10px;
  }
  </style>