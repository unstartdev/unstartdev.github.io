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

[^1]: [ArchLinux wiki Sysctl](https://wiki.archlinux.org/index.php/Sysctl#Virtual_memory)

[^2]: [ArchLinux wiki Sysctl](https://wiki.archlinux.org/index.php/Sysctl#Virtual_memory)
