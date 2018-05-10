---
layout: post
title: 回到Windows
date: 2018-04-29 13:31:31 +0800
categories: Windows
---
好一番折腾，又回到了开始时的Windows,只不过把Vista换成了10

mmp!怎么Windows比linux还要折腾，简直hentai!

## 显卡驱动

emmm...为什么屏幕上的东西都那么大，是我撸多了吗？

打开设置后发现，WTF, 分辨率竟然是1024x668!? 我的显示器可是1440x900的呀!

接着，我滚去设备管理器里看了下显示适配器，额，Windows 通用显示适配器。这...分明是没有显卡驱动吧（也许是我的硬件太老了:Geforce 7100 GS），这明显没有linux的内核驱动做得好，linux可是自带nouveau驱动的呀！

### 安装驱动，前方道路多坑，小心慢行

首先，我弄来了驱动精灵，又是一个坑爹 bug ，眼看nvidia的驱动进度条就要走完，然后，突然给我冒出个，驱动安装失败！！！！我再试了几遍，还是出错的。

哦，我突然想起了什么，立刻打开了IE,打开nvdia的官网，下载驱动。嗯，显示器可算是平静了。

## 声卡

这个必须得去OEM那里找到，不然，有你好受

## 在Windows上必须的东西

1. Git (没有这货我的版本库都不知道该怎么活)
2. Mingw\Cygwin (Windows上的Linux软件)
5. Notepad++ (极为好用的文本编辑器)
6. Visual Studio (造代码的强大IDE)
7. putty全套 (极佳的ssh工具)
6. [Libreoffice](https://zh-cn.libreoffice.org/)/[WPS Office政府版(办公工具)](http://www.sjzrs.gov.cn/col/1515395624617/2018/02/11/1518329562990.html)



## new.sh

不知道这货为什么在Cygwin里失效了，细看了一下错误输出，是换行符的问题，在Windows里行尾标记是CR LF,而在linux里是LF，所以就出错了，转换一下就好了