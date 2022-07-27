---
title: yarn 下载与环境配置
date: 2022-07-27 21:13:37
tags:
categories: study
---

### 下载
使用npm下载yarn
``` bash
npm install yarn -g
```
<!-- more -->
全局下载的包会被保存到上面npm指定保存全局安装包的位置
【D:\nodejs\node_global】

### yarn环境配置
__1.找到yarn的安装目录,在bin同级新增两个文件夹__
![](https://cdn.jsdelivr.net/gh/fatalismile/picture/images/4000449689-222627e69bbf8bdd.webp)

__2.修改全局目录__
``` bash
//修改全局安装目录
yarn config set global-folder "D:\soft\nodejs\node_global\node_modules\yarn\yarn_global"

//修改全局安装目录的bin目录位置
yarn config set prefix "D:\soft\nodejs\node_global\node_modules\yarn\yarn_global"

//修改全局缓存目录
yarn config set cache-folder "D:\soft\nodejs\node_global\node_modules\yarn\yarn_cache"
```
![](https://cdn.jsdelivr.net/gh/fatalismile/picture/images/2114547727-6abf66324ef43b0c_fix732.webp)

__3.把全局安装目录加到系统环境变量中__
![](https://cdn.jsdelivr.net/gh/fatalismile/picture/images/3555877796-3c9e4ea7acb7f001_fix732.webp)