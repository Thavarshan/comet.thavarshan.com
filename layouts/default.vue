<script setup lang="ts">
import { GithubLogoIcon } from '@radix-icons/vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Logo } from '@/components/ui/logo';

type NavigationLink = {
  title: string;
  href: string;
};

const sections: NavigationLink[] = [
  { title: 'Home', href: '/' },
  { title: 'Features', href: '/#features' },
  { title: 'Support', href: 'https://github.com/Thavarshan/comet/discussions' },
  { title: 'FAQs', href: '/#faqs' },
];

const footerLinks: NavigationLink[] = [
  { title: 'Changelog', href: 'https://github.com/Thavarshan/comet/blob/main/CHANGELOG.md' },
  { title: 'Disclaimer', href: '/disclaimer' },
  { title: 'Privacy', href: '/privacy' },
  { title: 'Terms', href: '/terms' },
  { title: 'Support', href: 'https://github.com/Thavarshan/comet/discussions' },
];
</script>

<template>
  <div>
    <header class="container p-6 flex items-center gap-x-10">
      <div>
        <Logo href="/" />
      </div>
      <div class="flex-1 flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="section in sections" :key="section.title">
              <NavigationMenuLink :class="navigationMenuTriggerStyle()" :href="section.href">
                {{ section.title }}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div class="flex items-center gap-x-3">
          <a href="https://github.com/Thavarshan/comet" target="_blank" class="text-slate-900">
            <GithubLogoIcon class="size-6" />
          </a>
          <!-- <Button type="button">Download</Button> -->
        </div>
      </div>
    </header>
    <main class="py-6" role="main">
      <slot />
    </main>
    <footer class="border-t border-slate-200">
      <div class="container p-6">
        <div class="flex flex-col items-center justify-center gap-y-12 pb-6 pt-16 lg:py-16">
          <div>
            <div class="flex flex-col items-center justify-center">
              <Logo href="/" />
              <p class="text-lg font-bold text-slate-900 leading-tight mt-2">Comet</p>
              <p class="text-sm text-slate-500">a simple video converter</p>
            </div>
            <NavigationMenu class="mt-11">
              <NavigationMenuList>
                <NavigationMenuItem v-for="link in footerLinks" :key="link.title">
                  <NavigationMenuLink :class="navigationMenuTriggerStyle()" :href="link.href">
                    {{ link.title }}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div class="flex flex-col items-center pb-12 justify-center">
          <p class="mt-6 text-sm text-slate-500 md:mt-0">
            Made with ❤️ by <a href="https://github.com/Thavarshan/" target="_blank" class="underline" rel="noopener noreferrer">Jerome Thayananthajothy</a>
          </p>
          <p class="mt-6 text-sm text-slate-500 md:mt-0">
            and given for free to the World
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
