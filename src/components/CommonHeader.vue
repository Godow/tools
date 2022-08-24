<template>
  <div class="common-header">
    <div class="title" @click="goHome()">{{ title }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommonHeader",
  props: {
    title: String,
  },
  methods: {
    goHome() {
      window.location.replace(window.location.origin);
    },
  },
};
</script>

<style scoped lang="less">
.common-header {
  width: 100%;
  padding-top: 20px;
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
