<script setup lang="ts">
useHead({
  title: 'Comet | Effortless Video Conversion',
  meta: [
    {
      name: 'description',
      content: 'Comet is the no-nonsense video converter you’ve been waiting for. Built because nothing else was simple enough, it lets you convert your videos quickly and easily—no fluff, just results.'
    }
  ],
  bodyAttrs: {
    class: 'font-sans antialiased text-slate-600 min-h-full flex flex-col [overflow-anchor:none]'
  },
  script: []
});
</script>


<template>
  <div scroll-region="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
