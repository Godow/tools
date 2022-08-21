export type ITool = {
  type: "function" | "text";
  name: string;
  path: string;
};
export type ITools = {
  [key: string]: ITool[];
};
interface IConfig {
  title: string;
  modules: ITools;
}

const config: IConfig = {
  title: "米兔 - 工具集合",
  modules: {
    娱乐: [
      {
        type: "function",
        path: "ArticleGenerator",
        name: "狗屁不通文章生成器",
      },
    ],
    编程相关: [
      {
        type: "function",
        path: "FormatJson",
        name: "JSON校验/格式化",
      },
    ],
  },
};

export default config;
