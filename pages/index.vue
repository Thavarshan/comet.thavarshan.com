<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  ArchiveIcon,
  LaptopIcon,
  VideoIcon,
  DownloadIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
  AccessibilityIcon,
} from '@radix-icons/vue';
import { ref, onMounted } from 'vue';
import faqs from '@/content/faqs.json';
import { Octokit } from '@octokit/core';

const config = useRuntimeConfig();

const downloadLinks = ref<any>([]);

const defaultValue = 'item-1';

const accordionItems = faqs.map((item, index) => ({
  value: `item-${index + 1}`,
  title: item.title,
  content: item.content,
}));

async function fetchLatestRelease() {
  const octokit = new Octokit({ auth: config.githubApiKey });

  const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
    owner: config.githubUsername as string || 'Thavarshan',
    repo: 'comet',
  });

  downloadLinks.value = response.data[0]
    .assets
    .filter((asset: any) => asset.name.includes('comet'))
    .map((asset: any) => ({
      name: asset.name,
      url: asset.browser_download_url,
    }));
}

onMounted(async () => {
  await fetchLatestRelease();
});
</script>

<template>
  <section id="hero" class="overflow-hidden pt-20">
    <div class="container p-6">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
          <h1 class="text-4xl font-medium tracking-tight text-slate-900">
            Effortless Video Conversion
          </h1>
          <p class="mt-6 text-lg text-slate-600">
            Comet is the straightforward video converter you've been looking for. Designed for simplicity, it allows you to convert your videos quickly and effortlessly—no unnecessary features, just effective results.
          </p>
          <div class="mt-8 flex items-center gap-x-6 gap-y-4">
            <div class="flex items-center gap-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button class="gap-x-2">
                    <DownloadIcon class="size-4" />
                    <span>Download</span>
                    <ChevronDownIcon class="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem v-for="link in downloadLinks" :key="link.name">
                    <a :href="link.url" target="_blank" class="flex items-center gap-x-2">
                      <DownloadIcon class="size-4 text-slate-900" />
                      <span>{{ link.name }}</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
                The app is still in development and may not properly work. Please report any issues you encounter.
              </AlertDescription>
            </Alert>
          </div>
        </div>
        <div class="relative mt-12 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <div class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-slate-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
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
  <section id="features" class="overflow-hidden py-20 bg-slate-900">
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
        <div class="overflow-hidden rounded-xl w-[800px]">
          <img src="/images/demo.gif" alt="Comet" class="pointer-events-none w-full h-auto" />
        </div>
      </div>
      <div class="mt-12 flex items-center gap-x-6">
        <div class="flex-1 relative rounded-2xl bg-slate-700/30">
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
        <div class="flex-1 relative rounded-2xl bg-slate-700/30">
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
        <div class="flex-1 relative rounded-2xl bg-slate-700/30">
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
  <section id="faqs" class="overflow-hidden py-20">
    <div class="container p-6">
      <div class="max-w-xl mx-auto">
        <h2 class="text-3xl font-medium tracking-tight text-slate-900 text-center">
          Frequently Asked Questions
        </h2>
        <p class="mt-2 text-lg text-slate-600 text-center">
          If you have anything else you want to ask, <a href="mailto:tjthavarshan@gmail.com" class="text-slate-900 underline">reach out to us.</a>.
        </p>
        <div class="mt-6">
          <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
              <AccordionTrigger :id="`trigger-${item.value}`">
                <h3 class="flex items-center justify-between py-4 text-lg font-semibold text-slate-900">
                  {{ item.title }}
                </h3>
              </AccordionTrigger>
              <AccordionContent :id="`trigger-${item.value}`">
                <p class="text-slate-600 w-full">{{ item.content }}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
