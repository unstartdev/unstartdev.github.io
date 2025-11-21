---
layout: post
title: 复变函数-留数理论
date: 2025-11-19 00:54:38 +0800
category: Learning
tags:
- Complex Analysis
---

## 留数的定义

$z_0$ 是函数 $f(z)$ 的孤立奇点，即 $f(z)$ 在某个圆环 $0 < \|z - z_0 \| < R$ 解析，$C: \| z-z_0 \| = r < R$ 则

$$ \text{Res} (f(z), z_0) = \text{Res} (f(z)) = \frac{1}{2 \pi \mathrm{i}} \oint_C f(z) \mathrm{d} z $$

## 留数的计算

### $ z_0 $ 为 $f(z)$ 的一阶极点

$$ \text{Res} (f(z), z_0) = \lim_{z \to z_0} (z-z_0) f(z) $$

### $ f(z) = P(z) / Q(z) $，$P(z)$ 与 $Q(z)$ 在 $z_0$ 解析，$P(z_0) \neq 0$ ，$z_0$ 是 $Q(z)$ 的一阶零点

$$ \text{Res} (f(z), z_0) = \frac{P(z_0)}{Q^\prime (z_0)} $$

### $z_0$ 是 $f(z)$ 的 $k \ (k>1)$ 阶极点

$$ \text{Res} (f(z), z_0) = \frac{1}{(k-1)!}\lim_{z \to z_0} \frac{\mathrm{d}^{k-1} [(z-z_0)^k f(z)]}{\mathrm{d} z^{k-1}} $$

## 留数定理

若 $f(z)$ 在C围成的区域D中有有限孤立奇点，则

$$ \oint_C f(z) \mathrm{d} z = 2\pi \mathrm{i} \sum_{k=1}^n \text{Res} (f(z), z_k) $$

## 无穷远点的留数

$f(z)$ 在无穷远点的邻域 $0< \| z \| < \infty$ 内解析

$$ \text{Res} (f(z), \infty) = \frac{1}{2\pi \mathrm{i}}\oint_{C^{-}} f(z) \mathrm{d} z = - c^{-1} $$

当 $f(z)$ 以 $z=\infty$ 为可去奇点时，也可能有 $\text{Res} (f(z), \infty) \neq 0$

比如

$$ \text{Res} (f(1/z), \infty) = -1 $$

### 有限点留数与无穷远点留数的关系

$$ \sum_{k=1}^n \text{Res} (f(z), z_k) = - \text{Res} (f(z), \infty) $$

当有限点较多时，应用该定理可简化计算（引入的目的）

利用 $1/z$ 的性质

$$ \text{Res} (f(z), \infty) = - \text{Res} (\frac{1}{z^2}f(\frac{1}{z}), 0) $$

如求在 $\infty$ 的洛朗展开式很困难，则应用该式子

## 留数定理与实积分

### $\int_0^{2\pi} R(\cos \theta, \sin \theta) \mathrm{d} \theta$

普通方法：变换 $u = \tan (\theta / 2)$

化为解析函数 

$$\mathrm{d} z = \mathrm{i} \mathrm{e}^{\mathrm{i} \theta} \mathrm{d} \theta \\
\cos \theta = \frac{1}{2} \left(z + \frac{1}{z}\right) \\
\sin \theta = \frac{1}{2i} \left(z - \frac{1}{z}\right) \\
\begin{aligned}
& \int_0^{2\pi} R(\cos \theta, \sin \theta) \mathrm{d} \theta \\
& = \oint_{\| z \| = 1} R\left(\frac{z^2 + 1}{2z}, \frac{z^2 - 1}{2z}\right)\frac{1}{\mathrm{i} z}\mathrm{d} z \\
& := \oint_{\| z \| = 1} f(z) \mathrm{d} z
\end{aligned}
$$

### $\int_{-\infty}^{+\infty} R(x) \mathrm{d} x$

$R(x)$ 为有理分式，分母在实轴上不为0, 分母比分子至少高两次

步骤

1. 选择在上半平面只有有限个孤立奇点的解析函数 $g(z)$ ($g(x) = R(x) \  \text{or} \  \Re g(x) = R(x) \  \text{or} \  \Im g(x) = R(x) $)
2. 选取积分闭路，$\Gamma_R: z=R\mathrm{e}^{\mathrm{i}\theta} (0\leq\theta\leq\pi)$，围线 $C_R: \Gamma_R \cup [-R, R]$，$R$ 足够大，使 $C_R$ 围住所有奇点
3. $\int_{-R}^{R} R(x) \mathrm{d} x + \int_{\Gamma_R} g(z) \mathrm{d} z = 2\pi\mathrm{i} \sum_{k=1}^n \text{Res} \left( g(z), z_k \right)$
4. 计算 $\lim_{R\to\infty} \int_{\Gamma_R} g(z) \mathrm{d} z$

#### 计算 $\int_{\Gamma_R} g(z) \mathrm{d} z$ 有用的引理

##### 引理1 $g(z)$ 在 $C_R$上连续，$C_R$为圆心在原点处圆的一段弧

$$ \lim_{z \in C_R, R \to \infty} zg(z) = \lambda \implies \lim_{R \to \infty} \int_{C_R} g(z) \mathrm{d} z = \mathrm{i}(\theta_2 - \theta_1)\lambda $$

##### 引理2 $g(z)$ 在圆弧 $C_r$ 对应的扇形区域上解析

$$ \lim_{z \in C_r, r \to 0} (z-a)g(z) = \lambda \implies \lim_{r \to 0}\int_{C_r} g(z)\mathrm{d}z = \mathrm{i}(\theta_2 - \theta_1)\lambda $$

$$ \theta_1 \leq \arg z \leq \theta_2 $$

##### 引理3 $g(z)$ 在以原点为圆心的半圆周 $C_R, \forall R \geq r_0 \gt 0$ 上连续

$$ \lim_{z \in C_R, R \to \infty} g(z) = 0 \implies \lim_{R\to\infty}\int_{C_R} g(z)\mathrm{e}^{\mathrm{i}zm}\mathrm{d}z = 0, \forall m \gt 0$$

### $\int_{-\infty}^{+\infty} \mathrm{e}^{\mathrm{i}x}f(x)\mathrm{d}x$

与前一类型相同。