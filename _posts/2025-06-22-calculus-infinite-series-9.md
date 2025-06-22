---
layout: post
title: 工科数学分析-10.9傅里叶级数的复数形式
date: 2025-06-22 17:05:46 +0800
categories: Learning
tags:
- calculus
---
# 背景

## 复谐振动

$$ x = c\mathrm{e}^{\mathrm{i} \omega t} $$

其中 $c = r\mathrm{e}^{\mathrm{i} \theta}$ 称为**复振幅**, $\omega$ 称为**圆频率**

由欧拉公式

$$ \begin{aligned} \cosh \mathrm{i}x = \cos x &= \frac{\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x}}{2} \\ \mathrm{i}^{-1}\sinh \mathrm{i}x = \sin x &= \frac{\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x}}{2\mathrm{i}} \end{aligned} $$

# 周期为 $2l$ 的 $f(x)$ 的傅里叶级数的复数形式

$$ f(x) \sim \sum_{n=-\infty}^\infty c_n \mathrm{e}^{\mathrm{i}\frac{n \pi x}{l}} = c_0 + \sum_{n=1}^\infty \left(c_n \mathrm{e}^{\mathrm{i}\frac{n \pi x}{l}} + c_{-n} \mathrm{e}^{-\mathrm{i}\frac{n \pi x}{l}}\right) $$

这个式子中的

$$ \begin{cases} 
c_0 & = \dfrac{a_0}{2} = \dfrac{1}{2l}\int_{-l}^l f(x) \mathrm{d}x \\ \\
c_n & = \dfrac{a_n - \mathrm{i}b_n}{2} = \dfrac{1}{2l}\int_{-l}^l f(x)\mathrm{e}^{-\mathrm{i}\frac{n\pi x}{l}} \mathrm{d} x \\ \\
c_{-n} & = \dfrac{a_n + \mathrm{i}b_n}{2} = \dfrac{1}{2l}\int_{-l}^l f(x)\mathrm{e}^{\mathrm{i}\frac{n \pi x}{l}} \mathrm{d} x
\end{cases} $$