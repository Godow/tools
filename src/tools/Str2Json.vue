<template>
  <CommonBody>
    <UnitModule :title="name">
      <template v-slot:container>
        <div class="str-2-json">
          <textarea v-model="inputContent" class="input-area"></textarea>
          <a-button type="primary" shape="round" @click="transform()">
            开始转换 ->
          </a-button>
          <textarea v-model="output" disabled class="output-area"></textarea>
        </div>
      </template>
    </UnitModule>
  </CommonBody>
</template>

<script lang="ts">
import CommonBody from "../components/CommonBody.vue";
import UnitModule from "@/components/UnitModule.vue";
import { message } from "ant-design-vue";
export default {
  name: "Str2Json",
  components: {
    CommonBody,
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
  methods: {
    transform() {
      if (!this.inputContent) {
        return;
      }
      try {
        this.output = JSON.stringify(JSON.parse(this.inputContent), null, 2);
      } catch (e) {
        message.warning(e.message);
      }
    },
  },
};
</script>

<style scoped lang="less">
.str-2-json {
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50vh;
  .input-area {
    overflow-x: scroll;
    overflow-y: scroll;
    width: 40%;
  }

  .output-area {
    overflow-x: scroll;
    overflow-y: scroll;
    width: 40%;
  }
}
</style>
