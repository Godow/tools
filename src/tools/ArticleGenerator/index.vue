<template>
  <UnitModule :title="name">
    <div class="article-generator">123</div>
  </UnitModule>
</template>

<script lang="ts">
import UnitModule from "@/components/UnitModule.vue";
export default {
  name: "ArticleGenerator",
  components: {
    UnitModule,
  },
  data(): {
    inputContent: string;
    output: string;
  } {
    return {
      inputContent: "",
      output: "",
    };
  },
};
</script>

<style scoped lang="less">
// @import "@/assets/main.less";
.str-2-json {
}
</style>
