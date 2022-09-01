<template>
  <UnitModule :title="name">
    <div class="article-generator">
      <header>
        <div class="intro">标题名称：</div>
        <input v-model="inputTitle" class="input-style" />
        <div class="intro">字数：</div>
        <input
          v-model="inputNum"
          @input="inputNum = inputNum.toString().replace(/[^0-9]/g, '')"
          class="input-style words-num"
        />
        <span class="function-btn" @click="generate()">生成</span>
      </header>

      <div v-if="article" v-html="article" class="article-area"></div>
    </div>
  </UnitModule>
</template>

<script lang="ts">
// https://www.qiwangming.com/goupi/
import UnitModule from "@/components/UnitModule.vue";
import { generate } from "./lib/generator";
import { corpus } from "./lib/corpus.js";
export default {
  name: "ArticleGenerator",
  components: {
    UnitModule,
  },
  data(): {
    name: string;
    inputTitle: string;
    inputNum: string;
    article: string;
  } {
    return {
      name: "狗屁不通文章生成器",
      inputTitle: "你也搁这冲浪呢",
      article: "",
      inputNum: "300",
    };
  },
  mounted() {
    this.generate();
  },
  methods: {
    async generate() {
      if (!this.inputTitle || !Number(this.inputNum)) {
        return;
      }
      const pickTitle = this.inputTitle;
      const config = { corpus, length: Number(this.inputNum) };
      const text = generate(pickTitle, config);
      const blank = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      this.article = `<section>${blank}${text.join(
        `</section ><section>${blank}`
      )}</section >`;
    },
  },
};
</script>

<style scoped lang="less">
@import "@/assets/main.less";
.article-generator {
  header {
    width: 100%;
    display: flex;
    justify-content: center;

    .intro {
      margin-left: 20px;
    }
    .input-style {
      width: 200px;
    }

    .words-num {
      width: 100px;
    }

    .function-btn {
      width: 100px;
      display: inline-block;
      margin-left: 50px;
    }
  }

  .article-area {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #eee;
    padding: 10px;
    border-radius: 6px;
    letter-spacing: 1px;
  }
}
</style>
