<template>
<a-layout>
  <a-layout-content style="margin: 0 16px">
    <div>
      <nuxt/>
    </div>
  </a-layout-content>
</a-layout>
</template>

<style scoped>
.fullscreen {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
</style>