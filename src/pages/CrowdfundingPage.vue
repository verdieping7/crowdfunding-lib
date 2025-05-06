<template>
    <q-page padding>
      <CampaignHeader :title="title" :image="image" />
      <CampaignStats :goal="goal" />
      <q-btn label="Doneer" @click="openDialog" class="q-my-md" color="primary" />
      <DonationDialog v-model="showDialog" @submitDonation="addDonation" />
      <DonationList :donations="recentDonations" />
    </q-page>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useCampaign } from '../composables/useCampaign'
  import { useDonations } from '../composables/useDonations'
  import CampaignHeader from './CampaignHeader.vue'
  import CampaignStats from './CampaignStats.vue'
  import DonationList from './DonationList.vue'
  import DonationDialog from './DonationDialog.vue'
  
  const { title, image, goal, daysLeft } = useCampaign(1)
  const { donations } = useDonations()
  const showDialog = ref(false)
  function openDialog() { showDialog.value = true }
  function addDonation(d) { donations.value.unshift({ ...d, id: Date.now(), date: new Date() }) }
  const recentDonations = computed(() => donations.value.slice(0, 4))
  </script>