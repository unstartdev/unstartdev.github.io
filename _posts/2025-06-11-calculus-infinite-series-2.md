---
layout: post
title: 工科数学分析-10.2正项级数
date: 2025-06-11 16:29:06 +0800
categories: Learning
tags:
- calculus
---
* toc
{:toc}

# 有界性准则

正项级数收敛的充分必要条件是它的部分和序列有上界。

# 正项数列收敛的判别法

## 比较判别法

设 $\sum_{n=1}^\infty a_n$ ， $\sum_{n=1}^\infty b_n$ ， $\sum_{n=1}^\infty c_n$ 都是正项数列。

如果存在一个 $N$ 使得

$$ \forall n \gt N, b_n \leq a_n \leq c_n $$

(a) 如果 $\sum_{n=1}^\infty c_n$ 收敛，那么 $\sum_{n=1}^\infty a_n$ 也收敛

(b) 如果 $\sum{n=1}^\infty b_n$ 发散，那么 $\sum_{n=1}^\infty a_n$ 也发散

证明使用不等式进行相乘

### 比较判别法的极限形式

设 $\sum_{n=1}^\infty a_n$ ， $\sum_{n=1}^\infty b_n$ 是两个正项级数，若 $\lim_{n \to \infty} \dfrac{a_n}{b_n} = l$

(i). 若 $0 \lt l \lt +\infty$ ，两级数同敛散

(ii). 若 $l = 0$ ，若 $b_n$ 收敛，则 $a_n$ 也收敛

(iii). 若 $l = +\infty$ ，若 $b_n$ 发散，则 $a_n$ 也发散

### 例子和摘要

#### p-级数

$$\sum_{n=1}^\infty \frac{1}{n^p}$$

当 $p>1$ 时收敛，当 $p \leq 1$时发散。

**证明要点:**

$$ \frac{1}{n^p} = \int_{n-1}^n \frac{1}{n^p} \mathrm{d}x \leq \int_{n-1}^n \frac{1}{x^p}\mathrm{d}x = \frac{1}{p-1}\left[\frac{1}{(n-1)^{p-1}}-\frac{1}{n^{p-1}}\right] $$

此处出现了一个某数列的裂项形式

## 柯西积分判别法

设 $f(x)$ 在 $[N, +\infty)$ 上非负且单调减少，其中 $N$ 是某个自然数。令 $a_n = f(n)$ ，则级数 $ \sum_{n=1}^\infty a_n $ 与反常积分 $\int_N^\infty f(x)\mathrm{d}x$ 同敛散。

证明关键点：

$$ \int_k^{k+1} f(x) \mathrm{d}x \leq a_k \leq \int_{k-1}^{k} f(x)\mathrm{d}x, k \geq N + 1 $$

注意**图像**的应用

### 例子与摘要

$$ \sum_{n=2}^\infty \frac{1}{n\ln^q n} $$

令 $f(x)=\dfrac{1}{n\ln^q n}$ ，显然 $f(x)$ 在 $[2, +\infty)$ 上非负且单调递减，

$$ \int_2^{+\infty} \frac{1}{x\ln^q x} \mathrm{d}x = \int_2^{+\infty} \frac{1}{\ln^q x} \mathrm{d}\ln x $$

该积分在 $q > 1$ 时收敛， $q \leq 1$ 时发散，根据积分判别法可知原级数也在 $q \gt 1 $ 时收敛， $q \leq 1$ 时发散

## D'Almbert 判别法

思想是比较判别法的一种延拓，即将相邻两项的的增长速度与几何级数进行比较

### D'Almbert 判别法的极限形式

设 $ \sum_{n=1}^\infty a_n $ 是正项级数，则

(i). 若 $ \lim_{n \to \infty} \dfrac{a_{n+1}}{a_n} = q \lt 1 $ ,则级数收敛;

(ii). 若 $ \lim_{n \to \infty} \dfrac{a_{n+1}}{a_n} = q \gt 1 $ ,则级数发散.

#### 例子与摘要

1. $ \sum_{n=1}^\infty \dfrac{1}{n!} $

    $$ \frac{\dfrac{1}{(n+1)!}}{\dfrac{1}{n!}} $$

## 柯西根值判别法

也是和几何级数进行比较，但是使用通项公式进行判断

### 柯西根值判别法的极限形式

#### 例子与摘要

1. $ \sum_{n=1}^\infty \dfrac{1}{(\ln n)^n} $

    $$ \lim_{n \to \infty} \sqrt[n]{\frac{1}{(\ln n)^n}} = \lim_{n \to \infty} \frac{1}{\ln n} = 0 \lt 1 $$

## Raabe 判别法

## Gauss 判别法

However, 不存在所谓万能的判别法

# 例子与摘要

1.
    $$ \sum_{n=1}^\infty\left(\frac{1}{\sqrt{n}} - \sqrt{\ln\frac{n+1}{n}}\right) $$
2.
    $$ \sum_{n=1}^\infty\left(n^{\tfrac{1}{n^2+1}} -1\right) $$