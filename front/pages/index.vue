<script setup lang="ts">
const result = ApiClient.useTestGet();
</script>

<template>
  <div>
    <NuxtLink :to="$localePath('/test')">
      Go to test
    </NuxtLink>
    <div>
      <StoreCountButton />
    </div>
    <I18nWord />
    <div>
      {{ result.data }}
      {{ result.status }}
      {{ result.error }}
    </div>
  </div>
</template>
