# Guide02_在windows系统下搭建vue开发环境

> vue示例项目，包含开发、测试、预发布、生产四个环境打包方式。


## Build Setup

``` bash
# 安装依赖
npm install

# serve with hot reload at localhost:8080
npm run dev

# 打包测试环境
npm run test

# 打包预发布环境
npm run pre

# 打包生产环境
npm run pro

```

## 示例项目

- vuex

本项目旨在使用这一技术，而非项目中一定要使用

- axios

axios默认发送的是request payload请求，即请求头为Content-Type: application/json;charset=UTF-8
而有可能后端要求使用form data请求，请求头为'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'

- 附件上传

由于element和ivew 都是用的是 json 上传，上传路径和普通的表单提交地址为多个。需要注意
