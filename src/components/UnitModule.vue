<template>
  <div class="unit-module">
    <div>
      <div v-if="pageTitle" class="unit-module-title">{{ pageTitle }}</div>
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "UnitModule",
  props: ["title", "toolsList"],
  data(): {
    urlTitle: string;
  } {
    return {
      urlTitle: "",
    };
  },
  computed: {
    pageTitle(): string {
      return this.title || this.urlTitle;
    },
  },
  mounted() {
    const name = location.search.match(/(?<=name=)[^&].+/)?.[0];
    if (name) {
      this.urlTitle = decodeURI(name);
    }
  },
};
</script>

<style scoped lang="less">
@import "@/assets/main.less";
.unit-module {
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
</style>
