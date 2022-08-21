<template>
  <div class="layout">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>

    <!-- <div class="fixed">
      <div class="left-top">
        <slot name="left-top"></slot>
      </div>

      <div class="left-bottom">
        <slot name="left-bottom"></slot>
      </div>

      <div class="right-top">
        <slot name="right-top"></slot>
      </div>

      <div class="right-bottom">
        <slot name="right-bottom"></slot>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "CommonLayout",
};
</script>

<style scoped lang="less">
.layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    height: auto;
  }
  .body {
    flex: 1;
  }
  .footer {
    height: auto;
  }

  .fixed {
    position: fixed;
  }
}
</style>
