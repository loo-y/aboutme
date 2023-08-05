[English](./README.md)

### DEMO
您可以在这里查看 <b>[演示](https://aboutme.viku.org/)</b>，已部署在 Cloudflare Pages。您同样可以在本地build本项目以获取静态文件，并将其部署到任意静态服务器上。
## 项目概述
该项目是一个基于Next.js框架的纯前端网站，旨在展示和介绍个人信息。网站的样式结构来源于Figma公开模版 [Supa Resume](https://www.figma.com/community/file/1087586245868299560)。
<br />
项目中已包含一些社交媒体和办公工具的图标，您不需要手动指定图标，项目会自动根据名称寻找对应的图标。
<br />
<br />
<img src="./public/preview/page-snapshot03.png" width="800px"/>
<br />
现在已支持<b>暗黑模式</b>，右上角一键切换
<br />
<img src="./public/preview/page-snapshot02.png" width="800px"/>
<br />
支持hover展示二维码
<br/>
<img src="./public/preview/page-snapshot-qrcode.png" width="300px"/>
<br />

## 开始使用
启动开发模式:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
然后访问： <b> http://localhost:3000/en </b>
<br />

## 安装和部署
您可以通过运行build生成一个纯静态页面，以便在各种静态服务器上部署该项目。
```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 配置和使用
在使用该项目之前，您需要修改 [app/api/mockinfo/](./app/api/mockinfo/) 目录下的JSON文件，以便根据您自己的信息进行个性化设置。另外也可以联系我添加新的公司或工具图标。

该网站目前仅支持英文内容的展示，后续会添加支持中文内容的展示，您也可以尝试自己根据en页面来修改zh。
<br>