---
layout: post
title: 工科数学分析-10.5幂级数
date: 2025-06-18 15:50:18 +0800
categories: Learning
tags:
- calculus
---
# 定义

形如

$$ \sum_{n=0}^\infty a_nx^n = a_0 + a_1 x + a_2 x^2 + \ldots + a_n x^n + \ldots $$

称为**幂级数**

# 收敛半径和收敛区间

任何一个幂级数 $\sum_{n=0}^\infty a_n x_n$ 必有一个**收敛半径 $R (0 \leq R \leq +\infty)$**

$(-R, R)$ 称为**收敛区间**

**收敛域** = $(-R, R) \cup \{\text{收敛的端点}\}$

## 阿贝尔第一定理

如果级数 $\sum_{n=0}^\infty a_n x^n$ 在 $\xi \neq 0$ 处收敛,则 $\forall x:\|x\| \lt \|\xi\|$, 它都绝对收敛. 如果在 $\eta \neq 0$ 处它发散,则 $\forall x: \|x\| \gt \|\eta\|$, 它都发散.

## 收敛半径的求法

### 从D'Alembert判别法导出

给定幂级数 $\sum_{n=0}^\infty a_n x_n, a_n \neq 0$,设

$$ \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \rho $$

$$ R = \begin{cases} \dfrac{1}{\rho}, & \rho \neq 0 \\ +\infty, &\rho = 0 \\ 0, &\rho = +\infty \end{cases} $$

### 从柯西根值判别法导出

设幂级数 $\sum_{n=0}^\infty a_n x^n$ 的系数满足

$$ \lim_{n \to \infty} \sqrt[n]{|a_n|} = \rho $$

那么

$$ R = \begin{cases} \dfrac{1}{\rho}, &\rho \neq 0 \\ +\infty, &\rho = 0 \\ 0, & \rho = +\infty \end{cases}$$

**NB:** 在端点处的敛散性要单独判断

# 性质

设幂级数收敛半径 $R \gt 0$

## 阿贝尔第二定理

设幂级数的收敛半径为 $R \gt 0$ ,则 $\forall r \in (0, R)$ ,级数在闭区间$[-r, r]$ 上一致收敛(称级数在 $(-R,R)$ **内闭一致收敛**)

## 和函数连续性

和函数 $S(x)$ 在 $(-R, R)$ 内连续

**推论:** 若幂级数在 $x=R_0$ 处收敛,则它的和函数 $S(x)$ 在区间 $[0, R_0]$ 上连续

## 可微性

和函数 $S(x)$ 在 $(-R,R)$ 内可导,且

$$ S^\prime(x) = \sum_{n=1}^\infty na_nx^{n-1} $$

且求导后的得到的该级数的收敛半径仍为 $R$

## 可积性

$$ \forall x \in (-R, R), \sum_{n=0}^\infty \int_0^x a_n t^n \mathrm{d}t = \sum_{n=0}^\infty \frac{a_n}{n+1} x^{n+1} $$

## 运算

设幂级数 $\sum_{n=0}^\infty a_n x^n$ 的收敛半径为 $R$ ,$\sum_{n=0}^\infty b_n x^n$ 的收敛半径为 $R^\prime$

### 加法

$$ \sum_{n=0}^\infty a_n x^n + \sum_{n=0}^\infty b_n x^n = \sum_{n=0}^\infty (a_n+b_n)x^n $$

## 减法

$$ \sum_{n=0}^\infty a_n x^n - \sum_{n=0}^\infty b_n x^n = \sum_{n=0}^\infty (a_n-b_n)x^n $$

## 乘法

柯西乘积

$$ \left(\sum_{n=0}^\infty a_n x^n\right)\left(\sum_{n=0}^\infty b_n x^n\right) = a_0 b_0 + (a_0 b_1 + a_1 b_0) x + \ldots + (a_0 b_n + a_1 b_{n-1} + \ldots + a_n b_0) x^n + \ldots $$

以上性质在 $(-R, R)$ 和 $(-R^\prime, R^\prime)$ 中较小的一个成立

## 除法

$$ \frac{\sum_{n=0}^\infty a_n x^n}{\sum_{n=0}^\infty b_n x^n} = c_0 + c_1 x + \ldots + c_n x^n + \ldots $$

将 $\sum_{n=0}^\infty b_n x^n$ 与 $\sum_{n=0}^\infty c_n x^n$ 相乘,并令乘积中各项的系数分别等于级数 $\sum_{n=0}^\infty a_n x^n$ 中同次幂的系数,由方程组可解出各系数
