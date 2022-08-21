<template>
  <div :class="{ 'unit-module': true, 'full-screen': isFullScreen }">
    <div v-if="title" class="unit-module-title">{{ title }}</div>
    <div
      v-if="type !== 'catalogue'"
      @click="fullScreen()"
      class="full-screen-btn"
    >
      {{ fullScreenText }}
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "UnitModule",
  props: ["title", "toolsList", "type"],
  // type: 模块类型，值为catalogue代表是目录，目录没有全屏功能
  data() {
    return {
      isFullScreen: false,
    };
  },
  computed: {
    fullScreenText() {
      return this.isFullScreen ? "退出全屏" : "全屏";
    },
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
  &:hover {
    cursor: pointer;
  }
  border: @core-color solid 1px;
  border-radius: 10px;
  padding: 3px 6px;
  font-size: 10px;
}
</style>
