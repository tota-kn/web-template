<script setup lang="ts">
const testGet = ApiClient.useTestGet();
const fetch = () => {
  testGet.fetch("api/test", "get", { query: { n: 1 } });
};
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
      <Button @click="fetch">
        Fetch
      </Button>
      {{ testGet.data.value ?? "no-data" }}
      {{ testGet.status.value ?? "no-status" }}
      {{ testGet.error.value ?? "no-error" }}
    </div>
  </div>
</template>
