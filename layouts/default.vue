<template>
    <Html
    :lang="$localeHead.htmlAttrs ? $localeHead.htmlAttrs.lang : 'en'"
    :dir="$localeHead.htmlAttrs ? $localeHead.htmlAttrs.dir : 'ltr'"
  >
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in $localeHead.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in $localeHead.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
    <div
      class="app"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <div>{{ typeof $route.meta.title }}
          <slot />
        </div>
      </transition>
    </div>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import {
    // useHead,  // deprecated 
    useRoute
  } from '#app';
  import { 
    useHead,
    useI18n,
    useLocaleHead
  } from '#imports';

  const $i18n = useI18n();
  const $route = useRoute();

  useHead({
    meta: [{
      property: 'og:title',
      content: $route.meta.title,
    }],
  });

  const $localeHead = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
  });

  const title = computed(() => $i18n.t('hello', {
    title: $i18n.t($route.meta.title ?? 'test'),
  }));
</script>
