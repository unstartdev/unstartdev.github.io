---
layout: post
title: Steam游戏在linux上炸了？
date: 2020-01-03 18:12:42 +0800
categories: 瞎搞
---

## 前因

某个闲暇的下午，我打开了steam，用鼠标划过库目录，两眼一亮。“是你！天际线！”我惊呼着，点击“开始游戏”

加载新游戏的时候就...

![图片.png](https://i.loli.net/2020/01/03/rvpUVznIytL38Ju.png)

*图片仅作装饰XD*

## 当机立断

机智的我立刻用`coredumpctl`查看崩溃dump

{% highlight bash %}
           PID: xxx (vulkandriverque)
           UID: xxx (unstartdev)
           GID: xxx (users)
        Signal: 6 (ABRT)
     Timestamp: Thu 2020-01-02 21:20:34 CST (21h ago)
  Command Line: $HOME/.local/share/Steam/ubuntu12_32/../ubuntu12_64/vulkandriverquery
    Executable: $HOME/.local/share/Steam/ubuntu12_64/vulkandriverquery
 Control Group: /user.slice/user-xxx.slice/session-2.scope
          Unit: session-2.scope
         Slice: user-xxx.slice
       Session: 2
     Owner UID: xxx (unstartdev)
       Boot ID: xxx
    Machine ID: xxx
      Hostname: UdevProject
       Message: Process xxx (vulkandriverque) of user xxx dumped core.
                
                Stack trace of thread 1797:
                #0  0x00007fae5c10bf25 raise (libc.so.6 + 0x3bf25)
                #1  0x00007fae5c0f5897 abort (libc.so.6 + 0x25897)
                #2  0x00007fae5c0f5767 __assert_fail_base.cold (libc.so.6 + 0x25767)
                #3  0x00007fae5c104526 __assert_fail (libc.so.6 + 0x34526)
                #4  0x000055ee198db467 n/a ($HOME/.local/share/Steam/ubuntu12_64/vulkandriverquery + 0xd6467)
                #5  0x000055ee198c2277 n/a ($HOME/.local/share/Steam/ubuntu12_64/vulkandriverquery + 0xbd277)
                #6  0x00007fae5c0f7153 __libc_start_main (libc.so.6 + 0x27153)
                #7  0x000055ee198c20ea n/a ($HOME/.local/share/Steam/ubuntu12_64/vulkandriverquery + 0xbd0ea)

           PID: xxx (Cities.x64)
           UID: xxx (unstartdev)
           GID: xxx (users)
        Signal: 8 (FPE)
     Timestamp: Fri 2020-01-03 13:02:34 CST (5h 19min ago)
  Command Line: $HOME/.local/share/Steam/steamapps/common/Cities_Skylines/Cities.x64 --force-opengl
    Executable: $HOME/.local/share/Steam/steamapps/common/Cities_Skylines/Cities.x64
 Control Group: /user.slice/user-xxx.slice/session-2.scope
          Unit: session-2.scope
         Slice: user-xxx.slice
       Session: 2
     Owner UID: xxx (unstartdev)
       Boot ID: xxx
    Machine ID: xxx
      Hostname: UdevProject
(truncated)
       Message: Process xxx (Cities.x64) of user xxx dumped core.
                
                Stack trace of thread 1845:
                #0  0x00007f68a7063553 n/a (n/a + 0x0)
{% endhighlight %}

其中不难发现这个crash是由`$HOME/.local/share/Steam/ubuntu12_32/../ubuntu12_64/vulkandriverquery`引发的，于是我就手动运行单独了一下它，结果输出了DRM版本过低的消息，然后我便开始了四方查阅

## 后果

查阅到的原因是因为linux内核中的`radeon`模块所使用的是DRM 2.*，无法满足`vulkandriverquery`的要求，那怎么办啊，我这可是老显卡<sub>(R9 270 Southern Island)</sub>，又是一波猛如虎的操作，我将目光投向了那边实验性支持SI<sub>指Sounthern Island</sub>的`amdgpu`驱动<sub>或者可以索性将vulkan全套东西删掉？没试过</sub>

ArchWiki上有指南，我就不造轮子了  [传送门->"https://wiki.archlinux.org/index.php/AMDGPU#Enable_Southern_Islands_(SI)_and_Sea_Islands_(CIK)_support"](https://wiki.archlinux.org/index.php/AMDGPU#Enable_Southern_Islands_(SI)_and_Sea_Islands_(CIK)_support)

最后完美运行ExcellenXD!