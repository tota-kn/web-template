<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import { useStore } from "~/composables/store/store";

const store = useStore();
const add = () => store.add();
</script>

<template>
  <Button @click="add()">
    {{ store.count }}
  </Button>
</template>;
