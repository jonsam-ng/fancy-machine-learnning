import { resolve } from "path";
import { defineConfig4CustomTheme, UserPlugins } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import dayjs from "dayjs";
import baiduCode from "./config/baiduCode"; // 百度统计hm码
import htmlModules from "./config/htmlModules"; // 自定义插入的html块

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: "vdoing",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Fancy Machine Learnning",
      description: "机器学习一站式笔记，学习机器学习、深度学习技术文章",
    },
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  themeConfig: {
    nav: [
      {
        text: "基础",
        link: "/basic/",
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: "数理基础",
            items: [],
          },
          {
            text: "Python",
            items: [{ text: "Python 编程", link: "/pages/syntax/" }],
          },
        ],
      },
      {
        text: "更多",
        link: "/more/",
        items: [],
      },
      { text: "关于", link: "/about/" },
      // {
      //   text: "收藏",
      //   link: "/pages/beb6c0bd8a66cea6/",
      //   // items: [
      //   //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
      //   //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
      //   //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
      //   // ],
      // },
      {
        text: "索引",
        link: "/archives/",
        items: [
          { text: "分类", link: "/categories/" },
          { text: "标签", link: "/tags/" },
          { text: "归档", link: "/archives/" },
        ],
      },
      { text: "博客", link: "https://www.jonsam.site" },
    ],
    sidebarDepth: 1,
    logo: "/img/logo.png",
    repo: "jonsam-ng/fancy-machine-learnning",
    searchMaxSuggestions: 10,
    lastUpdated: "上次更新",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "编辑",

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    category: true,
    tag: true,
    archive: true,
    categoryText: "随笔", // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    titleBadge: true,
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    updateBar: {
      // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
    },
    rightMenuBar: true, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    sidebarOpen: true, // 初始状态是否打开左侧边栏，默认true
    pageButton: true, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: "structuring",

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: "jonsam", // 必需
      link: "https://github.com/jonsam-ng", // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar:
        "https://www.jonsam.site/wp-content/uploads/2019/10/c1fbc401c64937aaec6cb53359e7c57eabd8e477-e1570649725791.gif",
      name: "Jonsam NG",
      slogan: "把一切有意义的事变得有意思，把一切有意思的事变得有意义",
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      iconfontCssFile: "//at.alicdn.com/t/font_3314748_jkz8oirrz8p.css",
      icons: [
        {
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:jonsam.ng@foxmail.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/jonsam-ng",
        },
        {
          iconClass: "icon-mao",
          title: "博客",
          link: "https://www.jonsam.site",
        },
        {
          iconClass: "icon-shuben",
          title: "文档",
          link: "https://docs.jonsam.site",
        },
        {
          iconClass: "icon-code",
          title: "源码",
          link: "https://source.jonsam.site",
        },
      ],
    },
    footer: {
      createYear: 2022,
      copyrightInfo:
        'Fancy Machine Learnning | Made by <a href="https://www.jonsam.site" target="_blank">Jonsam</a> by ❤',
    },

    // 自定义html(广告)模块
    htmlModules,
  },
  head: [
    ["link", { rel: "icon", href: "/img/favicon32x32.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "机器学习,深度学习",
      },
    ],
    ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }], // 百度统计的站长验证（你可以去掉）
    ["meta", { name: "theme-color", content: "#A0CEC7" }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],
  plugins: <UserPlugins>[
    "vuepress-plugin-baidu-autopush", // 百度自动推送

    [
      "vuepress-plugin-baidu-tongji", // 百度统计
      { hm: baiduCode },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    "fulltext-search",

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //     },
    //   ],
    // },

    [
      "one-click-copy", // 代码块复制按钮
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      "demo-block", // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
    [
      "vuepress-plugin-comment", // 评论
      {
        choosen: "gitalk",
        options: {
          clientID: "a6e1355287947096b88b",
          clientSecret: "f0e77d070fabfcd5af95bebb82b2d574d7248d71",
          repo: "blog-gitalk-comment", // GitHub 仓库
          owner: "xugaoyi", // GitHub仓库所有者
          admin: ["xugaoyi"], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: "last", // 'first'正序 | 'last'倒序
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>", // GitHub issue 的内容
        },
      },
    ],
    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.ts", ".vuepress/config/htmlModules.ts"],
});
