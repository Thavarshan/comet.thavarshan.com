<script setup lang="ts">
import { SITE_TITLE } from '../seo';
import { DownloadIcon, AccessibilityIcon } from '@radix-icons/vue';

definePageMeta({
  title: SITE_TITLE
});
</script>

<template>
  <section id="hero" class="overflow-hidden pt-6 md:pt-20 pb-20">
    <div class="max-w-md mx-auto p-6 text-center">
      <img src="/images/logo.png" alt="Comet Logo" class="mx-auto mb-8 h-24 w-24" />
      <h1 class="text-4xl font-bold tracking-tight text-accent-foreground">
        Comet <br />
        <span class="text-primary">Media Converter</span>
      </h1>
      <p class="mt-6 text-lg text-accent-foreground">
        This project has been phased out and is no longer available.
      </p>
      <p class="mt-2 text-lg text-accent-foreground">
        You may download the latest version of Comet, which will also be its final release, from our GitHub releases page.
      </p>
      <div class="mt-8 flex justify-center gap-x-6">
        <Button class="gap-x-2" as-child>
          <NuxtLink to="https://github.com/Thavarshan/comet/releases" target="_blank">
            <DownloadIcon class="size-4" />
            <span>Download</span>
          </NuxtLink>
        </Button>
        <Button as-child variant="secondary">
          <a href="https://github.com/Thavarshan/comet/discussions/58" target="_blank" class="flex items-center gap-x-2">
            <AccessibilityIcon class="size-4" />
            View phase out announcement
          </a>
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse-slower {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 5s linear infinite;
}

.animate-spin-reverse-slower {
  animation: spin-reverse-slower 5s linear infinite;
}
</style>
