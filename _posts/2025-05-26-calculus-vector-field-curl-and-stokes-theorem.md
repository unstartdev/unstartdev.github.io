---
layout: post
title: 工科数学分析-向量场的旋度与斯托克斯公式
date: 2025-05-26 19:22:52 +0800
categories: Learning
tags:
- calculus
---
# 旋度

## 从一条曲线上的质点开始

给定流速场 $ \vec{F}(x,y,z) $ ,空间直线 $L$ ,考察流速场在 $L$ 上任意一点的流速场的流体质点是否有沿曲线$L$运动的趋势,设 $\mathrm{d}\vec{l}$ 为与流速场切向方向相同的向量，那么考察

$$ \vec{F} \cdot \mathrm{d}\vec{l} = \|\vec{F}\|\cos<\vec{F}, \mathrm{d}\vec{l}> $$

的符号,若为正号则说明流体质点有沿着曲线 $L$ 正向运动的趋势,若为负号,则说明流体质点有沿着曲线 $L$ 负向运动的趋势

### 环量

设 $\vec{F}(x,y,z)$ 是有界开区域 $\Omega$ 内的一个向量场, $L$ 是 $\Omega$ 内一条分段光滑的有向闭曲线. 称曲线积分

$$ \oint_L \vec{F} \cdot \mathrm{d}\vec{l} $$

为向量场 $ \vec{F} $ 按所取正方向沿曲线 $L$ 的**环量**

## 方向不在这条曲线上了

### 方向旋量

在 $\Omega$ 内取定一点 $M$, 在点 $M$ 处取定一个方向 $\vec{n}$ ,过点 $M$ 作一微小曲面 $\Delta S$ ,它以 $\vec{n}$ 为其在点 $M$ 处的法向量. $\Delta S$ 也表示曲面的面积,同时曲面的边界 $\Delta L$ 的正向与法向量 $\vec{n}$ 构成右手系.

那么称

$$ h(M) = \lim_{\Delta S \to M} \frac{\oint_{\Delta L} \vec{F} \cdot \mathrm{d} \vec{l}}{\Delta S} $$

为向量场 $\vec{F}$ 在点 $M$ 绕 $\vec{n}$ 方向的**方向旋量**(或**环量面密度**)

### 旋度

旋度是一个向量,它的方向是方向旋量最大的那个方向,大小等于绕该方向的方向旋量

记作 $\mathrm{rot}\vec{F}$ 或 $\mathrm{curl}\vec{F}$

## 给它放到坐标轴上

### 对z轴的旋度

考虑在xy平面上的场 $\vec{F}(x,y) = P(x,y)\vec{i} + Q(x,y)\vec{j}$

在平面上取一个小矩形区域其长和宽分别为 $\Delta x$,$\Delta y$

其上边缘和下边缘对环流的贡献

$$ \vec{F}(x, y+\Delta y) \cdot (-\vec{i}) \Delta x - \vec{F}(x, y) \cdot \vec{i} \Delta x = -[P(x,y+\Delta y) - P(x, y)]\Delta x \approx -\frac{\partial P}{\partial y}\Delta y\Delta x $$

其左边缘和右边缘对环流的贡献

$$ \vec{F}(x + \Delta x, y) \cdot \vec{j} \Delta y + \vec{F}(x, y) \cdot \vec{j} \Delta y = [Q(x + \Delta x, y) + Q(x, y)]\Delta y \approx \frac{\partial Q}{\partial x}\Delta x\Delta y $$

即得

$$ \lim_{\Delta x \Delta y \to 0} = \frac{\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\Delta x \Delta y}{\Delta x \Delta y} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} $$

由于这是在二维平面上的场，其旋度方向只能在z轴方向上，于是以上式子结果即为旋度在z轴上的分量

同时，我们发现这正是[格林公式]({% post_url 2025-05-26-calculus-green-theorem %})二重积分中的被积函数，即

$$ \oint_L \vec{F} \cdot \mathrm{d} \vec{s} = \oint_L P\mathrm{d}x + Q\mathrm{d}y = \iint_D \mathrm{rot}\vec{F} \cdot \vec{k} \mathrm{d}x\mathrm{d}y $$

### 空间向量场的旋度

实际上,将空间向量场 $\vec{F}(x,y,z) = P(x,y,z)\vec{i} + Q(x,y,z)\vec{j} + R(x,y,z)\vec{k}$ (投影到各个坐标平面后,其在某点的旋度的各坐标分量可以由上面的过程给出（证明略）,于是

$$ \mathrm{rot} \vec{F}(x,y,z) = \nabla \times \vec{F} = \begin{pmatrix} \vec{i} & \vec{j} & \vec{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ x & y & z \\ \end{pmatrix} $$

# 斯托克斯公式

在正则有向曲面 $S$ 的区域中定义有向量场 $\vec{F}(x,y,z) = P(x,y,z)\mathrm{d}x + Q(x,y,z)\mathrm{d}y + R(x,y,z)\mathrm{d}z$,$P$,$Q$,$R$ 均具有一阶连续偏导数,设 $S$ 的边界曲线为 $L$

$$ \oint_L P\mathrm{d}x + Q\mathrm{d}y + R\mathrm{d}z = \iint_S \mathrm{rot}\vec{F} \mathrm{d}\vec{S} = \iint_S \nabla \times \vec{F} \mathrm{d}\vec{S} $$

引入旋度的计算公式后，格林公式也可对应写为（以下记号继续使用[格林公式]({% post_url 2025-05-26-calculus-green-theorem %})中的条件）

$$ \oint_L P\mathrm{d}x + Q\mathrm{d}y = \iint_D \mathrm{rot}\vec{F} \cdot \vec{k} \mathrm{d} x \mathrm{d}y = \iint_D \nabla \times \vec{F} \cdot \vec{k} \mathrm{d}x \mathrm{d}y $$