/*****************************************************************************************
 *                                 配置顶部导航栏
 ******************************************************************************************/

export default [
  // ========== 基础 ========== //
  {
    text: "基础",
    link: "/basic/",
    items: [
      {
        text: "RoadMap",
        link: "/basic/roadmap/",
      },
      {
        text: "数理基础",
        items: [{ text: "开始上手", link: "/basic/math/index/" }],
      },
      {
        text: "Python",
        items: [{ text: "开始上手", link: "/basic/python/index/" }],
      },
    ],
  },
  // ========== 机器学习 ========== //
  {
    text: "机器学习",
    link: "/ml/",
    items: [
      {
        text: "教程",
        items: [
          { text: "开始上手", link: "/ml/course/index/" },
          {
            text: "斯坦福大学2014（吴恩达）机器学习教程",
            link: "/ml/course/ml-andrew/index/",
          },
        ],
      },
    ],
  },
  // ========== 深度学习 ========== //
  {
    text: "深度学习",
    link: "/dl/",
    items: [],
  },
  {
    text: "更多",
    link: "/more/",
    items: [
      {
        text: "Q&A",
        link: "/qa/",
      },
    ],
  },
  { text: "关于", link: "/about/" },
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
];
