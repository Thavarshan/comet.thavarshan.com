<script setup lang="ts">
import { DownloadIcon } from '@radix-icons/vue';
import { Octokit } from '@octokit/core';
import { ref, onMounted } from 'vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SITE_TITLE } from '../seo';

definePageMeta({
  title: SITE_TITLE
});

const config = useRuntimeConfig();

useHead({
  title: 'Download Comet - Mac, Windows and Linux',
  meta: [
    {
      name: 'description',
      content: 'Free and built on open source technologies, Comet is available for download on all major platforms.',
    }
  ],
});

const macDownloads = ref<{ url: string; extension: string; architecture: string; }[]>([]);
const windowsDownloads = ref<{ url: string; extension: string; architecture: string; }[]>([]);
const linuxDownloads = ref<{ url: string; extension: string; architecture: string; }[]>([]);

async function fetchLatestRelease() {
  const octokit = new Octokit({ auth: config.githubApiKey });

  const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
    owner: config.githubUsername as string || 'Thavarshan',
    repo: 'comet',
  });

  response.data[0].assets.forEach((asset: any) => {
    const assetName = asset.name.toLowerCase();
    const extension = asset.name.split('.').pop();
    let architecture = '';

    if (assetName.includes('arm64')) {
      architecture = 'arm64';
    } else if (assetName.includes('x86_64') || assetName.includes('amd64')) {
      architecture = 'x86_64';
    } else {
      architecture = 'x64';
    }

    if (assetName.includes('win32') || assetName.endsWith('.exe') || assetName.includes('nupkg')) {
      windowsDownloads.value.push({ url: asset.browser_download_url, extension, architecture });
    } else if (assetName.includes('darwin') || assetName.endsWith('.zip')) {
      macDownloads.value.push({ url: asset.browser_download_url, extension, architecture });
    } else if (assetName.includes('linux') || assetName.endsWith('.deb') || assetName.endsWith('.rpm')) {
      linuxDownloads.value.push({ url: asset.browser_download_url, extension, architecture });
    }
  });
}

onMounted(async () => {
  await fetchLatestRelease();
});
</script>

<template>
  <section id="features" class="overflow-hidden py-12 md:py-20">
    <div class="container p-6">
      <div class="mx-auto max-w-2xl lg:max-w-3xl text-center">
        <h2 class="text-3xl font-medium tracking-tight text-slate-900">
          Download Comet
        </h2>
        <p class="mt-8 text-lg text-slate-600 max-w-lg mx-auto">
          Free and built on open source technologies, Comet is available for download on all major platforms.
        </p>
      </div>
      <div class="mt-12 flex items-center justify-center">
        <div class="lg:mt-12 grid md:grid-cols-3 gap-6">
          <!-- Download links for Apple Devices -->
          <Card class="bg-white text-center">
            <CardHeader>
              <CardTitle>
                <img class="mx-auto" height="32" width="32" src="https://unpkg.com/simple-icons@v13/icons/apple.svg" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button type="button">
                      Apple MacOS
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <template v-if="macDownloads.length > 0">
                      <DropdownMenuItem v-for="download in macDownloads" :key="download.url">
                        <a :href="download.url" class="flex items-center">
                          <DownloadIcon class="size-4 mr-2" />
                          <span v-if="download.architecture === 'arm64'">Apple Silicon ({{ download.extension }})</span>
                          <span v-else-if="download.architecture === 'x64'">Apple Intel ({{ download.extension }})</span>
                          <span v-else>{{ download.architecture }} ({{ download.extension }})</span>
                        </a>
                      </DropdownMenuItem>
                    </template>
                    <template v-else>
                      <DropdownMenuItem>
                        No downloads available
                      </DropdownMenuItem>
                    </template>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardDescription>
            </CardContent>
          </Card>
          <!-- Download links for Windows Devices -->
          <Card class="bg-white text-center">
            <CardHeader>
              <CardTitle>
                <img class="mx-auto" height="32" width="32" src="/images/windows.svg" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button type="button">
                      Windows
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <template v-if="windowsDownloads.length > 0">
                      <DropdownMenuItem v-for="download in windowsDownloads" :key="download.url">
                        <a :href="download.url" class="flex items-center">
                          <DownloadIcon class="size-4 mr-2" />
                          {{ download.architecture }} ({{ download.extension }})
                        </a>
                      </DropdownMenuItem>
                    </template>
                    <template v-else>
                      <DropdownMenuItem>
                        No downloads available
                      </DropdownMenuItem>
                    </template>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardDescription>
            </CardContent>
          </Card>
          <!-- Download links for Linux Devices -->
          <Card class="bg-white text-center">
            <CardHeader>
              <CardTitle>
                <img class="mx-auto" height="32" width="32" src="https://unpkg.com/simple-icons@v13/icons/linux.svg" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button type="button">
                      Linux
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <template v-if="linuxDownloads.length > 0">
                      <DropdownMenuItem v-for="download in linuxDownloads" :key="download.url">
                        <a :href="download.url" class="flex items-center">
                          <DownloadIcon class="size-4 mr-2" />
                          {{ download.architecture }} ({{ download.extension }})
                        </a>
                      </DropdownMenuItem>
                    </template>
                    <template v-else>
                      <DropdownMenuItem>
                        No downloads available
                      </DropdownMenuItem>
                    </template>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div class="mt-12 flex items-center justify-center gap-x-6">
        <p class="mt-2 text-sm text-slate-600 text-center">
          By downloading and using Comet, you agree to the <NuxtLink to="/terms" class="text-primary hover:underline">license terms</NuxtLink> and <NuxtLink to="/privacy" class="text-primary hover:underline">privacy statement</NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>
