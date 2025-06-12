---
layout: post
title: 工科数学分析-10.3一般（（符号）任意项）级数
date: 2025-06-11 17:42:50 +0800
categories: Learning
tags:
- calculus
---
* toc
{:toc}

# 交错级数

正负项交错出现的级数

一般记为

$$ \sum_{n=1}^\infty (-1)^{(n-1)}a_n = a_1 - a_2 + a_3 - a_4 + \cdots $$

, $ a_n \geq 0 $, $ \forall n \in \mathbb{N} $

## 莱布尼兹判别法

若正数列 $\{a_n\}$ 单调递减趋于0，则交错级数 $\sum_{n=1}^\infty(-1)^{n-1}a_n$ 收敛

证明即证 $S_n$ 的偶数子列和奇数子列都收敛到 $S$

## 绝对收敛

若 $\sum_{n=1}^\infty a_n$ 收敛，则 $\sum_{n=1}^\infty \|a_n\|$ 也收敛，则 $\sum_{n=1}^\infty a_n$ 称为绝对收敛级数.

### 定理: 绝对收敛级数必收敛

**定理：** 若 $\sum_{n=1}^\infty \|a_n\|$ 收敛，则 $\sum_{n=1}^\infty a_n$ 也收敛

证明使用绝对值不等式以及柯西准则.

其逆不成立

如: $\sum_{n=1}^\infty (-1)^{n-1}\dfrac{1}{n}$

**定理:** 级数 $\sum_{n=1}^\infty a_n$ 绝对收敛当且仅当级数 $\sum_{n=1}^\infty a_n^+,\, \sum_{n=1}^\infty a_n^-$ 均收敛,且 $\sum_{n=1}^\infty a_n$ 绝对收敛时,有

令

$$ a_n^+ = \begin{cases} a_n, a_n \geq 0; \\ 0, a_n \lt 0 \end{cases} \\ a_n^- = \begin{cases} -a_n, a_n \leq 0; \\ 0, a_n \gt 0 \end{cases} $$

$$ \sum_{n=1}^\infty a_n = \sum_{n=1}^\infty a_n^+ - \sum_{n=1}^\infty a_n^- $$

证明关键: $\sum_{n=1}^N \|a_n\| = \sum_{n=1}^N a_n^+ + \sum_{n=1}^N a_n^-$ 推出 $\sum_{n=1}^\infty a_n^-,\, \sum_{n=1}^\infty a_n^+$ 均有界

### 性质

#### 定理: 绝对收敛级数在任意重排后,仍然绝对收敛且和不变

#### 绝对收敛级数的乘法

设级数 $\sum_{n=1}^\infty a_n =A, \, \sum_{n=1}^\infty b_n = B$ 都绝对收敛，则 $\sum_{n=1}^\infty c_n \, (c_n = \sum_{k=1}^n a_k b_{n-k+1}) $ (称为柯西乘积)也绝对收敛,其和为 $AB$ .

## 条件收敛

若 $\sum_{n=1}^\infty a_n$ 收敛，但 $\sum_{n=1}^\infty \|a_n\|$ 发散，则 $\sum_{n=1}^\infty a_n$ 称为条件收敛级数。

如: $\sum_{n=1}^\infty (-1)^n \dfrac{1}{n^\alpha}$

*PS: 条件收敛是通过正项和负项之间的抵消得到的*

**定理:** 级数 $\sum_{n=1}^\infty a_n$ 条件收敛则必有

$$ \sum_{n=1}^\infty a_n^+ = \sum_{n=1}^\infty a_n^- = + \infty $$

证明使用反证法，假设其中一个收敛，可以推出矛盾