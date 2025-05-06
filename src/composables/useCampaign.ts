import { ref, onMounted } from 'vue'
import { supabase } from '../services/supabase'

export function useCampaign(id: number) {
  const title = ref('')
  const image = ref('')
  const goal = ref(0)
  const endDate = ref('')
  const description = ref('')
  const daysLeft = ref(0)

  async function fetchCampaign() {
    const { data } = await supabase
      .from('crowdfunding')
      .select('*')
      .eq('id', id)
      .single()
    if (data) {
      title.value = data.campaign_title
      image.value = data.campaign_image_url
      goal.value = data.campaign_goal
      endDate.value = data.campaign_end_date
      description.value = data.campaign_description
      const diff = new Date(endDate.value).getTime() - Date.now()
      daysLeft.value = Math.ceil(diff / (1000 * 60 * 60 * 24))
    }
  }

  onMounted(fetchCampaign)

  return { title, image, goal, endDate, description, daysLeft }
}