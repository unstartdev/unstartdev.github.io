---
layout: post
title: 大学物理III-13.2热力学第二定律
date: 2025-06-11 19:10:30 +0800
categories: Learning
tags:
- University Physics
---
* toc
{:toc}

# 热力学第二定理

## 开尔文表述

不可能从单一热源吸收热量，使之全部变为有用功，而不产生**其他影响**

## 克劳修斯表述

热量不可能**自动地**从低温物体传递到高温物体

aka
*不可能使热量从低温热源传递到高温热源而不产生其他影响*

## 例题

13-4 试评论以下几种说法是否正确

(1) 功可以完全变为热，但热不能完全变成功

(2) 热量只能从高温物体传到低温物体，不能从低温物体传到高温物体

(4) “理想气体与单一热源接触做等温膨胀时，吸收的热量全部用来对外做功。”这个说法既不违反热力学第一定律也不违反热力学第二定律

(1)(2) 错误而 (4) 正确

**NB:** 加上“产生其它影响”的条件则可以实现，(4)中发生的影响则为理想气体所构成的孤立系统的温度在不断上升。

# 可逆过程

可逆过程需要满足的条件

- 准静态过程
- 无耗散效应（摩擦、热传导等）
- 系统与外界无温差/压差

or

- 如果有热量流动，不能有温度变化
- 如果有温度变化，不能有热量流动

## 卡诺定理

工作与两个温度之间的热机，可逆热机的效率最高，且可逆热机都具有相同的效率

即以下关系式

$$ \eta = 1 - \frac{Q_2}{Q_1} \leq 1 - \frac{T_2}{T_1} $$

# 熵

符号为 $S$ ,它是一个状态函数,即熵的大小只与状态有关,而与如何达成该状态的方法无关

通常讨论其在两个状态间的变化量比较有意义, 即 $\Delta S$ ，通常熵变通过构造两状态之间的可逆过程进行计算（即热力学熵 aka 克劳修斯熵）

## 热力学熵

对于可逆过程从状态1到状态2：

由热力学第一定律 $ Q = \Delta U + W $ 得

$$ \delta Q = \mathrm{d}U + p\mathrm{d}V = \nu C_{V,m} \mathrm{d}T + p\mathrm{d}V $$

$$ \Delta S = \int_1^2 \frac{\delta Q}{T} = \int_1^2 \frac{\nu C_{V,m}}{T} \mathrm{d}T + \frac{p}{T}\mathrm{d}V = \int_{(T_1, V_1)}^{(T_2, V_2)} \frac{i}{2} \nu R \mathrm{d}T  + \frac{p}{T}\mathrm{d}V $$

## 统计力学熵

$$ S = k\ln\Omega $$

其中 $\Omega$ 为某一宏观态所对应的微观态数目

补充：斯特林近似 $ \ln(N!) \approx N\ln N - N $ or $ N! \sim \sqrt{2N\pi} \dfrac{N^N}{e^N} $

## 熵增加原理

将卡诺定理改写为

$$ \frac{Q_1}{T_1} = \frac{Q_2}{T_2} $$

对于一个可逆过程有

$$ \oint \frac{\delta Q}{T} = 0 $$

对于不可逆过程

$$ 1 - \frac{1}{Q_1} \lt 1 - \frac{1}{T_1}, \\

\frac{Q_1}{T_1} - \frac{Q_2}{T_2} \lt 0, \\

\oint \frac{\delta Q}{T} \lt 0 $$

构造一个从状态1到状态2为不可逆过程而从状态2到状态1为可逆过程的循环（状态1到状态2需要吸热），同时可知该循环为不可逆循环，于是

$$ \oint \frac{\delta Q}{T} = \int_1^2 \frac{\delta Q}{T} + \int_2^1 \frac{\delta Q}{T} \lt 0 $$

又

$$ \int_2^1 \frac{\delta Q}{T} = S_1 - S_2 $$

于是

$$ \Delta S = S_2 - S_1 \gt \int_1^2 \frac{\delta Q}{T} \gt 0 $$

与可逆过程的情况合并即得

$$ \Delta S \geq 0 $$

该式表明系统在绝热过程中熵永不减少。

孤立系统中不可逆过程都是熵增加的。

在不可逆的绝热自由膨胀过程中

$$ \Delta S = \nu R \ln(V_2 / V_1) $$

当作等温过程进行计算可以推出上面的关系


$$ \frac{\cfrac{2\pi}{3} + \cfrac{\pi}{2}}{2\pi} T = 1,\\
T = \frac{12}{7} = \frac{2\pi}{\omega}, \\ \omega = \frac{7}{6}\pi $$