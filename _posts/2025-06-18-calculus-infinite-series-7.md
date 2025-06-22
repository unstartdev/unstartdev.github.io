---
layout: post
title: 工科数学分析-10.7周期函数的傅里叶级数
date: 2025-06-18 17:41:13 +0800
categories: Learning
tags:
- calculus
---
# 三角级数

形如

$$ \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos n\omega x + b_n \sin n\omega x) $$

$a_0, a_n, b_n$ 称为**系数**,$\omega$称为**圆频率**

# 基本三角函数系

## 函数的内积

定义在 $C[-\pi, \pi]$ 上的两个函数 $f(x)$ 和 $g(x)$ 定义它们的**内积**为

$$ (f(x), g(x)) = \int_{-\pi}^\pi f(x)g(x) \mathrm{d}x $$

### 正交

$$ (f(x), g(x)) = 0 $$

# 傅里叶系数

$f(x)$ 周期为 $2\pi$ 在 $[-\pi, \pi]$ 可积

$$ f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos nx + b_n \sin nx), -\pi \leq x \leq \pi $$

其中 

$$ a_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\cos nx \mathrm{d}x $$

$$ b_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\sin nx \mathrm{d}x $$

该级数称为 $f(x)$ 的**傅里叶级数**

数列 $a_0, a_n, b_n$ 称为 $f(x)$ 的**傅里叶系数**

# 收敛定理

## 逐段单调

若 $f(x)$ 在区间 $[a,b]$ 上只有有限个单调区间,则称 $f(x)$ 在区间 $[a,b]$ 上**逐段单调**

## 狄利克雷收敛定理

设 $f(x)$ 的周期为 $2\pi$

若它满足

(1) 在一个周期内连续或只有有限个第一类间断点

> **第一类间断点:** 左右极限都存在的间断点

(2) 在一个周期内逐段单调

则它的**傅里叶级数收敛**,且

当 $x$ 是 $f(x)$ 的连续点时,级数收敛于 $f(x)$;

当 $x$ 是 $f(x)$ 的间断点时,级数收敛于 $\dfrac{1}{2} [f(x^-) + f(x^+)]$

# 正弦级数和余弦级数

由**奇函数和偶函数**的性质可推出它们的傅里叶级数具有以下性质:

设 $f(x)$ 周期为 $2\pi$

(1) 若 $f(x)$ 为奇函数,则 $f(x)\cos nx$ 也是奇函数,故

$$ a_n = \frac{1}{pi} \int_{-\pi}^\pi \cos nx \mathrm{d} x = 0 $$

可知它的傅里叶级数**只含正弦项**,故称为**正弦级数**

$$ f(x) \sim \sum_{n=1}^\infty b_n \sin nx $$

(2) 若 $f(x)$ 为偶函数,则 $f(x)\sin nx$ 为奇函数,故

$$ b_n = \frac{1}{\pi} \int_{-\pi}^\pi \sin nx \mathrm{d} x = 0 $$

可知它的傅里叶级数**只含余弦项**,故称为**余弦级数**

$$ f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos nx $$