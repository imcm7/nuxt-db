<template>
  <div>
    <!-- <VitePwaManifest /> -->
    <NuxtLoadingIndicator
      :color="'blue'"
      :duration="2000"
      :throttle="200"
    />
    <NuxtLayout>
      <NuxtErrorBoundary @error="errorLogger">
        <template #error="{ error }">
          <button @click="handleError">Clear errors</button>
        </template>
      </NuxtErrorBoundary>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { clearError, useHead } from '#imports';

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
    }
  });

  const errorLogger = (error: any) => {
    console.log('[app]', '[error]', error);
  }

  const handleError = () => clearError({ redirect: '/' });
</script>
