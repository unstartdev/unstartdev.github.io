---
layout: post
title: FreeBSD的IPv6配置
date: 2019-06-01 11:49:04 +0800
categories: 瞎搞
---
环境:
- FreeBSD 12
- 使用静态IPv6地址的KVM虚拟机

> PS:使用如下网络信息作为示例
  地址: 2001:67c:11b0:1f0::2 prefixlen 64
  网关: 2001:67c:11b0:1f0::1
  DNS: 2620:fe::fe
  网卡: vtnet0

Anyway, 我们先打开`/etc/rc.conf`(用你喜欢的编辑器)

加入:
```
ifconfig_vtnet0_ipv6="inet6 2001:67c:11b0:1f0::2 prefixlen 64" #使用2001:67c:11b0:1f0::2/64也行
ipv6_defaultrouter="2001:67c:11b0:1f0::1%vtnet0" #默认路由
```

注意了，默认路由中的`%vtnet0`网卡名建议带上，不然ifup之后可能需要ping一下网关才可以连上[^FreeBSDForum]


然后`service netif restart`

## DNS

在`/etc/resolv.conf`加入`2620:fe::fe`即可

水完了

[^FreeBSDForum]: https://forums.freebsd.org/threads/weird-problem-with-ipv6-cant-access-server-from-the-internet.68299/
 