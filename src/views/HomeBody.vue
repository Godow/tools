<template>
  <div v-for="(title, inx) in modulesTitle" :key="title" class="home-body">
    <UnitModule :title="title" :max="false">
      <div class="container">
        <div v-for="tool in tools[inx]" :key="tool.name">
          <router-link class="tool" :to="tool.path">{{
            tool.name
          }}</router-link>
        </div>
      </div>
    </UnitModule>
  </div>
</template>

<script lang="ts">
import UnitModule from "@/components/UnitModule.vue";
import config from "@/config";
export default {
  name: "HomeBody",
  components: {
    UnitModule,
  },
  data() {
    return {
      tools: Object.values(config.modules),
      modulesTitle: Object.keys(config.modules),
    };
  },
};
</script>

<style scoped lang="less">
@import "@/assets/main.less";
.home-body {
  width: 100%;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .tool {
      margin-bottom: 17px;
      width: 200px;
      height: 40px;
      line-height: 40px;
      display: block;
      border-radius: 5px;
      box-shadow: 5px 5px 10px #888888;
      text-align: center;
    }
    a {
      color: @reverse-color;
      font-weight: bold;
      &:hover {
        background-color: @core-color;
        color: @main-color;
      }
    }
  }
}
</style>

<!-- <UnitModule
  :title="Object.keys(module)[0]"
  :toolsList="Object.values(module)[0]"
/> -->
