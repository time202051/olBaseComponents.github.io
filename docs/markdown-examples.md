# Markdown 示例

这页保留一些 VuePress 下的常用 Markdown 示例，方便校验渲染效果

## 代码高亮

```js
export default {
  data() {
    return {
      msg: "Highlighted!",
    };
  },
};
```

## 容器

::: tip
这是一个提示容器。
:::

::: warning
这是一个警告容器。
:::

::: danger
这是一个危险容器。
:::

## 表格

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| url | Swagger API 地址 | string |
| value | 表单数据对象 | object |

## 任务清单

- [x] 支持 Vue2
- [x] 提供表格、表单、搜索组件
- [ ] 集成更多示例

## 引用

> ol-base-components 让 CRUD 页面生成更高效。

