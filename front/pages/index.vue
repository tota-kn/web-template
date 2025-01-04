<script setup lang="ts">
import type { paths } from "~/types/apiClient";

const apiResult = ref<{
  data: paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"] | undefined;
  error: Error | undefined;
  status: string | undefined;
}>({
  data: undefined,
  error: undefined,
  status: "no-data",
});

onMounted(async () => {
  apiResult.value = await apiClient.testGet({ query: { n: 1 } });
});
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
      {{ apiResult }}
    </div>
  </div>
</template>
