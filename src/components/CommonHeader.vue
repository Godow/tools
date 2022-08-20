<template>
  <div class="common-header">
    <div class="title" @click="goHome()">{{ title }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommonHeader",
  props: ["title"],
  methods: {
    goHome() {
      const homeUrl = location.href.match(/^https?:\/\/[^/]+/)?.[0];
      if (homeUrl) {
        window.location.replace(homeUrl);
      }
    },
  },
};
</script>

<style scoped lang="less">
.common-header {
  width: 100%;
  margin-top: 20px;
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
