---
layout: post
title: 工科数学分析-第二类曲面积分
date: 2025-05-24 13:18:59 +0800
categories: Learning
tags:
- calculus
---
# 背景

空间区域 $\Omega$ 内布满某种液体，其流速为 $\vec{v}(x,y,z)$ ，$U$ 是 $\Omega$ 内的的一个光滑曲面，求单位时间内流体通过曲面 $S$ 的流量

或者说曲面 $U$ 在流量场 $\vec{v}$ 中的积分

以下提及的所有曲面均为**双侧曲面**，即可以分出两侧的曲面，一个反例是我们熟知的**莫比乌斯带**

# 平面的方向

对于用参数向量形式表示的曲面 $ \vec{r}(u,v) = f(u,v)\vec{i} + g(u,v)\vec{j} $

它的单位法向量有两个方向 $ \pm \dfrac{\vec{r}_u \times \vec{r}_v}{\|\vec{r}_u \times \vec{r}_v\|} $

可以指定其中的任意一个方向作为正方向，则另一个方向为负方向

对于封闭曲面（如球面） $ \vec{r}_u \times \vec{r}_v $ 的方向指向曲面的外侧，对于显式曲面 $ z = f(x,y) $ 则指向曲面的上侧（与z轴正方向夹角为锐角）

# 流量微元

在单位时间内通过曲面 $U$ 的流量即为以 $S$ 为底，$\|\vec{v}\|$ 为斜高的斜柱体的体积

$$ \Delta q \approx |\vec{v}|\cos <\vec{v}, \vec{e}_n> \Delta S $$

于是

$$ \mathrm{d}q = \vec{v} \cdot \vec{e}_n \mathrm{d}S = \frac{\vec{v} \cdot (\vec{r}_u \times \vec{r}_v)}{|\vec{r}_u \times \vec{r}_v|} \mathrm{d}S = \vec{v} \cdot \mathrm{d} \vec{S}$$

# 结

问题已经得到了解决，通过 $U$ 的流量即为

$$ \begin{aligned} 
q &= \iint_U \mathrm{d}q \\
&= \iint_U \vec{v} \cdot \mathrm{d} \vec{S} \\
&= \iint_U \frac{\vec{v} \cdot (\vec{r}_u \times \vec{r}_v)}{|\vec{r}_u \times \vec{r}_v|}\mathrm{d}S \\
&= \iint_U (P\cos \alpha + Q \cos \beta + R\cos \gamma)\mathrm{d}S \\
&= \iint_U P\mathrm{d}y\mathrm{d}x + Q\mathrm{d}z\mathrm{d}x + R\mathrm{d}x\mathrm{d}y
\end{aligned}$$

进一步按第一类曲面积分的方法将 $ \mathrm{d}S $ 替换即可计算

特别地，若 $U$ 为一等值面 $g(x,y,z)=CONST$

则

$$ \vec{n} = \pm \frac{\nabla g}{|\nabla g|} $$

$$ q = \iint_U \vec{v} \cdot \vec{n} \mathrm{d}S = \iint_U (\vec{v} \cdot \frac{\nabla g}{|\nabla g|})\frac{|\nabla g|}{|\nabla g \cdot \vec{k}|} \mathrm{d}x\mathrm{d}y $$

