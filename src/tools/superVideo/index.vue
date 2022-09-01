<template>
  <UnitModule :title="name">
    <div class="super-video">
      <a-tooltip placement="topLeft">
        <template #title>
          <span>{{ tip }}</span>
        </template>
        <a
          class="bookmark"
          href='javascript:secScript = document.createElement("script");secScript.setAttribute("type", "text/javascript");
        secScript.setAttribute("src", "https://cdn.goduck.cc/lib/superVideo.js");
        document.body.insertBefore(secScript, document.body.lastChild);'
          @click="toast()"
        >
          超级视频
        </a>
      </a-tooltip>
    </div>
  </UnitModule>
  <UnitModule title="使用说明" :max="false">
    <div class="usage">
      拖动上面按钮添加到书签，观看会员视频时候直接点击书签即可跳过会员~
    </div>
  </UnitModule>
</template>

<script lang="ts">
import UnitModule from "@/components/UnitModule.vue";
import { message } from "ant-design-vue";
export default {
  name: "vipVideo",
  components: {
    UnitModule,
  },
  data() {
    return {
      name: "超级视频",
      tip: "请按住并拖拽到书签栏~",
    };
  },
  methods: {
    toast() {
      message.warning(this.tip);
    },
  },
};
</script>

<style scoped lang="less">
// @import "@/assets/main.less";
.super-video {
  text-align: center;
  .bookmark {
    font-size: 20px;
    cursor: move;
    padding: 3px 6px;
    border: 1px solid;
    border-radius: 10px;
    &:hover {
      box-shadow: 3px 3px 5px #888888;
    }
  }
}

.usage {
  color: gray;
  width: 80%;
  font-size: 15px;
  margin: 0 auto;
}
</style>
