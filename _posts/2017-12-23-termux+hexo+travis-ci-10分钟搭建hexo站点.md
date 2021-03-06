---
layout: post
title: Termux+Hexo+Travis-CI 10分钟搭建Hexo站点
tag:
---
## 前提:

- 可正常使用的Android手机(Rootd,如果没有Root也行只不过写文章比较麻烦)
- Github账号

如果满足以上条件，我们就可以开始了,安装Termux

> [F-Droid]

## 开始

### 在应用内安装Git:

{% highlight shell %}
pkg install git
#若有安装确认就输y
#再定义一个变量
read githubuser
#然后输入你的Github用户名并按Enter
{% endhighlight %}

> Github创建自己的页面仓库 [点我] 仓库名为「用户名+github.io」

### cd到刚才clone下来的git仓库***cd 用户名+github.io***

### 下载这个仓库到本地:

[https://github.com/unstartdev/hexo-none/archive/none.zip]

### 解压文件到Termux

{% highlight shell %}
mv /文件路径/hexo-none-none.zip $HOME/none.zip;unzip $HOME/none.zip;mv $HOME/hexo-none-none/source $HOME/hexo;rm $HOME/none.zip;rm -rf $HOME/hexo-none-none
{% endhighlight %}

现在我们可以按照[hexo的配置文档]来配置我们的Hexo了「PS:Hexo目录在hexo目录下」

### 配置完成后我们可以开始利用Travis-CI和Git部署了

### 先初始化仓库

{% highlight shell %}
cd $HOME/hexo;git init
{% endhighlight %}

### 创建分支

{% highlight shell %}
git branch source
{% endhighlight %}

### 让source分支不存在任何关联

{% highlight shell %}
git checkout master
git rm --cached -r .
git clean -f -d
git commit --allow-empty -m "[empty]"
{% endhighlight %}

### 进行第一次PUSH

{% highlight shell %}
git add .
git push origin master
git checkout source
git add .
git commit -m "first commit"
git push origin source
{% endhighlight %}

### 集成travis-ci

在Source分支下创建.travis.yml文件**touch .travis.yml**
~~文件内容参考: Link~~

Sorry,我换了jekyll,所以404了，请自行Google

### 再push一次

{% highlight shell %}
git add .
git commit -m "push"
git push origin source
{% endhighlight %}

登录[Travis-CI], sync account然后启用仓库的集成，设置里打开第一项即可

[F-Droid]: https://f-droid.org/packages/com.termux/
[Travis-CI]: https://travis-ci.org/
[hexo的配置文档]: https://hexo.io/zh-cn/docs/configuration.html
[https://github.com/unstartdev/hexo-none/archive/none.zip]: https://github.com/unstartdev/hexo-none/archive/none.zip
[点我]: https://github.com/new
