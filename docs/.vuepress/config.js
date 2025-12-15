module.exports = {
  title: "ol-base-components",
  description:
    "基于 Element-UI 的高效表格、表单、搜索、弹框等通用组件，支持 Swagger 自动生成表头，npx 脚本一键生成 API",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  // GitHub Pages project site needs repo name as base to serve assets correctly
  base: "/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指引", link: "/guide/what-is-ol-base" },
      {
        text: "脚本",
        items: [
          { text: "api", link: "/script/api" },
          { text: "run", link: "/script/run" },
          { text: "init", link: "/script/init" },
          { text: "add", link: "/script/add" },
        ],
      },
      {
        text: "推荐连接",
        items: [
          {
            text: "copy encryption cracking 破解复制加密",
            link: "/copyEncryptionCracking/",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "简介",
          collapsable: false,
          children: ["/guide/what-is-ol-base", "/guide/getting-started"],
        },
        {
          title: "组件",
          collapsable: false,
          children: ["/guide/table", "/guide/search", "/guide/form"],
        },
      ],
      "/script/": [
        ["/script/api", "api"],
        ["/script/run", "run"],
        ["/script/init", "init"],
        ["/script/add", "add"],
      ],
      "/vscode/": [["/vscode/vuePageGenerator", "vue-page-generator"]],
      "/copyEncryptionCracking/": [
        ["/copyEncryptionCracking/", "copy encryption cracking 破解复制加密"],
      ],
    },
    repo: "https://github.com/time202051/base-component",
    lastUpdated: "最后更新",
    search: true,
    logo: "/logo.svg",
  },
};

