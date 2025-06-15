---
layout: post
title: 工科数学分析-10.4函数项级数
date: 2025-06-16 00:39:32 +0800
categories: Learning
---
* toc
{:toc}

# 基本概念

## 函数列

任意给定自然数 $n$, $f_n(x)$ 是定义在区间 $I$ 上的一个函数. 对应任意给定的 $x\in I$, 当 $n=1,2,\ldots$ 时, $\{f_n(x)\}$ 就是一个数列,即 $\{f_n(x)\}$ 时定义在区间 $I$ 上的一个**函数列**.

## 极限函数

如果对于每一个 $x\in I $,数列 $\{f_n(x)\}$ 都收敛,则

$$\lim_{n \to \infty} f_n(x) = f(x)$$

称函数列 $\{f_n(x)\}$ 在 $I$ 上点态收敛到 $f(x)$,简称收敛到$f(x)$,称 $f(x)$ 为 $\{f_n(x)\}$ 在 $I$ 上的**极限函数**

## 函数项级数

$$ \sum_{n=1}^\infty u_n(x) = u_1(x) + u_2(x) + \ldots + u_n(x) + \ldots $$

称以上形式的级数为函数项级数

### 函数项级数收敛

如果对每一个 $x\in I $ ,部分和序列

$$ S_n(x) = \sum_{k=1}^\infty u_k(x) $$

都收敛，且

$$ \lim_{n \to \infty} S_n(x) = S(x) $$

则称函数项级数 $\sum_{n=1}^\infty u_n(x)$ 在 $I$ 上收敛到 $S(x)$

## 数项级数

在函数项级数的式子中选定 $x=x_0$ 即成为一个数项级数

## 收敛域

所有使级数 $\sum_{n=1}^\infty u_n(x)$ 收敛的点 $x$ 所构成的集合称为级数的**收敛域**

## 发散域

所有使级数 $\sum_{n=1}^\infty u_n(x)$ 发散的点 $x$ 所构成的集合称为级数的**发散域**

## 点态收敛

如果满足以下条件

$$ \forall x \in I, \forall \epsilon \gt 0, \exists N, s.t. n \gt N, |S_n(x) - S(x)| \lt \epsilon $$

则称级数在 $I$ 收点态收敛到 $S(x)$

# 一致收敛

$\{f_n(x)\}$ 在区间 $I$ 上有极限函数 $f(x)$. 如果 $ \forall \epsilon \gt 0, \exists N = N(\epsilon) $ 使

$$ n \gt N, \forall x \in I, |f_n(x) - f(x)| \lt \epsilon $$

成立,则称 $\{f_n(x)\}$ 在 $I$ 上一致收敛于 $f(x)$, 或称 $f(x)$ 为 $\{f_n(x)\}$ 在 $I$ 上的一致收敛极限,记作

$$ f_n(x) \overset{I}{\rightrightarrows} f(x) $$

## 从柯西准则推广的一致收敛的充要条件

$$ \forall \epsilon \gt 0, \exists N_\epsilon s.t. \forall m,n: m \gt n \gt N_\epsilon, |u_{n+1}(x)+u_{n+2}(x)+ \ldots + u_m(x)| \lt \epsilon, \forall x \in I $$

使 $m = n + 1$ 就得到一个级数一致收敛的必要条件:

$$u_n(x) \overset{I}{\rightrightarrows} 0$$

## 维尔斯特拉斯M-判别法

$$ \forall x \in I, |u_n(x)| \leq M_n $$

成立,且数项级数 $\sum_{n=1}^\infty M_n$ 收敛,则级数 $\sum_{n=1}^\infty u_n(x)$ 在 $I$ 上一致收敛.

## 和函数连续

## 极限可交换

## 积分可交换

## 逐项求导定理

设级数 $\sum_{n=1}^\infty u_n(x)$ 满足以下三个条件:

1. 在区间 $[a,b]$ 收敛于 $S(x)$
2. $u_n(x)$ 在 $[a,b]$ 上有连续的导函数
3. 由但函数构成的级数 $\sum_{n=1}^\infty u_n^\prime(x)$ 在 $[a,b]$ 上一致收敛.

则 $S(x)$ 在 $[a,b]$ 上由连续的导数,且

$$ S^\prime(x) = \left(\sum_{n=1}^\infty u_n(x)\right)^\prime = \sum_{n=1}^\infty u_n^\prime(x) $$