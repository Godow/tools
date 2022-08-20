<template>
  <div class="common-body"><slot>333</slot></div>
</template>

<script lang="ts">
export default {
  name: "CommonBody",
};
</script>

<style scoped lang="less">
.common-body {
  width: 65%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
