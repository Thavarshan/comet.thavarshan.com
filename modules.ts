import { defineNuxtModule } from '@nuxt/kit';
import { installNuxtSiteConfig } from 'nuxt-site-config-kit';

export default defineNuxtModule({
  async setup(options) {
    await installNuxtSiteConfig();
  }
});
