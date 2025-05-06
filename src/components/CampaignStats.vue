<template>
    <q-card flat class="q-pa-md">
      <div class="text-subtitle2">{{ supporters }} supporters</div>
      <q-linear-progress :value="progress/100" stripe rounded size="20px">
        <div class="absolute-full flex flex-center">
          <q-badge :label="progress + '%" />
        </div>
      </q-linear-progress>
      <div class="q-mt-sm">
        {{ formatCurrency(totalDonations) }} / {{ formatCurrency(goal) }}
      </div>
      <div>{{ daysLeft }} dagen over</div>
    </q-card>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useCampaign } from '../composables/useCampaign'
  
  const props = defineProps({ goal: { type: Number, required: true } })
  const { totalDonations, supporters, daysLeft } = useCampaign(1)
  
  const progress = computed(() =>
    Math.round((totalDonations.value / props.goal) * 100)
  )
  
  function formatCurrency(v) {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(v)
  }
  </script>