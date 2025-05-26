---
layout: post
title: 工科数学分析-第二类曲线积分
date: 2025-05-22 16:06:55 +0800
categories: Learning
tags:
- calculus
---
# 背景

求一随空间变化的力 $ \vec{F} $ 在路径曲线 $ \Gamma $ 所做的功

## 向量场

由 $ \vec{F}(x, y, z) = M(x, y, z)\vec{i} + N(x, y, z)\vec{j} + Q(x, y, z)\vec{k} $ 可在空间中定义一个向量场

### 梯度场

类似的，对数值函数 $ f(x, y, z) $ 应用梯度算子，可以得到

$$ \nabla f = \frac{\partial f}{\partial x}\vec{i} + \frac{\partial f}{\partial y}\vec{j} + \frac{\partial f}{\partial z}\vec{k} $$

其也定义了一个向量场，称为梯度场，且 $ f $ 成为该向量场的势函数

#### 线积分基本定理

曲线 $ C $ 的起点为 $ A $ ，终点为 $ B $，且 $ \vec{F} = \nabla f $，则

$$ \int_C \vec{F} \cdot \mathrm{d}\vec{r} = f(B) - f(A) $$

#### 保守场

以下命题等价

1. 若 $ C $ 为任意闭曲线，向量场 $ \vec{F} $ 都满足 $ \oint_C \vec{F} \cdot \mathrm{d}\vec{r} = 0 $，则称 $\vec{F}$ 为一保守场
2. $ \vec{F} $ 的曲线积分与路径无关，则$\vec{F}$为保守场
3. $ \vec{F} $ 是梯度场，则$\vec{F}$为保守场
4. $ \vec{F} = P\vec{i} + Q\vec{j} $，在场所定义的区域内有， $ \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} $

# 第二类曲线积分的计算

$$ \vec{F}(x, y, z) = M(x, y, z)\vec{i} + N(x, y, z)\vec{j} + Q(x, y, z)\vec{k} $$

$$ \vec{e}_T = (\cos \alpha, \cos \beta, \cos \gamma) $$

$$ \begin{aligned} W & = \int_\Gamma \vec{F} \cdot \vec{e}_T \mathrm{d}s \\
& = \int_\Gamma \vec{F} \cdot \mathrm{d}s \\
& = \int_a^b \vec{F} \frac{\mathrm{d}r}{\mathrm{d}t} \mathrm{d}t \\
& = \int_a^b (Mx^\prime(t) + Ny^\prime(t) + Qz^\prime(t)) \mathrm{d}t \\
& = \int_C Mdx + Ndy + Qdz \\ \end{aligned} $$