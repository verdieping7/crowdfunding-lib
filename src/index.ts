import { App } from 'vue'
import CampaignHeader from './components/CampaignHeader.vue'
import CampaignStats from './components/CampaignStats.vue'
import DonationList from './components/DonationList.vue'
import DonationDialog from './components/DonationDialog.vue'
import CrowdfundingPage from './pages/CrowdfundingPage.vue'

export default {
  install(app: App) {
    app.component('CampaignHeader', CampaignHeader)
    app.component('CampaignStats', CampaignStats)
    app.component('DonationList', DonationList)
    app.component('DonationDialog', DonationDialog)
    app.component('CrowdfundingPage', CrowdfundingPage)
  }
}

export { CampaignHeader, CampaignStats, DonationList, DonationDialog, CrowdfundingPage }