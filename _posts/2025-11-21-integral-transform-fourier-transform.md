---
layout: post
title: 积分变换-傅里叶变换
date: 2025-11-21 12:25:44 +0800
category: Learning
tags:
- Integral Tranform
---
## 傅里叶级数与傅里叶变换

$f(t)$ 为 $\mathbb{R}$ 上定义的实值函数，在有限区间 $[-l, l]$ 内满足**狄利克雷条件**

1. 连续或至多有有限个间断点（跳跃间断点或可去间断点）
2. 至多有有限个极值

则 $f(t)$ 在区间内的连续点展开为

$$ f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty \left(a_n \cos \frac{n\pi t}{l} + b_n \sin \frac{n\pi t}{l} \right) $$

$$
    a_0 = \frac{1}{l} \int_{-l}^l f(\tau)\mathrm{d}\tau \\ \  \\
    a_n = \frac{1}{l} \int_{-l}^l f(\tau)\cos \frac{n\pi \tau}{l} \mathrm{d}\tau \\ \ \\
    b_n = \frac{1}{l} \int_{-l}^l f(\tau)\sin \frac{n\pi \tau}{l} \mathrm{d}\tau
$$

在间断点处的级数值应该等于 $\dfrac{1}{2}\left(f(t^{-}) + f(t^{+})\right)$

设 $f(t)$ 在 $\mathbb{R}$ 绝对可积

$$ \int_{-\infty}^{+\infty} \lvert f(\tau) \rvert \mathrm{d}\tau \lt + \infty$$

于是

$$ l \to +\infty, a_0 \to 0 $$

在连续点上就有

$$ f(t) = \lim_{l\to +\infty} \sum_{n=1}^\infty \frac{1}{l} \int_{-l}^l f(\tau)\cos \frac{n\pi (t- \tau)} {l} \mathrm{d}\tau $$

记 $\omega_0 = \dfrac{\pi}{l}, \ \omega_n = n\omega_0, \ \Delta \omega_n = \omega_{n+1} - \omega_{n}$

于是上面的极限变为

$$ g_l(\omega) = \int_{-l}^l f(\tau)\cos \omega(t-\tau) \mathrm{d}\tau $$

的积分和的极限，经过一些代入得到

$$ f(t) = \frac{1}{\pi}\int_0^{+\infty}\mathrm{d}\omega\int_{-\infty}^{+\infty}f(\tau)\cos \omega (t-\tau) \mathrm{d} \tau $$

运用欧拉公式可以将其变成复数形式

$$ f(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} \left[\int_{-\infty}^{+\infty} f(\tau) \mathrm{e}^{-\mathrm{j}\omega \tau}\mathrm{d}\tau\right] \mathrm{e}^{\mathrm{j}\omega t}\mathrm{d}\tau$$

引入新函数

$$ \hat{f}(\omega)=\mathscr{F}\left[f(t)\right] = \int_{-\infty}^\infty f(\tau) \mathrm{e}^{-\mathrm{j}\omega \tau} \mathrm{d}\tau $$

称为函数 $f(t)$ 的**傅里叶变换**