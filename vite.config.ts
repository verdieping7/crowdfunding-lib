import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar()
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'CrowdfundingLib',
      fileName: 'crowdfunding-lib'
    },
    rollupOptions: {
      external: ['vue', 'quasar', '@supabase/supabase-js'],
      output: {
        globals: {
          vue: 'Vue',
          quasar: 'Quasar',
          '@supabase/supabase-js': 'Supabase'
        }
      }
    }
  }
})