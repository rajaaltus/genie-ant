<template>
  <a-layout>
    <a-layout-content style="padding: 0 50px">
      <div>
        <nuxt />
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  auth: false
}
</script>
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
