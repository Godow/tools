interface ITool {
  type: "function" | "text";
  name: string;
  path: string;
}
interface ITools {
  [key: string]: ITool[];
}
interface IConfig {
  title: string;
  modules: ITools[];
}
const config: IConfig = {
  title: "米兔 - 工具集合",
  modules: [
    {
      编程相关: [
        {
          type: "function",
          path: "Str2Json",
          name: "字符串转JSON",
        },
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
      ],
    },
    {
      编程相关2: [
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
      ],
    },
    {
      编程相关2: [
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
      ],
    },
    {
      编程相关2: [
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
      ],
    },
    {
      编程相关2: [
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
      ],
    },
    {
      编程相关2: [
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
        {
          type: "function",
          path: "Str2Json",
          name: "Str2Json",
        },
      ],
    },
  ],
};

export default config;
