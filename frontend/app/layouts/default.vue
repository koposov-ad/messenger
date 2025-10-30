<template>
  <div class="app-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
