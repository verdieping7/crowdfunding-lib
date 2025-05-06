<template>
    <div>
      <div class="text-h6">Recent Donaties</div>
      <q-list>
        <q-item v-for="don in donations" :key="don.id">
          <q-item-section>
            <q-item-label>{{ don.name }}</q-item-label>
            <q-item-label caption>{{ don.message }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label caption>{{ formatCurrency(don.amount) }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({ donations: { type: Array, required: true } })
  function formatCurrency(v) {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(v)
  }
  </script>