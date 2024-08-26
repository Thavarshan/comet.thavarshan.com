<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import {
  ArchiveIcon,
  LaptopIcon,
  VideoIcon,
  DownloadIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
  AccessibilityIcon,
} from '@radix-icons/vue';
import faqs from '@/content/faqs.json';

const accordionItems = faqs.map((item, index) => ({
  value: `item-${index + 1}`,
  title: item.title,
  content: item.content,
}));
</script>

<template>
  <section id="hero" class="overflow-hidden pt-6 md:pt-20 pb-[400px] sm:pb-[700px] md:pb-[900px] lg:pb-52">
    <div class="container p-6">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
          <div>
            <h1 class="text-4xl font-medium tracking-tight text-slate-900">
              Effortless Video Conversion
            </h1>
            <p class="mt-6 text-lg text-slate-600">
              Comet is the straightforward video converter you've been looking for. Designed for simplicity, it allows you to convert your videos quickly and effortlessly—no unnecessary features, just effective results.
            </p>
          </div>
          <div class="mt-8 flex items-center gap-x-6 gap-y-4">
            <div class="flex items-center gap-x-3">
              <Button class="gap-x-2" as-child>
                <NuxtLink to="/downloads">
                  <DownloadIcon class="size-4" />
                  <span>Download</span>
                </NuxtLink>
              </Button>
              <Button as-child variant="secondary">
                <a href="https://github.com/stellar-comet/comet/issues" target="_blank" class="flex items-center gap-x-2">
                  <AccessibilityIcon class="size-4" />
                  Report issue
                </a>
              </Button>
            </div>
          </div>
          <div class="mt-6 max-w-sm">
            <Alert variant="destructive">
              <ExclamationTriangleIcon class="size-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                The app is still in alpha release phase and may not properly work. Please report any issues you encounter.
              </AlertDescription>
            </Alert>
          </div>
        </div>
        <div class="relative mt-6 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <div class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-slate-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] md:top-16 md:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-spin-slow">
              <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7"></path>
              <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#gradient-1)" stroke-linecap="round"></path>
              <defs>
                <linearGradient id="gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2563eb"></stop>
                  <stop offset="1" stop-color="#2563eb" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full animate-spin-reverse-slower">
              <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7"></path>
              <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#gradient-2)" stroke-linecap="round"></path>
              <defs>
                <linearGradient id="gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2563eb"></stop>
                  <stop offset="1" stop-color="#2563eb" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <img src="/images/screenshot_1.png" alt="Comet" class="pointer-events-none absolute inset-0 h-auto w-full" />
        </div>
      </div>
    </div>
  </section>
  <section id="features" class="overflow-hidden py-12 md:py-20 bg-slate-900">
    <div class="container p-6">
      <div class="mx-auto max-w-2xl lg:max-w-3xl text-center">
        <h2 class="text-3xl font-medium tracking-tight text-white">
          A No-Nonsense Video Converter Tool
        </h2>
        <p class="mt-8 text-lg text-slate-400">
          Created to address the shortcomings of existing tools, Comet offers a straightforward solution for converting your videos, even in bulk. No unnecessary features, just effective results.
        </p>
      </div>
      <div class="mt-12 flex items-center justify-center">
        <div class="overflow-hidden rounded-2xl w-[800px]">
          <img src="/images/demo.gif" alt="Comet" class="pointer-events-none w-full h-auto" />
        </div>
      </div>
      <div class="mt-12 flex flex-col md:flex-row items-center gap-6 md:gap-x-6">
        <div class="flex flex-1 relative rounded-2xl bg-slate-700/30">
          <div class="absolute inset-0" style="border-radius: 16px; opacity: 1;"></div>
          <div class="relative z-10 p-8">
            <LaptopIcon class="h-8 w-8 text-slate-400" />
            <h3 class="mt-6 text-lg font-semibold text-white">
              <span class="absolute inset-0 rounded-lg"></span>
              Cross-Platform Compatibility
            </h3>
            <p class="mt-2 text-sm text-slate-400">
              Making it accessible to everyone, Comet works on all major platforms including Windows, macOS, and Linux.
            </p>
          </div>
        </div>
        <div class="flex flex-1 relative rounded-2xl bg-slate-700/30">
          <div class="absolute inset-0" style="border-radius: 16px; opacity: 1;"></div>
          <div class="relative z-10 p-8">
            <VideoIcon class="h-8 w-8 text-slate-400" />
            <h3 class="mt-6 text-lg font-semibold text-white">
              <span class="absolute inset-0 rounded-lg"></span>
              Multiple Video Formats
            </h3>
            <p class="mt-2 text-sm text-slate-400">
              Supporting all major video formats, Comet lets you convert your videos to any format you need.
            </p>
          </div>
        </div>
        <div class="flex flex-1 relative rounded-2xl bg-slate-700/30">
          <div class="absolute inset-0" style="border-radius: 16px; opacity: 1;"></div>
          <div class="relative z-10 p-8">
            <ArchiveIcon class="h-8 w-8 text-slate-400" />
            <h3 class="mt-6 text-lg font-semibold text-white">
              <span class="absolute inset-0 rounded-lg"></span>
              Bulk File Conversion
            </h3>
            <p class="mt-2 text-sm text-slate-400">
              Convert multiple videos at once with Comet’s bulk file conversion feature, saving you time and effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="faqs" class="overflow-hidden pt-12 pb-0 md:py-20 bg-slate-100">
    <div class="container p-6">
      <div class="mx-auto w-full md:max-w-2xl lg:max-w-3xl text-center">
        <h2 class="text-3xl font-medium tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>
        <p class="mt-8 text-lg text-slate-600">
          If you have anything else you want to ask, <a class="underline text-slate-800" href="https://github.com/stellar-comet/comet/discussions">reach out to us.</a>
        </p>
      </div>
      <div class="mt-12 grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6">
        <Card v-for="item in accordionItems" :key="item.value" class="bg-white">
          <CardHeader>
            <CardTitle>{{ item.title }}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              {{ item.content }}
            </CardDescription>
          </CardContent>
        </Card>
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
