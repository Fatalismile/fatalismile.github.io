---
title: hexo 上传源码到github分支
date: 2022-07-26 15:34:48
tags: hexo
---

### 创建source新分支
在github的username.github.io仓库新建source分支

### 更改默认分支
把默认的main主支切换成source分支，该步骤在settings->Branches->Default branch，将默认分支由main更改成source，最后update。博客静态网页是发布到main主支的，主支不是我们应该关心的问题。
<!-- more -->

### 克隆source分支
1.克隆hexo分支到本地, git clone git@github.com:HuaZou/HuaZou.github.io.git；
2.在终端中cd进入该username.github.io文件目录,cd username.github.io；
3.在当前目录使用git branch`命令查看当前所在分支，应为新建的分支source.

### 上传源码文件
1.先将本地博客的源码文件（Hexo博客项目目录下的全部文件）全部拷贝进username.github.io文件目录中去；
2.准备将所有的文件都提交到source分支，提交时考虑以下注意事项：
    (1)将themes目录以内中的主题的.git目录删除（如果有），因为一个git仓库中不能包含另一个git仓库，否则提交主题文件夹会失败;
    (2)需要更新主题时在另一个地方git clone下来该主题的最新版本，然后将内容拷到当前主题目录即可
3.修改.gitignore文件，不建议上传一些大文件和以及个人隐私博客等，这些文件可以保存在云端；

``` bash
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
source/_posts/
```
4.使用如下命令提交源码文件

```bash
git add .
git commit -m "upload hexo source code"
git push origin source
```

### 同步至其他终端
添加ssh key至GitHub账户，克隆仓库，安装hexo等。在任何终端对博客做任何修改前先git pull更新最新的文件。

``` bash
git clone https://github.com/yourname/repository
cd my_blog
# 安装node.js
npm install hexo
npm install
npm install hexo-deployer-git -save

# 编写博客
hexo new post_name
cd source/_post
hexo generate (or g)
hexo server (or s)
```