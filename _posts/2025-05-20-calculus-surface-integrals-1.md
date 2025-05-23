---
layout: post
title: 工科数学分析-第一类曲面积分
date: 2025-05-20 14:49:45 +0800
categories: Learning
---
# 背景

质元通过密度函数 $ \delta(x,y,z) $ 分布在空间曲面上，计算曲面的质量。

# 前置

## 曲面的方程表示

显式方程

$$ z = f(x,y) $$

隐式方程

$$ F(x,y,z)=c $$

参数向量形式

$$ \vec{r}(u,v) = f(u,v)\vec{i} + g(u,v)\vec{j} + h(u,v)\vec{k} $$

即参数方程

$$ x = f(u, v), y = g(u,v), z = h(u,v) $$

## 正则曲面

对于以参数向量形式表出的平面  $ \vec{r}(u,v) $，若满足以下条件，则称其为正则曲面

1. $$ \forall u, v \in \mathbb{D}, \vec{r}_u \times \vec{r}_v \neq 0 $$
2. $\vec{r}_u$ 与 $\vec{r}_v $ 线性无关

从而，正则曲面的切平面恒存在且变化连续

假定以下所讨论的曲面都为正则曲面

## 曲面的面积

### 参数向量表出的曲面

用各方向的方向导数的外积近似，即很小的一部分切平面

$$ \Delta \sigma \approx |\Delta u\vec{r}_u \times \Delta v\vec{r}_v| = |\vec{r}_u \times \vec{r}_v|\Delta u \Delta v $$

所以得到面积微元

$$ \mathrm{d}\sigma = |\vec{r}_u \times \vec{r}_v|\mathrm{d}u\mathrm{d}v $$

于是，曲面的面积即为

$$ S = \iint_{\mathbb{R}} \mathrm{d}\sigma = \iint_{\mathbb{R}} |\vec{r}_u \times \vec{r}_v|\mathrm{d}u\mathrm{d}v $$

### 隐式曲面

对于隐式曲面 $ F(x, y, z) = c $，由隐函数存在定理可设 $ z = h(x, y) $，得到其参数向量形式 $ \vec{r}(x,y) = u\vec{i} + v\vec{j} + h(u,v)\vec{k} $

不妨设曲面的投影面在 $xy$ 平面上

于是 

$$ \vec{r}_u = \vec{i} + \frac{\partial h}{\partial u}\vec{k} $$

$$ \vec{r}_v = \vec{j} + \frac{\partial h}{\partial v}\vec{k} $$

$$ \vec{r}_u \times \vec{r}_v = \frac{\partial h}{\partial u} \vec{i} - \frac{\partial h}{\partial v}\vec{j} + \vec{k} $$

又由于 $ \dfrac{\partial h}{\partial u} = -\dfrac{F_x}{F_z}, \dfrac{\partial h}{\partial v} = -\dfrac{F_y}{F_z} $，所以

$$ \vec{r} \times \vec{r}_v = \frac{\nabla F}{F_z} = \frac{\nabla F}{\nabla F \cdot \vec{k}} $$

所以曲面的面积即为

$$ S = \iint_{\mathbb{R}} \frac{|\nabla F|}{|\nabla F \cdot \vec{k}|} \mathrm{d}x\mathrm{d}y $$

### 显式曲面

推导从略

$$ S = \iint_{\mathbb{R}} \sqrt{f_x^2 + f_y^2 + 1}\mathrm{d}x\mathrm{d}y $$

# 结

我们已经解决了起始的问题

$$ M = \iint_{\mathbb{R}} \delta(\vec{r}) \mathrm{d}\sigma $$