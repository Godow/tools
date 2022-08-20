<template>
  <CommonBody>
    <div v-for="module in modules" :key="module" class="home-body">
      <UnitModule :title="Object.keys(module)[0]">
        <template v-slot:container>
          <div class="conatiner">
            <div v-for="tool in Object.values(module)[0]" :key="tool.name">
              <a class="tool" :href="tool.path + '?name=' + tool.name">{{
                tool.name
              }}</a>
            </div>
          </div>
        </template>
      </UnitModule>
    </div>
  </CommonBody>
</template>

<script lang="ts">
import CommonBody from "@/components/CommonBody.vue";
import UnitModule from "@/components/UnitModule.vue";
import config from "@/config";
export default {
  name: "HomeBody",
  components: {
    CommonBody,
    UnitModule,
  },
  data() {
    return {
      modules: config.modules,
    };
  },
};
</script>

<style scoped lang="less">
@import "@/assets/main.less";
.home-body {
  width: 100%;

  .conatiner {
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .tool {
      margin: 5px;
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
