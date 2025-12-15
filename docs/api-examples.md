# API 使用示例

展示 `ol-base-components` 相关脚本的典型调用方式。

## 生成 API 模块

```bash
npx api http://your-api-domain ./src/api/modules
```

## 生成 Swagger 路径映射

```bash
npx run http://your-api-domain ./src/api/swagger.js
```

## 一键生成（init）

```bash
npx init http://your-api-domain
```

## VSCode 插件

在扩展商店搜索 `vue-page-generator`，右键目录 → “生成 CRUD 页面” 即可创建包含搜索、表格、表单的页面。
