<template>
  <div :class="{ 'unit-module': true, 'full-screen': isFullScreen }">
    <div v-if="title" class="unit-module-title">{{ title }}</div>
    <div v-if="max" @click="fullScreen()" class="full-screen-btn pointer">
      <template v-if="isFullScreen">
        <CompressOutlined />
      </template>
      <template v-else>
        <expandOutlined />
      </template>
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { ExpandOutlined, CompressOutlined } from "@ant-design/icons-vue";
export default {
  name: "UnitModule",
  components: {
    ExpandOutlined,
    CompressOutlined,
  },
  props: {
    title: String,
    max: {
      // 该模块是否有最大化(全屏)功能，默认有
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isFullScreen: false,
    };
  },
  methods: {
    fullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/main.less";
.unit-module {
  position: relative;
  @vertical-padding: 20px;
  width: 100%;
  background-color: @main-color;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  padding: @vertical-padding 10px;
  box-shadow: 8px 8px 10px #888888;
  .unit-module-title {
    display: block;
    position: absolute;
    transform: translate(50px, calc(-55% - @vertical-padding));
    font-size: 18px;
    background-color: @core-color;
    padding: 5px 23px;
    color: @main-color;
    border-radius: 10px;
    z-index: 1;
  }

  .container {
    padding-top: 15px;
  }
}

.full-screen {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  margin: 0;

  .unit-module-title {
    display: none;
  }
}

.full-screen-btn {
  position: absolute;
  right: 25px;
  top: 15px;
  font-size: 20px;
}
</style>
