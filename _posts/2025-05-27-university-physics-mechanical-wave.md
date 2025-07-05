---
layout: post
title: 大学物理III-7机械波
date: 2025-05-27 15:00:53 +0800
categories: Learning
tags:
- "University Physics"
---
* toc
{:toc}

# 常用量及其单位

|物理量|字母|单位|
|---|---|---|
|波速| $u$ | $\mathrm{m \cdot s^{-1}}$ |
|波长| $\lambda$ | $\mathrm{m}$ |
|频率| $\nu$ | $\mathrm{Hz}$ |
|周期| $T$ | $\mathrm{s}$
|振幅| $A$ | $\mathrm{m}$ |
|角频率| $\omega$ | $\mathrm{rad\cdot s^{-1}}$ |

# 公式 & 理论

## 波长、波速和周期间的关系

$$ u = \frac{\lambda}{T} = \lambda \nu $$

## 弹性体的形变规律 (P179)

### 拉伸或压缩形变（杨氏模量）

$\vec{F}$ 的方向沿着横截面 $S$ 的法线方向

正应力

$$ \sigma = \frac{F}{S} $$

线应变

$$ \epsilon = \frac{\Delta l}{l} $$

他们有以下关系

$$ \sigma = E \epsilon $$

其中的 $E$ 称为**杨氏模量**

### 剪切形变（切变模量）

当物体受到一对大小相等、方向相反，不在同一直线上的力，使物体某一截面和另一与它平行的截面产生平行于截面相对移动时，物体的形变叫做剪切形变.

设有一长方体，两端底面收到切向力 $\vec{F}$ 作用，这时产生一切应变

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=449240491&bvid=BV1xj411b735&cid=1286120088&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

剪切应力

$$ \tau = \frac{F}{S} $$

切应变的量值使用物体偏移原平面的角度 $\gamma$ 表示

于是

$$ \tau = \frac{F}{S} = G \gamma $$

其中 $G$ 称为**切变模量**

### 容积形变（体积模量）

在弹性体内部划分出一个小立方体，容积为 $V_0$ ，当其受到来自各个方向的正压力（内力）时，容积变为 $V$ ，设立方体的受力面积为 $S$ 

正应力

$$ p = \frac{F}{S} $$

体应变

$$ \theta = \frac{\Delta V}{V_0} = \frac{V - V_0}{V_0} $$

于是

$$ p = -K \theta $$

其中 $K$ 称为**体积模量**

### 各模量与波速的关系

波速 $u$ 决定于介质的性质和状态，即弹性模量和密度

|介质类型|横波波速|纵波波速|
|---|---|---|
|均匀、各向同性的固体介质中| $u_{固横} = \sqrt{\dfrac{G}{\rho}}$ | $u_{固纵} = \sqrt{\dfrac{E}{\rho}}$ |
|液体和气体| 只有容变弹性，因此只能传播与容变有关的弹性纵波 | $u_{纵} = \sqrt{\dfrac{K}{\rho}}$ |

根据已有实验，若将气体视为理想气体，则气体中的声速

$$ u_{声} = \sqrt{\frac{\gamma RT}{M}} $$

其中 $\gamma$ 为气体的比热容比， $M$ 为气体的摩尔质量， $R=8.31 J \cdot mol^{-1} \cdot K^{-1}$ 为普适气体常量， $T$ 为热力学温度

#### 绳的波速与绳张力的关系

在紧绷的柔软绳中，横波的波速为

$$ u_线 = \sqrt{\frac{F_T}{\rho_l}} \tag{181}$$

$F_T$ 表示绳的张力， $\rho_l$ 为绳的线密度

## 平面简谐波函数

选取距原点 $O$ 为 $x_0$ 处质点的相位作为参考

$x_0$ 处的振动方程为

$$ y_{x_0}(t) = A\cos(\omega t + \varphi) $$

得到这列波的波函数

$$ y(x, t) = A\cos\left[\omega\left(t \mp \frac{x-x_0}{u} \right) + \varphi\right] $$

其中，选取减号则对应波沿 $x$ 轴的正方向传播，选取加号则对应波沿 $x$ 轴的负方向传播。

这是容易理解的，因为 $ \Delta t = \dfrac{x-x_0}{u} $ 为波传播至点 $x=x_0$ 所用的时间，乘以角频率 $\omega$，也就是原点处质点相对于 $x=x_0$ 处所落后的相位.

对于横波,质点离开平衡位置的位移 $y$ 与波的传播方向 $x$ 轴垂直;而对于纵波,位移 $y$ 沿 $x$ 轴方向.

### 角频率与频率、周期的关系

$$ \omega = \frac{2\pi}{T} = 2\pi \nu $$

### 质元振动速度

介质中各质元的振动速度 $v$ 与波的传播速度 $u$ 具有不同的意义

振动速度

$$ v = \frac{\partial y}{\partial t} = -A\omega\sin\left[\omega t \mp \omega \omega\frac{x-x_0}{u} + \varphi\right] $$

## 机械波的能量 (P181)

在线密度为 $\rho_l$ 的绳索上有波函数为 $ y = A\cos(\omega t - \dfrac{x}{u}) $ 的一列简谐横波，取一个小质量元

### 质元动能

$$ \mathrm{d} E_k = \frac{1}{2} \, \rho_l \mathrm{d}x \, A^2\omega^2\sin^2\left(\omega t - \omega\dfrac{x}{u}\right) $$

### 质元势能

（省略一系列近似）

$$ \begin{aligned} \mathrm{d} E_p &= F_T \left(\frac{\mathrm{d}x}{\cos \theta}\right) - \mathrm{d}x) \\
& = F_T \frac{1-\cos \theta}{\cos \theta} \mathrm{d}x \\
& \approx F_T \, \frac{1}{2} \theta^2 \, \mathrm{d}x \\
& \approx F_T \, \frac{1}{2} \tan^2 \theta \, \mathrm{d}x \\
& = F_T \, \frac{1}{2} \left(\frac{\partial y}{\partial x}\right)^2 \, \mathrm{d}x \\
& = F_T \, \frac{1}{2} A^2\omega^2\frac{1}{u^2}\sin^2\left(\omega t - \omega \frac{x}{u}\right) \, \mathrm{d}x \\ \end{aligned}$$

由[绳的波速和绳张力的关系](#绳的波速与绳张力的关系)得

$$ \mathrm{d} E_p = F_T \, \frac{1}{2} A^2\omega^2\frac{\rho_l}{F_T}\sin^2\left(\omega t - \omega \frac{x}{u}\right) \, \mathrm{d}x = \mathrm{d} E_k $$

### 质元总机械能

$$ \mathrm{d} E = \mathrm{d} E_p + \mathrm{d} E_k = \rho_l \mathrm{d} x A^2\omega^2sin^2\left(\omega t - \omega \frac{x}{u}\right) $$

### 能量密度

绳索单位长度中的能量

$$ w(t) = \frac{\mathrm{d} E}{\mathrm{d}x} = \rho_l A^2\omega^2\sin^2\left(\omega t - \omega \frac{x}{u} \right) $$

质元的动能和势能与时间关系式是相同的，同相且大小相等

把一个周期内能量密度的平均值称为平均能量密度

$$ \bar{w} = \frac{1}{T}\int_0^T w(t) \mathrm{d}t =  \frac{1}{2}\rho_lA^2\omega^2 $$

### 能流和能流密度 (P184)

#### 能流

单位时间内垂直通过某一面积的能量叫做该面积的能流.

设在介质中垂直于波速 $u$ 的方向上取一面积 $S$ ,则在单位时间内通过该面的能量即能流为

$$ P = \iint_S wudS = wuS $$

取平均能量密度即

$$ \bar{P}=\bar{w}uS $$

#### 能流密度（波强）

垂直通过单位面积的平均能流叫做能流密度

$$ I = \frac{\bar{P}}{S} $$

## 惠更斯原理

波阵面上的没一点都可以看成是发射子波的波源,在其后的任意一个时刻,这些子波的包络面就形成一个新的波阵面.

### 折射定律

$$ n_1\sin i = n_2\sin \gamma $$

## 波的干涉 (P189)

两列波在 $P$ 点处的相位差

$$ y_1 = A_1 \cos \left(\omega t - \frac{2\pi r_1}{\lambda} + \varphi_1\right) $$

$$ y_2 = A_2 \cos \left(\omega t - \frac{2\pi r_2}{\lambda} + \variphi_2\right) $$

$$ \Delta \varphi = \frac{2\pi}{\lambda}(r_2-r_1)+(\varphi_1-\varphi_2) $$

当 $\Delta \varphi$ 为 $2\pi$ 的整数倍时,合成振动的振幅最大, $A_max=A_1+A_2$ ,两分振动相互加强

当 $\Delta \varphi$ 为 $\pi$ 的整数倍时,合成振动的振幅最小, $A_min=\|A_1 - A_2 \|$ ,两分振动相互减弱

特别地，当 $\varphi_1 = \varphi_2$ ,上述条件可简化为

$$ r_2-r_1=\pm k\lambda $$

时振动相互加强

$$ r_2-r_1=\pm(2k+1)\frac{\lambda}{2} $$

时振动相互减弱

## 驻波

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=56657153&bvid=BV1nx411o7HY&cid=98981345&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

两列振幅相同的相干波相向传播时叠加而成的波叫作驻波

设这两列波为

$$ y_1(x,t) = A\cos\left(\omega t-\omega\frac{x}{u}\right) $$

$$ y_2(x,t) = A\cos\left(\omega t - \omega\frac{x}{u}\right) $$

应用和差化积公式

$$ \cos A + \cos B = \cos\left(\frac{A+B}{2} + \frac{A-B}{2}\right) + \cos\left(\frac{A+B}{2} - \frac{A-B}{2}\right) = 2\cos\frac{A+B}{2}\cos\frac{A-B}{2} $$

该公式的记忆只要结合