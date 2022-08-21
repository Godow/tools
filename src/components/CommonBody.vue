<template>
  <div class="common-body"><slot></slot></div>
</template>

<script lang="ts">
export default {
  name: "CommonBody",
};
</script>

<style scoped lang="less">
.common-body {
  width: 70%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  // overflow-y: auto;
  // height: 100vh;
}
</style>
