<script setup lang="ts">
import type { AsyncData } from "#app";
import type { paths } from "~/types/apiClient";

const testGetClient: Ref<
  AsyncData<paths["/api/test"]["get"]["responses"]["200"]["content"]["application/json"] | null,
  Error | null> | undefined>
 = ref(undefined);

const fetch = () => {
  const a = new ApiClient("http://localhost:3000/api");
  testGetClient.value = a.testGet({ query: { n: 1 } });
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
      <Button @click="fetch()">
        fetch
      </Button>
      <div>
        {{ testGetClient?.status.value ?? "no-status" }}
      </div>
      <div>
        {{ testGetClient?.data.value ?? "no-data" }}
      </div>
      <div>
        {{ testGetClient?.error.value ?? "no-error" }}
      </div>
    </div>
  </div>
</template>
