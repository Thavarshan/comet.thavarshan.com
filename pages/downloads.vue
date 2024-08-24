<script setup lang="ts">
import { DownloadIcon } from '@radix-icons/vue';
import { Octokit } from '@octokit/core';
import { ref, onMounted } from 'vue';

const config = useRuntimeConfig();

const macDownload = ref<{ url: string; extension: string; } | null>(null);
const windowsDownload = ref<{ url: string; extension: string; } | null>(null);
const linuxDownload = ref<{ url: string; extension: string; } | null>(null);

async function fetchLatestRelease() {
  const octokit = new Octokit({ auth: config.githubApiKey });

  const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
    owner: config.githubUsername as string || 'Thavarshan',
    repo: 'comet',
  });

  response.data[0].assets.forEach((asset: any) => {
    const assetName = asset.name.toLowerCase();
    const extension = asset.name.split('.').pop();

    if (assetName.includes('win32') || assetName.endsWith('.exe') || assetName.includes('nupkg')) {
      windowsDownload.value = { url: asset.browser_download_url, extension };
    } else if (assetName.includes('darwin') || assetName.endsWith('.zip')) {
      macDownload.value = { url: asset.browser_download_url, extension };
    } else if (assetName.includes('linux') || assetName.endsWith('.deb') || assetName.endsWith('.rpm')) {
      linuxDownload.value = { url: asset.browser_download_url, extension };
    }
  });
}

onMounted(async () => {
  await fetchLatestRelease();
});
</script>

<template>
  <section id="features" class="overflow-hidden py-20">
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
        <div class="mt-12 md:grid md:grid-cols-3 md:gap-6">
          <!-- Download links for Apple Devices -->
          <Card class="bg-white text-center">
            <CardHeader>
              <CardTitle>
                <img class="mx-auto" height="32" width="32" src="https://unpkg.com/simple-icons@v13/icons/apple.svg" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <Button as-child>
                  <a :href="macDownload?.url || '#'">
                    <DownloadIcon class="size-4 mr-2" />
                    Apple MacOS ({{ macDownload?.extension || 'N/A' }})
                  </a>
                </Button>
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
                <Button as-child>
                  <a :href="windowsDownload?.url || '#'">
                    <DownloadIcon class="size-4 mr-2" />
                    Windows ({{ windowsDownload?.extension || 'N/A' }})
                  </a>
                </Button>
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
                <Button as-child>
                  <a :href="linuxDownload?.url || '#'">
                    <DownloadIcon class="size-4 mr-2" />
                    Linux ({{ linuxDownload?.extension || 'N/A' }})
                  </a>
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div class="mt-12 flex items-center justify-center gap-x-6">
        <p class="mt-2 text-sm text-slate-600">
          By downloading and using Comet, you agree to the <NuxtLink to="/terms" class="text-primary hover:underline">license terms</NuxtLink> and <NuxtLink to="/privacy" class="text-primary hover:underline">privacy statement</NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>
