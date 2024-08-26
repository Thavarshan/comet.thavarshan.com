<script setup lang="ts">
const SITE_DECRIPTION = 'Comet is the no-nonsense video converter you’ve been waiting for. Built because nothing else was simple enough, it lets you convert your videos quickly and easily—no fluff, just results.';

useHead({
  title: 'Comet | Effortless Video Conversion',
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
  title: 'Comet | Effortless Video Conversion',
  ogTitle: 'Comet | Effortless Video Conversion',
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
