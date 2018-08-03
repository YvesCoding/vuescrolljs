---
sidebarDepth: 1
---

# 简介

  <p align="center"><a href="http://vuescrolljs.yvescoding.org/zh/"><img width="100" src="http://vuescrolljs.yvescoding.org/logo.png" /></a></p>
  <h1 align="center" width="100">Vuescroll</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/vuescroll"><img src="https://img.shields.io/npm/v/vuescroll.svg" alt="Version"></a><a href="https://circleci.com/gh/YvesCoding/vuescroll/tree/dev"><img src="https://img.shields.io/circleci/project/YvesCoding/vuescroll/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/YvesCoding/vuescroll?branch=dev"><img src="https://img.shields.io/codecov/c/github/YvesCoding/vuescroll/dev.svg" alt="Coverage"></a>
  <a href="https://www.npmjs.com/package/vuescroll"><img src="https://img.shields.io/npm/l/vuescroll.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/vuescroll"><img src="https://img.shields.io/npm/dm/vuescroll.svg" alt="Download"></a>
<a href="https://github.com/YvesCoding/vuescroll"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="prettier"></a>
</p>

[English Version](https://github.com/YvesCoding/vuescroll/blob/dev/README.md) | 中文版

一个可定制的， 功能强大专为 Vue.js 设计的滚动条插件 - [vuescrolljs.yvescoding.org](http://vuescrolljs.yvescoding.org/zh)

## Demo

<p align="center">
   <a href="https://github.com/YvesCoding/vuescroll-issue-list-demo" target="_blank"><img src="https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/show1.gif?raw=true" width="400"  alt="Demo"/></a>
</p>

<p align="center">
  <a href="https://vuescroll-issue-list-demo-zdizhghthq.now.sh">在线 Demo(建议使用移动端访问)</a>
</p>

## 特点

### 基本特点

- 支持[自定义滚动条](http://vuescrolljs.yvescoding.org/zh/guide/configuration.html#bar)，包括可以设置滚动条/轨道的`颜色`、`透明度`。可以设置滚动条`是否保持显示`。
- 支持平滑滚动，可以通过设置[easing](http://vuescrolljs.yvescoding.org/zh/guide/configuration.html#bar)来获得不同的滚动动画。
- 支持自动检测内容是否发生变化，可以查看这个[demo](http://vuescrolljs.yvescoding.org/zh/demo/#_3-%E6%A3%80%E6%B5%8B%E5%86%85%E5%AE%B9%E5%8F%91%E7%94%9F%E5%8F%98%E5%8A%A8)。

### 只在 slide 模式下有效的特点

- 支持[下拉刷新和上推加载](http://vuescrolljs.yvescoding.org/zh/guide/configuration.html#pullrefresh)，具体可以查看这个[demo](http://vuescrolljs.yvescoding.org/zh/demo/#vuescroll-%E6%94%AF%E6%8C%81%E4%B8%8B%E6%9D%A5%E5%88%B7%E6%96%B0%E5%92%8C%E4%B8%8A%E6%8E%A8%E5%8A%A0%E8%BD%BD-%E5%9C%A8%E4%BD%A0%E6%83%B3%E5%B1%95%E7%A4%BA%E4%B8%80%E4%B8%AA%E5%88%97%E8%A1%A8%E7%9A%84%E6%95%B0%E6%8D%AE%E7%9A%84%E6%97%B6%E5%80%99%E5%BE%88%E6%9C%89%E7%94%A8%E3%80%82)和这个 SSR 版本的[demo](https://vuescroll-issue-list-demo-zdizhghthq.now.sh/)。
- 支持截断配置,每次滚动固定的距离。可以查看这个 [demo](http://vuescrolljs.yvescoding.org/zh/demo/#_2-%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8)
- 支持分页。可以查看这个 [demo](http://vuescrolljs.yvescoding.org/zh/demo/#_1-%E8%BD%AE%E6%92%AD%E5%9B%BE)

### 其他特点

- 支持 [typescript](http://vuescrolljs.yvescoding.org/zh/guide/typescript.html)
- 支持 SSR, 可以查看这个 [demo](https://vuescroll-issue-list-demo-zdizhghthq.now.sh/)
