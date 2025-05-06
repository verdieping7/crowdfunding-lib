import { ref, onMounted } from 'vue'
import { supabase } from '../services/supabase'

export function useDonations() {
  const donations = ref([])
  const totalDonations = ref(0)
  const supporters = ref(0)

  async function fetchDonations() {
    const { data } = await supabase
      .from('donations')
      .select('*')
      .order('date', { ascending: false })
    if (data) {
      donations.value = data
      totalDonations.value = data.reduce((sum, d) => sum + d.amount, 0)
      supporters.value = data.length
    }
  }

  onMounted(fetchDonations)

  return { donations, totalDonations, supporters }
}