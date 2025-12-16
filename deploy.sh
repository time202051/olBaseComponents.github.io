#!/usr/bin/env sh

# 出错立即停止
set -e

# 构建
npm run build

# 进入构建产物目录
cd docs/.vuepress/dist

# 如果你有自定义域名再打开
# echo 'yourdomain.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 普通仓库（推荐）
git push -f git@github.com:lijiapeng/ol-base-components.git gh-pages

cd -
