<template>
  <div class="wrapper">
    <CommonLayout>
      <template v-slot:header>
        <CommonHeader :title="config.title" />
      </template>
      <template v-slot:body>
        <RouterView />
      </template>
      <template v-slot:footer>
        <CommonFooter />
      </template>
    </CommonLayout>

    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </div>
</template>
<script lang="ts">
import CommonLayout from "./components/CommonLayout.vue";
import CommonHeader from "./components/CommonHeader.vue";
import CommonFooter from "./components/CommonFooter.vue";
import config from "@/config.js";
export default {
  components: {
    CommonLayout,
    CommonHeader,
    CommonFooter,
  },
  data() {
    return {
      config,
    };
  },
};
</script>
<style scoped lang="less">
@import "@/assets/main.less";
.wrapper {
  width: 100%;
  background-color: @back-color;
}
</style>
