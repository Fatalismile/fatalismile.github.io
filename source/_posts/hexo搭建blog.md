---
title: hexo搭建blog
date: 2022-07-27 20:02:17
tags: hexo
categories: study
---
## github新建仓库
仓库名为yourname.github.io

## 安装Git
[Git官网](https://git-scm.com/)
<!-- more -->
## 绑定GitHub并提交文件

### 绑定GitHub
指定 RSA 算法生成密钥
``` bash
ssh-keygen -t rsa 
```
生成两个文件，分别为秘钥 id_rsa 和公钥 id_rsa.pub. （注意：git中的复制粘贴不是 Ctrl+C 和 Ctrl+V，而是 Ctrl+insert 和 Shift+insert.）文件的位置在 Git Bash 上面都有显示，默认生成在以下目录：
- Linux 系统：~/.ssh
- Mac 系统：~/.ssh
- Windows 10 ：C:/Users/yourname/.ssh

把公钥 id_rsa.pub 的内容添加到 GitHub。复制公钥 id_rsa.pub 文件里的内容，你可以通过目录找到 id_rsa.pub 文件的位置，用记事本打开文件复制。也可以按照以下步骤直接在 Git Bash 上打开：
``` bash
cd ~/.ssh 
ls
cat id_rsa.pub
```
进入 GitHub 主页，先点击右上角，再点击 settings ,点击 SSH and GPG keys，再点击 New SSH key。将复制的公钥 id_rsa.pub 的内容粘贴到 key 内，再点击 Add SSH key

在 Git Bash 中输入：
``` bash
ssh -T git@github.com
```

若出现下图中的情况，则表明绑定成功：
![](https://cdn.jsdelivr.net/gh/fatalismile/picture/images/v2-3915b3e46e40010d3d911f84d4e8b0ff_r.png)

### 提交文件
提交文件有两种方法：

__第一种：本地没有 git 仓库__
直接将远程仓库 clone 到本地；
``` bash
git clone https://github.com/Fatalismile/fatalismile.github.io.git
```
将文件添加并 commit 到本地仓库；
``` bash
git add file
git status  # 查看仓库状态
git commit -m "commit file"
git log  # 查看仓库提交日志
```
将本地仓库的内容push到远程仓库。
``` bash
git push origin 
```

第一次提交的话，会让你输入用户名和邮箱：
``` bash
git config --global user.name"yourname"
git config --global user.email"***@***.com"
```

__第二种：本地有 Git 仓库，并且我们已经进行了多次 commit 操作__
建立一个本地仓库进入，init 初始化；
``` bash
git init
```
关联远程仓库；
``` bash
git remote add origin https://github.com/Fatalismile/fatalismile.github.io.git
```
同步远程仓库和本地仓库；
``` bash
git pull origin main
```
将文件添加提交到本地仓库；``` bash
git add file
git status  # 查看仓库状态
git commit -m "commit file"
git log  # 查看仓库提交日志
```
将本地仓库的内容 push 到远程仓库。
``` bash
git push origin 
```

## 购买域名
Godaddy，腾讯云，阿里云，freenom

## 安装node.js和Hexo
### 安装node.js
[node.js官网](https://nodejs.org/en/)
安装完成可以用打开cmd检验一下是否安装成功，用 node -v 和 npm -v 命令检查版本
### 设置npm在安装全局模块时的路径和环境变量
果不设置的话，安装模块的时候就会把模块装到C盘，占用C盘的空间，并且有可能安装好hexo后却无法使用，所以我们需要设置一下：

在 nodejs 文件夹中新建两个空文件夹 node_cache、node_global，如下图：

打开cmd，输入如下两个命令：

``` bash
npm config set prefix "D:\nodejs\node_global"
npm config set cache "D:\nodejs\node_cache"
```

设置环境变量：win10系统 --> 打开控制面板 --> 系统 -->高级系统设置 --> 环境变量 ，然后在系统变量中新建一个变量名为“NODE_PATH”，值为“D:\nodejs\node_global\node_modules”，如下图：
![](https://cdn.jsdelivr.net/gh/fatalismile/picture/images/Snipaste_2022-07-27_21-05-05.png)
![](https://cdn.jsdelivr.net/gh/fatalismile/picture/images/Snipaste_2022-07-27_21-05-44.png)
然后编辑用户变量里的Path，将相应npm的路径改为：D:\nodejs\node_global，如下图：
![](https://cdn.jsdelivr.net/gh/fatalismile/picture/images/Snipaste_2022-07-27_21-06-40.png)

__测试__
在 cmd 命令下执行 npm install webpack -g 
然后 webpack 这个模块已经在我们设置默认的文件夹中了：D:\node.js\node_modules

### 安装Hexo
1.在D盘建立一个文件夹 Blog，点开 Blog 文件夹，鼠标右键打开 Git Bush Here，输入npm命令安装Hexo：
``` bash
npm install -g hexo-cli
```
2.安装完成后，输入 hexo init 命令初始化博客(必须是空文件夹）
然后输入 hexo g 静态部署
网页部署完成，输入 hexo s 命令可以查看
浏览器输入 http://localhost:4000 就可以打开新部署的网页
ctrl +c 停止运行服务器

### 将Hexo部署到GitHub
1.回到的 Blog 文件夹，用笔记本打开 _config.yml 文件
下滑到文件底部，填上如下内容：
``` bash
deploy:
  type: git
  repository: https://github.com/fatalismile/fatalismile.github.io.git  #你的仓库地址
  branch: main
  ```
__:后面有空格__

2.然后回到 Blog 文件夹中，打开 Git Bash，安装Git部署插件，输入命令：
``` bash
npm install hexo-deployer-git --save
```
也可以使用yarn
``` bash
npm install -g yarn
yarn add hexo-deployer-git --save
```

然后分别输入以下三条命令：
``` bash
hexo clean   #清除缓存文件 db.json 和已生成的静态文件 public
hexo g       #生成网站静态文件到默认设置的 public 文件夹(hexo generate 的缩写)
hexo d       #自动生成网站静态文件，并部署到设定的仓库(hexo deploy 的缩写)
```
完成以后，打开浏览器，输入 https://xxx.github.io 就可以打开网页了

## 解析域名
1.添加两条解析记录
- A记录  名称@  记录值  ip
- CNAME  名称www  记录值  https://xxx.github.io
ip通过 __ping + xxx.github.io__ 得到

2.打开 Blog 文件夹里的 source 文件夹，添加CNAME文件，可以先创建一个CNAME.txt文件，打开后写上你的域名，不要加www否则每次访问都必须加www，但如果不带有www，以后访问的时候带不带www都可以访问，保存后记得要重命名，将.txt删除

3.回到 Blog 文件夹，右键打开 Git Bash，依次输入下面三条命令：
``` bash
hexo clean
hexo g
hexo d
```

4.打开GitHub，看看CNAME文件是否已经在你的项目中，如果没有CNAME文件，可以自己添加。
点击 settings ,查看你的网址是否已保存。如果是空白的自己填上去。
现在可以通过自己的域名访问了


## 设置next主题
### 更换主题
打开博客根目录Blog文件夹，右键Git Bash，输入如下代码将next主题下载到目录Blog/themes：
``` bash
git clone https://github.com/theme-next/hexo-theme-next themes/next
```
打开根目录下的_config.yml(称为站点配置文件)，修改主题（注意冒号后都要有空格）：
``` bash
# Site
title: 枫叶苑  #标题
subtitle: ''
description: 选择有时候比努力更重要     #简介或者格言
keywords:
author: 枫叶     #作者
language: zh-CN     #主题语言
timezone: Asia/Shanghai    #中国的时区

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next   #主题改为next
```

打开目录Blog/themes/next/下的_config.yml（称为主题配置文件），只要将你选的主题前的#删除就行了：
``` bash
# Schemes
#scheme: Muse
#scheme: Mist
#scheme: Pisces
scheme: Gemini    #这是我选的主题
```

回到根目录打开Git Bash，输入如下三条命令：
``` bash
hexo clean
hexo g
hexo d
```
完成后打开你的博客

