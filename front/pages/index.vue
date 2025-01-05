<script setup lang="ts">
const result = fetchTestGet({ query: { n: 123 } });

let eventResult: AsyncData<>;
const fetch = () => {
  eventResult = fetchTestGet({ query: { n: 123 } });
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
      {{ result.data }}
      {{ result.status }}
      {{ result.error }}
    </div>
    <div>
      <Button @click="fetch">
        Fetch
      </Button>
      {{ eventResult?.data }}
      {{ eventResult?.status }}
      {{ eventResult?.error }}
    </div>
  </div>
</template>
