<script setup lang="ts">
import {
  HeartIcon,
  GithubLogoIcon,
  HamburgerMenuIcon,
} from '@radix-icons/vue';
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
  { title: 'Support', href: 'https://github.com/stellar-comet/comet/discussions' },
  { title: 'FAQs', href: '/#faqs' },
];

const footerLinks: NavigationLink[] = [
  { title: 'Changelog', href: 'https://github.com/stellar-comet/comet/blob/main/CHANGELOG.md' },
  { title: 'Disclaimer', href: '/disclaimer' },
  { title: 'Privacy', href: '/privacy' },
  { title: 'Terms', href: '/terms' },
  { title: 'Support', href: 'https://github.com/stellar-comet/comet/discussions' },
];
</script>

<template>
  <div>
    <header class="flex h-16 items-center gap-4 bg-white">
      <nav class="container gap-6 text-lg font-medium flex items-center md:gap-5 lg:gap-6 px-6 h-full">
        <Logo href="/" />
        <div class="hidden md:flex flex-1 items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList class="flex gap-y-2 md:gap-x-4">
              <NavigationMenuItem v-for="section in sections" :key="section.title">
                <NavigationMenuLink :class="navigationMenuTriggerStyle()" :href="section.href">
                  {{ section.title }}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div class="flex items-center gap-x-4">
            <Button variant="outline" as-child>
              <a href="https://github.com/sponsors/Thavarshan" target="_blank">
                <HeartIcon class="size-4 text-pink-500 mr-2" />
                Sponsor
              </a>
            </Button>
            <a href="https://github.com/stellar-comet/comet" target="_blank" class="text-slate-900">
              <GithubLogoIcon class="size-6" />
            </a>
          </div>
        </div>
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="secondary" size="icon" class="shrink-0 md:hidden ml-auto">
              <HamburgerMenuIcon class="size-5 text-slate-900" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav class="grid gap-6 text-lg font-medium">
              <Logo class="mb-6 -mt-2" href="/" />
              <NuxtLink v-for="section in sections" :key="section.title" :to="section.href" class="hover:text-foreground">
                {{ section.title }}
              </NuxtLink>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
    <main role="main">
      <slot />
    </main>
    <footer>
      <div class="container p-6">
        <div class="flex flex-col items-center justify-center gap-y-12 pb-6 pt-6 sm:pt-16 lg:py-16">
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-center justify-center">
              <Logo href="/" />
              <p class="text-lg font-bold text-slate-900 leading-tight mt-2">Comet</p>
              <p class="text-sm text-slate-500">a simple video converter</p>
            </div>
            <NavigationMenu class="mt-11">
              <NavigationMenuList class="flex flex-col md:flex-row gap-y-2 md:gap-x-4">
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
          <p class="mt-6 text-sm text-slate-500 md:mt-0 text-center max-w-sm">
            Made with ❤️ by <a href="https://github.com/Thavarshan/" target="_blank" class="underline" rel="noopener noreferrer">Jerome Thayananthajothy</a> and given for free to the World
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
