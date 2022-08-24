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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  .common-body {
    width: 100%;
  }
}
</style>
