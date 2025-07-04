---
layout: post
title: 大学物理-1质点运动学
date: 2025-07-04 17:57:40 +0800
categories: Learning
tags:
- University Physics
---
* toc
{:toc}

# 位置矢量

aka 位矢、矢径

$$ \vec{r} = x\vec{i} + y\vec{j} + z\vec{k}, \\ \Vert \vec{r} \Vert = r = \sqrt{x^2 + y^2 + z^2} $$

# 运动函数

$$ \vec{r}(t) = x(t)\vec{i} + y(t)\vec{j} + z(t)\vec{k} $$

# 位移

矢量

$$ \Delta\vec{r} = \vec{r}(t+\Delta t) - \vec{r}(t) $$

# 路程

标量

即运动轨迹长

有以下关系:

$$ \Delta s \neq \Vert \Delta \vec{r} \Vert, \\ \text{but,} \\ \mathrm{d}s = \Vert \mathrm{d} \vec{r} \Vert $$

$$ \Vert \Delta \vec{r} \Vert \neq \Delta r, \Vert \mathrm{d} \vec{r} \Vert \neq \mathrm{d} r $$

# 速度

## 平均速度

$$ \bar{\vec{v}} = \frac{\Delta \vec{r}}{\Delta t} $$

## 瞬时速度

$$ \vec{v} = \lim_{\Delta t \to 0} \frac{\Delta \vec{r}}{\Delta t} = \frac{\mathrm{d}\vec{r}}{\mathrm{d} t} $$

# 速率

## 平均**速率**

$$ \bar{v} = \frac{\Delta s}{\Delta t} $$

## 瞬时**速率**

$$ v = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t} = \frac{\mathrm{d} s}{\mathrm{d} t} $$

# 直线运动

只有一维,所有的向量可以当作标量处理

## 速度

$$ v = \frac{\mathrm{d}x}{\mathrm{d}t} $$

## 加速度

$$ a = \frac{\mathrm{d}v}{\mathrm{d}t} = \frac{\mathrm{d}^2 x}{\mathrm{d}t^2} $$

# 圆周运动

## 角速度

由于

$$ s = \theta \cdot R $$

故

$$ \mathrm{d} s = R\mathrm{d}\theta $$

于是

$$ \omega = \lim_{\Delta t \to 0} \frac{\Delta \theta}{\Delta t} = \frac{\mathrm{d}\theta}{\mathrm{d}t} = \frac{1}{R}\frac{\mathrm{d}s}{\mathrm{d}t} = \frac{v}{R} $$

亦作

$$ v = \omega R $$

角速度是矢量方向为速度和径矢的叉乘方向,在刚体运动一节将讲述为什么是这样

## 角加速度

仿照加速度的定义我们有

$$ \alpha = \frac{\mathrm{d}\omega}{\mathrm{d}t} = \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2} $$

## 自然坐标系

在运动轨道上任一点建立正交坐标系,其一轴沿轨道的切线方向,正方向为运动的前进方向;另一轴沿轨道的法线方向,正方向指向轨道**内凹**的一侧

我们定义以下符号

- 切向单位矢量 $\vec{\tau}$
- 法向单位矢量 $\vec{n}$

显然有

$$ \vec{v} = v\vec{\tau} $$

$$ \vec{a} = \frac{\mathrm{d}\vec{v}}{\mathrm{d}t} = \frac{\mathrm{v}}{\mathrm{d}t}\vec{\tau} + v \frac{\mathrm{d}\vec{\tau}}{\mathrm{d}t} $$

这里运用了向量导数的运算法则

### 利用自然坐标系分析圆周运动

由熟知的近似 $ s \approx \theta \cdot r $

$$ \mathrm{d} \vec{\tau} = \mathrm{d} \theta \vec{n} $$

于是

$$ \frac{\mathrm{d}\vec{\tau}}{\mathrm{d}t} = \frac{\mathrm{d}\theta}{\mathrm{d}t}\vec{n} = \omega\vec{n} = \frac{v}{R}\vec{n} $$

合成的速率变化为

$$ \begin{aligned} \vec{a} & = \frac{\mathrm{d}\vec{v}}{\mathrm{d}t} \\
& = \frac{\mathrm{d}v}{\mathrm{d}t}\vec{\tau} + v\frac{\mathrm{d}\vec{\tau}}{\mathrm{d}t} \\
& = \frac{\mathrm{d}v}{\mathrm{d}t}v\vec{\tau} + \frac{v^2}{R}\vec{n}
\end{aligned} $$

## 角量和线量的关系

由 $ v = R\omega $ 可得

$$ a_\tau = \frac{\mathrm{d}v}{\mathrm{d}t} = R\alpha $$

$$ a_n = \frac{v^2}{R} = R\omega^2 $$

# 坐标系变换

## 伽利略变换

相对做匀速直线运动时

$$
\begin{cases}
x = x^\prime + vt
y^\prime = y
z^\prime = z
t^\prime = t
\end{cases}
$$

$$ \vec{r} = \vec{r}^\prime + \vec{r}_{O^\prime O}^\prime $$

### 绝对速度

$$ \vec{v}_S = \frac{\mathrm{d}\vec{r}}{\mathrm{d}t} $$

物体相对于S系（原坐标系）的速度

### 牵连速度

$$ \vec{v}_{O^\prime O} = \frac{\mathrm{d}\vec{r}_{O^\prime O}}{\mathrm{d}t} $$

$S^\prime$ 系相对于 S 系的速度

### 相对速度

$$ \vec{v}_{S^\prime} = \frac{\mathrm{d}\vec{r}^\prime}{\mathrm{d}t} $$

物体相对于 $S^\prime$ 系的速度

### 速度变换

$$ \vec{v}_S = \vec{v}_{S^\prime} + \vec{v}_{O^\prime O} $$

$$ \vec{a}_S = \vec{a}_{S^\prime} + \vec{a}_{O^\prime O} $$