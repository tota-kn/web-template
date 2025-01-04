<template>
  <div>
    <NuxtLink :to="$localePath('/')">
      Go to index
    </NuxtLink>
    <div>
      <StoreCountButton />
    </div>
    <I18nWord />
  </div>
</template>
