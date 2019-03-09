---
layout: post
title: linux折腾记-加速
date: 2018-04-11 21:29:09 +0800
categories: linux
---
我这是老配置了，要用得好linux就得下功夫优化

## Sysctl参数

以下参数是我在网上收集整理的，侵权必删

{% highlight conf %}
# I/O
vm.dirty_ratio = 5
vm.dirty_background_ratio = 5

# Sysrq
kernel.sysrq = 1

# Network
## Tcp Fast Open
net.ipv4.tcp_fastopen = 3

## Custom
net.ipv4.tcp_mtu_probing = 1
net.ipv4.tcp_keepalive_time = 60
net.ipv4.tcp_keepalive_intvl = 10
net.ipv4.tcp_keepalive_probes = 6
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_rfc1337 = 1
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.log_martians = 1
net.ipv4.conf.all.log_martians = 1
net.core.netdev_max_backlog = 65536
net.core.optmem_max = 65536
net.ipv4.tcp_slow_start_after_idle = 0
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 15
net.ipv4.tcp_window_scaling = 1
{% endhighlight %}

> vm.dirty_ratio项请根据实际修改，如：1GiB RAM的建议值是10,那么在我这台2GiB RAM的机器上我就使用10/2=5[^1]
> vm.dirty_background_ratio在低内存是推荐为5[^2]

## 进程处理优先级

### Verynice

Verynice 那很棒！Nice级别就是linux中的进程处理优先级，它负责控制谁允许占用cpu性能的更多或更少

AUR: [Click here][1]

设定verynice开机自启
{% highlight shell %}
sudo systemctl enable verynice.service
{% endhighlight %}

配置文件位于`/etc/verynice.conf`

### hungryexe

这个flag适用于长期cpu占用率为100%的程序，在两个高cpu占用的程序在，一个为hungryexe而另一个没有该flag，那么hungryexe程序会被暂停或直接被杀死

### goodexe

这个flag适用于多媒体程序，使它们不会轻易地被系统停止，让X变成goodexe也是个好主意

在Archlinux中加上`goodexe /usr/lib/xorg-server/Xorg`

在其它系统上使用如下命令:
{% highlight shell %}
sudo ps -aux | grep X
{% endhighlight %}

将进程后面的命令替换`/usr/lib/xorg-server/Xorg`再填入即可

### runawayexe

这个flag中的应用程序将会肆无忌惮地吃掉你的cpu请谨慎填写

[^1]: [ArchLinux wiki Sysctl](https://wiki.archlinux.org/index.php/Sysctl#Virtual_memory)

[^2]: [ArchLinux wiki Sysctl](https://wiki.archlinux.org/index.php/Sysctl#Virtual_memory)

[1]: https://aur.archlinux.org/packages/verynice/
