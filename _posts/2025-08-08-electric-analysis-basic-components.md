---
layout: post
title: 电路分析原理-理想电路元件
date: 2025-08-08 20:08:33 +0800
categories: Learning
tags:
- Electric Analysis
---
* toc
{:toc}
## 电阻

$$ u = iR $$

$$ p = i^2R = u^2 G $$

### 电导

$$ G = \frac{1}{R} $$

单位为西[门子]，符号S

## 电容

$$ C = \frac{Q}{u} $$

即

$$ i(t) = C\frac{\mathrm{d}u(t)}{\mathrm{d}t} \tag{*} $$

### 功率

$$ p(t) = Cu(t)\frac{\mathrm{d}u(t)}{\mathrm{d}t} $$

$ p(t) $ 可为正号或负号，因此电容可作为电路的负载或激励，称为**储能元件**

### 储能

某一时刻

$$ W(t) = \frac{1}{2}Cu^2(t) $$

### 动态元件

又式子(*)可见，当 $\frac{\mathrm{d}u(t)}{\mathrm{d}t} = 0$ 时通过电容的电流为0，故在直流电路中电容相当于开路

### 记忆元件

$$
\begin{aligned}
u(t) & = \int_{-\infty}^t i(s)\mathrm{d}s \\
& = \int_{-\infty}^0 i(s)\mathrm{d}s + \int_{0}^t i(s)\mathrm{d}s \\
& = u(0) + \int_{0}^t i(s) \mathrm{d}s
\end{aligned}
$$


## 电感

### 磁链 $\psi$

$$ \psi = N\phi $$

实际上

$$ \psi = Li \tag{1} $$

又

$$ \frac{\mathrm{d}\psi(t)}{\mathrm{d}t} = u(t) $$

对(1)求导

$$ u(t) = L\frac{\mathrm{d}i(t)}{\mathrm{d}t} $$

### 功率

$$ p(t) = u(t)i(t) = Li(t)\frac{\mathrm{d}i(t)}{\mathrm{d}t} $$

### 储能

$$ W(t) = \int_{-\infty}^t p(t)\mathrm{d}t = \int_{-\infty}^t Li(t)\mathrm{d}i(t) = \frac{1}{2}Li^2(t) $$

## 独立电压源

$$ u = U_S(t) \  \text{or} \  u=U_S \text{称恒压源} $$

不能被短路

### 原型

电池、发电机

## 独立电流源

$$ i=i_S(t) \  \text{or} \  i=I_S \text{称恒流源} $$

输出不能开路

### 原型

光电池

> 在恒定光照下，一个处于工作状态的太阳电池，其光电流不随工作状态而变化


## 理想二极管

> 正向偏压导通 反向偏压截止

### 伏安特性

$$ 
\begin{cases}
i=0, &u \lt 0, \\
u=0, &i \gt 0
\end{cases}
$$

## 理想变压器

全耦合、无损耗、自感无穷大

![Transformer](https://i.ooxx.ooo/i/ZDJhO.jpg)

图中两个“·”为磁场的同名端，两个端电流同时流进或流出同名端时磁场相互增强，否则相互减弱

$$
\begin{cases}
u_1 = nu_2 \\
i_1 = -\frac{1}{n} i_2
\end{cases}
$$

### 作用

- 电压变换
- 电流变换
- 阻抗变换

## 忆阻元件

$$
\phi = Mq
$$

即

$$
\begin{align}
u = \frac{\mathrm{d}\phi}{\mathrm{d}t} \\
& = M\frac{\mathrm{d}q}{\mathrm{d}t} \\
& = Mi
\end{align}
$$

在线性时不变系统中与电阻器相同

## 晶体管(Bipoloar Junction Transistor)

![1779X1092/IMG_20250904_001837.jpg](https://tc-new.z.wiki/autoupload/f/A-chnBwrTgyZaHnuAYTg21SKr6EMyGO2E_5Ofqkb6Muyl5f0KlZfm6UsKj-HyTuv/20250904/oCGV/1779X1092/IMG_20250904_001837.jpg)

以下例子使用NPN三极管的共发射极(E)接法，如图

### 大信号开关

$U_{BE}$ 在硅晶体管中为 $0.7\mathrm{V}$ ，在锗晶体管中为 $0.3\mathrm{V}$

|条件|发射结|集电结|B-E路|C-E路|晶体管状态|$i_B$ 与 $i_C$ 关系|
|---|---|---|---|---|---|---|
|$u_{BE} \lt U_{BE}$|反向偏置|反向偏置|开路|开路|截止|$i_B=i_C=0$|
|$u_{BE} \geq U_{BE}$ 且 $u_{CE} \geq u_{BE}$|正向偏置|反向偏置|保持恒定电压 $U_{BE}$|等效为CCCS|-|$i_C=\beta i_B$|
|$u_{BE} \geq U_{BE}$ 且 $u_{CE} \lt u_{BE}$|正向偏置|正向偏置|保持恒定电压 $U_{BE}$|保持恒定电压 $U_{CES}$|饱和|-|

![饱和状态](https://i.ooxx.ooo/i/MzE2Y.jpg)

### 交流小信号

存在一个动态电阻

$$
r_{be} = r_{bb^\prime} + r_{b^\prime e} = r_{bb^\prime} + \frac{V_T}{I_{BQ}}
$$

其中 $r_bb^\prime$ 为基区体电阻

### 高频小信号

存在寄生电容

## 场效应管(Field Effect Transistor)

具有三个端子

- 栅极(Gate)
- 源极(Source)
- 漏极(Drain)

### 类别

- 结型场效应管(J-FET)
- 绝缘栅型场效应管(MOSFET)

又根据参与导电的载流子分为N沟道和P沟道

### 工作原理

$u_{GS}$ 控制导电沟道状态，从而对 $i_{D}$ 实现控制

转移特性

$$
i_{D} = f(u_{GS})|_{u_{DS} = \text{CONST}}
$$

输出特性

$$
i_D = g(u_{DS})|_{u_{GS} = \text{CONST}}
$$

以ENMOSFET的共S接法进行分析

设 $U_{GS_{(th)}}$ 为形成沟道所需的开启电压

#### $u_{GS} \lt U_{GS_{(th)}}$ 且 $u_{DS} \lt u_{GS} - U_{GS_{(th)}}$

$$
i_D = \frac{\mu_n C_{ox} W}{2L}\left[\left(u_{GS} - U_{GS_{(th)}}\right) u_{DS} - u_{DS}^2\right]
$$

$\mu_n$ 为沟道载流子的平均迁移率

$W, L$ 分别为沟道的宽和长

$C_{ox}$ 为管栅电容

#### 夹断区 aka 截止区 $u_{GS} \lt U_{GS_{(th)}}$

此时沟道夹断

$$
\forall u_{DS}, i_D \approx 0
$$

#### 可变电阻区 $u_{GS} \gt U_{GS_{(th)}}, u_{DS} \ll u_{GS} - U_{GS_{(th)}}$

$$
R_{DS} = \frac{2L}{\mu_n C_{ox} W (u_{GS} - U_{GS_{(th)}})}
$$

起放大器（非线性）作用

#### 恒流区 $u_{GS} \gt U_{GS_{(th)}}, u_{DS} \geq u_{GS} $

导电沟一端夹断， $u_{DS}$ 消耗于克服沟道夹断， $i_{D}$ 大小不受 $u_{GS}$ 控制

### 低频小信号

在漏极和源极间并联一个较大的反馈电阻处理

### 高频信号

G、D，G、S，D、S间存在寄生电容
