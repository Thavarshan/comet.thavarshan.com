<script setup lang="ts">
import { SITE_TITLE, SITE_DECRIPTION } from './seo';

useHead({
  title: SITE_TITLE,
  meta: [
    {
      name: 'description',
      content: SITE_DECRIPTION
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    }
  ],
  bodyAttrs: {
    class: 'font-sans antialiased text-slate-600 min-h-full flex flex-col [overflow-anchor:none]'
  }
});

useSeoMeta({
  title: SITE_TITLE,
  ogTitle: SITE_TITLE,
  description: SITE_DECRIPTION,
  ogDescription: SITE_DECRIPTION,
  ogImage: 'https://github.com/stellar-comet/comet/blob/main/src/assets/images/Banner.jpg',
});
</script>

<template>
  <div scroll-region="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
