<script setup lang="ts">
// import I18nWord from "~/components/I18nWord.vue";
// import StoreCountButton from "~/components/StoreCountButton.vue";
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
  </div>
</template>
