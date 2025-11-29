---
layout: post
title: 积分变换-拉普拉斯变换
date: 2025-11-28 21:15:14 +0800
category: Learning
tags:
- Integral Transform
---
## 拉普拉斯变换

定义

$$ D(f) = [0, +\infty), Ran(f) \in \R, s = \beta +\mathrm{j}\omega$$

$$ F(s) = \mathscr{L} \left[ f(t) \right] = \int_0^{+\infty} f(t) \mathrm{e}^{-st} \mathrm{d} t $$

为 $F(s)$ 的**拉普拉斯变换**，并仿照傅里叶变换作出逆变换、象原函数、象函数的定义

$$ f(t) = \mathscr{L}^{-1} \left[ F(s) \right] = \frac{1}{2\pi\mathrm{j}} \int_{\beta - \mathrm{j}\omega}^{\beta + \mathrm{j}\omega} F(s)\mathrm{e}^{st} \mathrm{d}s $$

称为反演积分公式，积分为**反演积分**

$f(t)$ 和 $F(s)$ 构成**拉普拉斯变换对**

$$ f(t) \leftrightarrow F(s) $$

傅里叶变换与拉普拉斯变换的关系

$$ F(s) = \mathscr{L} \left[ f(t) \right] = \mathscr{F}\left[ f(t) \mathrm{e}^{-\beta t} H(t) \right] $$