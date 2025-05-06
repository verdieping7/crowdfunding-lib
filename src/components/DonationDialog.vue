<template>
    <q-dialog :model-value="modelValue">
      <q-card>
        <q-card-section class="text-h6">Doneer</q-card-section>
        <q-card-section>
          <q-input v-model="name" label="Naam" />
          <q-input v-model="amount" label="Bedrag" type="number" />
          <q-input v-model="message" label="Bericht" type="textarea" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Annuleer" @click="cancel" />
          <q-btn flat label="Doneer" @click="submit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
  
  <script setup>
  import { ref, watch, defineEmits, defineProps } from 'vue'
  const emit = defineEmits(['update:modelValue', 'submitDonation'])
  const props = defineProps({ modelValue: Boolean })
  const name = ref('')
  const amount = ref(0)
  const message = ref('')
  function cancel() { emit('update:modelValue', false) }
  function submit() {
    emit('submitDonation', { name: name.value, amount: amount.value, message: message.value })
    emit('update:modelValue', false)
  }
  watch(() => props.modelValue, v => { if (v) { name.value = ''; amount.value = 0; message.value = '' } })
  </script>