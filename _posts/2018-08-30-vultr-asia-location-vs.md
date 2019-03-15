---
layout: post
title: Vultr亚洲机房对比
date: 2018-08-30 18:29:56 +0800
categories: 
- VPS
---
Emmm...好一轮没有更新过博客了，来诈尸一回

总所周知的便宜商家 Vultr...有两个位于亚洲的数据中心

1. Tokyo, Japan

日本东京机房，应该很早就人用了吧，然而~~国人所过寸草不生~~这个机房也有一套独特的IP抽奖机制[^V2EX]

话不多说上一组测试数据

    PS: 这是中国联通

```
 2  45.76.200.1 (45.76.200.1)  0.795 ms  1.247 ms  1.489 ms
 3  * * *
 4  ae-22.a02.tokyjp05.jp.bb.gin.ntt.net (120.88.53.65)  13.073 ms  13.049 ms  13.063 ms
 5  ae-25.r02.tokyjp05.jp.bb.gin.ntt.net (129.250.6.182)  1.212 ms ae-4.r03.tokyjp05.jp.bb.gin.ntt.net (129.250.6.188)  1.203 ms  1.199 ms
 6  ae-19.r31.tokyjp05.jp.bb.gin.ntt.net (129.250.6.132)  1.557 ms * ae-18.r31.tokyjp05.jp.bb.gin.ntt.net (129.250.6.128)  1.607 ms
 7  ae-10.r26.tokyjp05.jp.bb.gin.ntt.net (129.250.2.152)  1.168 ms ae-9.r26.tokyjp05.jp.bb.gin.ntt.net (129.250.2.10)  1.128 ms ae-10.r26.tokyjp05.jp.bb.gin.ntt.net (129.250.2.152)  1.404 ms
 8  219.158.42.5 (219.158.42.5)  104.916 ms  104.841 ms  103.969 ms
 9  219.158.103.37 (219.158.103.37)  105.547 ms  105.333 ms  105.176 ms
10  * 219.158.8.121 (219.158.8.121)  104.594 ms *
11  120.83.0.26 (120.83.0.26)  107.034 ms  107.029 ms *
```

回程通过NTT线路，但是...据说这个NTT三天一炸，PING AVG:118.687ms

2. Singapore

东京测试用的是官方节点108段IP...

新加坡机房值得一提的是移动通过香港直连，用我自己的server测试

```
 8  ae-1.r31.tokyjp05.jp.bb.gin.ntt.net (129.250.2.153)  103.204 ms  106.785 ms  105.102 ms
 9  ae-9.r21.sngpsi07.sg.bb.gin.ntt.net (129.250.7.39)  178.106 ms  179.589 ms  177.402 ms
10  ae-2.r00.sngpsi07.sg.bb.gin.ntt.net (129.250.3.90)  176.241 ms  176.178 ms ae-2.r01.sngpsi07.sg.bb.gin.ntt.net (129.250.3.130)  177.158 ms
11  ae-0.a01.sngpsi07.sg.bb.gin.ntt.net (129.250.2.122)  175.985 ms  177.006 ms ae-1.a01.sngpsi07.sg.bb.gin.ntt.net (129.250.2.240)  182.085 ms
12  ae-0.choopa.sngpsi07.sg.bb.gin.ntt.net (116.51.18.134)  179.028 ms  197.574 ms  198.453 ms
```

联通绕日本，所以延迟稍微高些但却很稳，PING AVG:199.616ms

emmm...建站的话新加坡小胜日本东京，因为它的速度比较稳定

[^V2EX]: https://www.v2ex.com/t/302347