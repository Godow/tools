<template>
  <UnitModule :title="name">
    <div class="str-2-json">
      <div class="intro">输入区：</div>
      <div class="core-area">
        <textarea v-model="inputContent" class="input-area"></textarea>
        <div class="function-btn" @click="transform()">开始转换</div>
        <textarea v-model="output" disabled class="output-area"></textarea>
      </div>
    </div>
  </UnitModule>
</template>

<script lang="ts">
import UnitModule from "@/components/UnitModule.vue";
import { message } from "ant-design-vue";
export default {
  name: "Str2Json",
  components: {
    UnitModule,
  },
  data(): {
    name: string;
    inputContent: string;
    output: string;
  } {
    return {
      inputContent: "",
      output: "",
      name: "JSON格式化",
    };
  },
  methods: {
    transform() {
      if (!this.inputContent) {
        return;
      }
      try {
        let dealStr = this.inputContent;
        dealStr = dealStr.replace(/'/g, '"');
        this.output = JSON.stringify(
          JSON.parse(dealStr.replace(/(\w+)(?=:)/g, '"$1"')),
          null,
          2
        );
      } catch (e: { name: string; message: string }) {
        message.warning(e.message);
      }
    },
  },
};
</script>

<style scoped lang="less">
// @import "@/assets/main.less";
.str-2-json {
  .intro {
    margin-left: 30px;
  }
  .core-area {
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    min-height: 500px;
    .input-area {
      overflow-x: scroll;
      overflow-y: scroll;
      width: 40%;
    }

    .function-btn {
      width: 120px;
    }

    .output-area {
      overflow-x: scroll;
      overflow-y: scroll;
      width: 40%;
    }
  }
}
</style>
