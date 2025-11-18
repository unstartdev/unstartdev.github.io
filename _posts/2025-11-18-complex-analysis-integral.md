---
layout: post
title: 复变函数-积分的计算
date: 2025-11-18 23:04:06 +0800
category: Learning
tags:
- Complex Analysis
---
* toc
{:toc}

## 一个重要的积分公式

$C$ 是以 $z_0$ 为中心、$r>0$为半径的正向圆周，$n \in \mathbb{Z}$

$$ \oint_C \frac{\mathrm{d}z}{(z-z_0)^{n+1}} = \begin{cases}
2\pi\mathrm{i}, & n = 0 \\
0, & n \neq 0
\end{cases}
$$


## 柯西-古萨基本定理

$f(z)$ 在以 $C$ 为边界的有界区域 $D$ 解析，在闭区域 $\bar{D}$ 上连续，则

$$ \oint_{C} f(z)\mathrm{d}z=0 $$

## 复合闭路定理

$D$ 是多连通区域，边界为复围线 $$ C = C_0 +C_1^{-} + \cdots C_n^{-} $$且$$f(z)$$在区域中满足柯西-古萨基本定理的条件，则

$$ \oint_{C_0} f(z) \mathrm{d} z = \oint_{C_0} f(z) \mathrm{d} z + \oint_{C_1} f(z) \mathrm{d} z + \cdots \oint_{C_n} f(z) \mathrm{d} z $$

一般的，区域最外边界的绕圈积分等于区域所有内部边界的绕圈积分之和

### 闭路变形定理

在区域 $D$ 内解析的函数 $f(z)$ 沿闭曲线的积分，不因闭曲线在区域内连续变形而改变它的值

### 柯西积分公式

$D$ 是以有限条简单闭曲线 $C$ 为边界的有界区域，$f(z)$ 在 $\bar{D}$ 上解析，则对 $D$ 内任意一点

$$ f(z_0) = \frac{1}{2\pi\mathrm{i}} \oint_C \frac{f(z)}{z-z_0} \mathrm{d} z $$

#### 解析函数的高阶导数公式

$$ f^{(n)}(z_0) = \frac{1}{2 \pi \mathrm{i}} \oint_C \frac{f(z)}{(z-z_0)^{n+1}} \mathrm{d} z$$

##### 柯西不等式

$f(z)$ 为区域 $D$ 上的解析函数，圆周$C: \| z-z_0 \| = R$及其内部含于区域内，设 $M(R) = \underset{z \in C}{\text{max}} \| f(z) \|$


$$ \| f^{(n)}(z_0) \| \leq \frac{n! M(R)}{R^n} $$

使用高阶导数公式和 $$ \| \frac{f(z)}{(z-z_0)^{n+1}} \| \leq M(R) / R^{n+1} $$ 即可证明上述不等式

###### 刘维尔定理、代数基本定理

若 $f(z)$ 在复平面上解析且有界，则 $f(z)$ 是常数.

应用柯西不等式

$$ \| f^\prime(z_0) \| \leq \frac{n! M(R)}{R} \to 0 (R \to +\infty) $$

由此可以给出代数基本定理：在复平面上，n次多项式至少有一个零点。（反证法，考虑 $p(z)$ 与 $1/p(z)$）

## 莫勒拉定理

*古-柯定理的逆定理*

$f(z)$ 在单连通区域 $D$ 连续，如果对 $D$ 内任意一条围线 $C$ ，有 $\oint_C f(z) \mathrm{d} z = 0$ ，则 $f(z)$ 在区域内解析
