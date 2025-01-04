<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import { useStore } from "~/composables/store";

const props = defineProps<{
  a?: string;
}>();

const store = useStore();
const add = () => store.add();
</script>

<template>
  <Button @click="add()">
    StoreCount: {{ props.a }} {{ store.count }}
  </Button>
</template>;
