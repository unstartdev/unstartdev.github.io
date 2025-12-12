---
layout: post
title: 积分变换-拉普拉斯变换
date: 2025-11-28 21:15:14 +0800
category: Learning
tags:
- Integral Transform
---
* toc
{:toc}

## 拉普拉斯变换

定义

$$ D(f) = [0, +\infty), Ran(f) \in \R, s = \beta +\mathrm{j}\omega$$

$$ F(s) = \mathscr{L} \left[ f(t) \right] = \int_0^{+\infty} f(t) \mathrm{e}^{-st} \mathrm{d} t $$

为 $F(s)$ 的**拉普拉斯变换**，并仿照傅里叶变换作出逆变换、象原函数、象函数的定义

$$ f(t) = \mathscr{L}^{-1} \left[ F(s) \right] = \frac{1}{2\pi\mathrm{j}} \int_{\beta - \mathrm{j}\infty}^{\beta + \mathrm{j}\infty} F(s)\mathrm{e}^{st} \mathrm{d}s $$

称为反演积分公式，积分为**反演积分**

$f(t)$ 和 $F(s)$ 构成**拉普拉斯变换对**

$$ f(t) \leftrightarrow F(s) $$

傅里叶变换与拉普拉斯变换的关系

$$ F(s) = \mathscr{L} \left[ f(t) \right] = \mathscr{F}\left[ f(t) \mathrm{e}^{-\beta t} H(t) \right] $$

## 拉普拉斯变换的存在定理

$f(t)$ 需要满足

1. $ t \geq 0 $ 上分段连续
2. $ \lvert f(t) \rvert \leq M \mathrm{e}^{ct}, t \in [0, +\infty] $

$$

F(s) = \int_0^{+\infty} f(t) \mathrm{e}^{-st} \mathrm{d}t

$$

在平面 $\Re (s) \gt 0$ 存在，且是关于 $s$ 的解析函数

### 拉式变换对

$$
\mathrm{e}^{at} \leftrightarrow \frac{1}{s-a}
$$

$$
\sin at \leftrightarrow \frac{a}{s^2+a^2} \\ \ \\
\cos at \leftrightarrow \frac{s}{s^2+a^2}
$$

$$
\delta(t-a)  \leftrightarrow e^{-sa} \\
\delta(t) \leftrightarrow 1 \\
a \geq 0
$$

$$
t^m \leftrightarrow \frac{\Gamma (m+1)}{s^{m+1}}, \Re s \gt 0
$$

## 拉普拉斯变换的性质

### 线性性

### 相似性质

$$ \forall a \gt 0, \\

\mathscr{L} \left[ f(at) \right] = \frac{1}{a} F(\frac{s}{a})

$$

### 微分性质

#### 导数的象函数

$$ \mathscr{L} \left[ f^\prime (t) \right] = sF(s) - f(0) $$

并且

$$ \mathscr{L} \left[ f^{(n)}(t) \right] = s^nF(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \cdots - f^{(n-1)}(0) $$

#### 象函数的导数

$$ \mathscr{L} \left[ tf(t) \right] = -F^\prime(s) $$

并且

$$ \mathscr{L} \left[ t^n f(t) \right] = (-1)^n F^{(n)}(s) $$

### 积分性质

#### 积分的象函数

$$ \mathscr{L} \left[ \int_0^t f(t) \mathrm{d} t \right] = \frac{1}{s} F(t) $$

并且

$$ \mathscr{L} \left[ \int_0^t \mathrm{d} t \int_0^t f(t) \mathrm{d} t \right] = \frac{1}{s^2} F(t) \\ \ldots $$

#### 象函数的积分

$$ \mathscr{L} \left[ f(t) / t \right] = \int_s^\infty F(s) \mathrm{d} s $$

并且

$$ \mathscr{L} \left[ f(t) / t^2 \right] = \int_s^\infty \mathrm{d} s \int_s^\infty F(s) \mathrm{d} s \\ \ldots $$

### 位移性质

$$ \mathscr{L} \left[ \mathrm{e}^{\mathrm{j} a} f(t) \right] = F(s - a) $$

### 延迟性质

$$ \mathscr{L} \left[ f(t - \tau)H(t - \tau) \right] = \mathrm{e}^{-s\tau} F(s - \tau) $$

### 卷积与卷积定理

$$ f(t) * g(t) = \int_0^\infty f(\tau) g(t - \tau)  \mathrm{d} \tau $$

$$ \mathscr{L} \left[ f(t) * g(t) \right] = F(s)G(s) $$

## 逆变换

### 反演积分

### 展开定理

$$ f(t) = \sum_{k = 1}^n \text{Res} \left( F(s)\mathrm{e}^{st}, s_k \right) $$

以上需要满足 $ s \to \infty, \  F(s) \to 0 $

## 应用

### 解微分方程

给出一系列初值的问题，进行正变换求解后再对解进行逆变换

### 