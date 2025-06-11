---
layout: post
title: 工科数学分析-10.1数列级数的收敛与发散
date: 2025-06-11 16:19:09 +0800
categories: Learning
tags:
- calculus
---
* toc
{:toc}

# 基本概念

## 无穷级数

$$ \sum_{n=1}^\infty a_n = a_1 + a_2 + a_3 + \dots + a_n $$

## 一般项

上述形式中的 $a_n$ 称为级数的**一般项**

## 部分和

$$ S_n = \sum_{i=1}^n a_i $$

## 收敛

若 $\lim_{n \to \infty} S_n = S$ ，则称数列级数**收敛**，且其和为S

### 余项

称 $r_n = S - S_n = a_{n+1} + a_{n+2} + \ldots$ 为级数的余项

## 发散

若 $\lim_{n \to \infty} S_n$ 不存在或极限为 $\pm\infty$ ，则称级数发散

# 柯西准则

级数 $\sum_{n=1}^\infty a_n$ 收敛的充要条件是

$$ \forall \epsilon \gt 0, \exists N, \forall m,n \gt N, m \gt n,\\ |a_{n+1}+a_{n+2}+\ldots +a_m| \lt \epsilon $$

根据数列的柯西收敛准则容易证明

# 收敛级数的基本性质

## 性质1：收敛级数的和也收敛

若级数 $\sum a_n$ 与 $\sum b_n$ 都收敛，其和分别为 $s$ 和 $\sigma$ ，则对于任意的常数 $k_1$ 和 $k_2$ ，级数 $k_1\sum a_n + k_2\sum b_n$ 收敛到 $k_1 s + k_2 \sigma$

## 性质2：级数收敛的必要条件是数列的通项收敛

若级数 $\sum a_n$ 收敛，则

$$ \lim_{n \to \infty} a_n = 0 $$

## 性质3：改变（或略去）技术的有限多项不影响敛散性

## 性质4：将收敛级数的项不改变的次序地结合后得到的新级数仍收敛到原来的值

### 推论：如果加括号之后的级数发散，则原级数也发散