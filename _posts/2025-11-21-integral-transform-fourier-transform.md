---
layout: post
title: 积分变换-傅里叶变换
date: 2025-11-21 12:25:44 +0800
category: Learning
tags:
- Integral Tranform
---
* toc
{:toc}

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

## 傅里叶积分定理

若 $f(t)$ 在 $\mathbb{R}$ 绝对可积，且在任意有限区间 $(-l, l)$ 内满足狄利克雷条件，则在连续点满足

$$ f(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} \hat{f}(\omega) \mathrm{e}^{\mathrm{j}\omega t}\mathrm{d}\omega \tag{\text{inv}} $$

在间断点满足

$$ f(t) = \frac{1}{2} \left[f(t^{-}) + f(t^{+})\right] $$

上述的式inv也可称为傅里叶逆变换 $f(t) = \mathscr{F}^{-1} \left[\hat{f}(\omega)\right] $

$f(t)$ 称为**象原函数**，$\hat{f}(\omega)$ 称为**象函数**

不考虑间断的话，他们具有一一对应的关系，即

$$ f(t) \leftrightarrow \hat{f}(\omega) $$

这被称为一个**傅里叶变换对**


### 对称公式

$$\hat{\hat{f}}(t) = \mathscr{F}\left[\hat{f}(\omega)\right] = \begin{cases}
2\pi f(-t), & \text{AT CONTINUE POINT} \\
\pi(f(t^{-}) + f(t^{+})), & \text{ELSE}
\end{cases}
 $$

于是有以下另一个傅里叶变换对

$$
\hat{f}(t) \leftrightarrow 2\pi f(-\omega)
$$

### 单边衰减函数

$$ f(t) = \begin{cases}
\mathrm{e}^{-\beta t}, & t \geq 0 \\
0, & t \lt 0 \\
\end{cases}
, \ \beta \gt 0
$$

$$ \hat{f}(\omega) = \mathscr{F}\left[f(t)\right] = \frac{\beta - \mathrm{j}\omega}{\beta^2 + \omega^2}  $$

由

$$ \mathscr{F}^{-1}\left[\hat{f}(\omega)\right] = \begin{cases}
f(t), & t \neq 0 \\
\dfrac{1}{2} \left[f(0^{-}) + f(0^{+})\right], & t = 0
\end{cases}
$$

得

$$
\int_0^{+\infty} \frac{\beta\cos\omega t + \omega\sin\omega t}{\beta^2 + \omega^2} \mathrm{d}\omega = \mathscr{F}^{-1}\left[\hat{f}(\omega)\right] = \begin{cases}
0, & t \lt 0 \\
\pi / 2, & t = 0 \\
\pi \mathrm{e}^{- \beta t}, & t \gt 0
\end{cases}
$$

### 矩形脉冲函数

$$ f(t) = \begin{cases}
1, & \lvert t \rvert \leq a, \\
0, & \lvert t \rvert \gt a
\end{cases}
, \  a \gt 0
$$

$$ \hat{f}(t) = \mathscr{F}\left[f(t)\right] = \int_{-a}^a \mathrm{e}^{-\mathrm{j}\omega t} \mathrm{d}t = \frac{2\sin a\omega}{\omega} $$

$$ \begin{aligned}
 \mathscr{F}^{-1}\left[ \hat{f}(\omega) \right] &= \frac{1}{2\pi}\int_{-\infty}^{+\infty} \frac{2\sin a\omega}{\omega} \mathrm{e}^{\mathrm{j}\omega t} \mathrm{d}\omega \\
 &= \frac{1}{\pi} \int_{-\infty}^{+\infty}  \frac{1}{\omega}\sin a\omega \cos \omega t \mathrm{d} \omega + \frac{\mathrm{j}}{\pi} \int_{-\infty}^{+\infty} \frac{1}{\omega} \sin a\omega \sin \omega t \mathrm{d} \omega \\
 &= \begin{cases}
 f(t), & \lvert t \rvert \neq a, \\
 \dfrac{1}{2} \left[f(\pm a^{-}) + f(\pm a^{+})\right], & \lvert t \rvert = a
 \end{cases}
\end{aligned}
$$

即

$$
\int_0^{+\infty} \frac{1}{\omega}\sin a\omega \cos \omega t \mathrm{d} \omega = \begin{cases}
\pi / 2, & \lvert t \rvert \lt a \\
\pi / 4, & \lvert t \rvert = a \\
0, & \lvert t \rvert \gt a
\end{cases}
$$

取 $t = 0, \  a = 1$ 我们有**狄利克雷积分**

$$
\int_0^{+\infty} \frac{\sin \omega}{\omega} \mathrm{d} \omega = \frac{\pi}{2}
$$

*傅里叶积分定理为这类难以求出/无法求出原函数的积分提供了定义值的方法*

## 频谱

以下是**傅里叶级数的复指数形式**

$$ f(t) = \sum_{n=-\infty}^{+\infty} C_n \mathrm{e}^{\mathrm{j} n\omega t} \\

\begin{cases}
C_0 = \dfrac{a_0}{2} = \dfrac{1}{2l} \int_{-l}^l f(\tau) \mathrm{d}\tau, \\ \ \\
C_n = \dfrac{a_n - \mathrm{j}b_n}{2} = \dfrac{1}{2l} \int_{-l}^l f(\tau) \mathrm{e}^{- \mathrm{j} n \omega \tau} \mathrm{d}\tau \\ \ \\
C_{-n} = \dfrac{a_n + \mathrm{j}b_n}{2} = \frac{1}{2l}\int_{-l}^l f(\tau) \mathrm{e}^{\mathrm{j}n\omega\tau} \mathrm{d} \tau
\end{cases}
$$

记

$$
\begin{aligned}
A_0 & = C_0 \\
A_n &= 2\lvert C_n \rvert = 2 \lvert C_{-n} \rvert \\
\cos \varphi_n &= \frac{a_n}{A_n} \\
\sin \varphi_n &= - \frac{b_n}{A_n} \\
\varphi_n &= \arg C_n = -\arg C_{-n}
\end{aligned}
$$

对以 $T=2l$ 的周期函数可分解为有限数量的正弦波(谐波)

$$ X_n (t) = A_n \cos(n\omega t + \varphi_n) $$

$n=1$ 时的谐波称为**基波**，角频率 $\omega$ 为基频

n次谐波的角频率为 $n\omega$

**振幅** $A_n$ 反映了谐波在 $f(t)$ 中所占的比重

$\varphi_n$ 表示 n 次谐波沿时间轴所移动的距离

$A_n$ 称为**频谱**

**频谱图**为 $A_n - n\omega$ 图

显然，**周期函数的频谱是离散的**

$\varphi_n = \arg C_n$ 称**相位频谱**

由傅里叶逆变换知道，非周期函数包含了从零到无穷大所有频率的分量，$\hat{f}(\omega)$ 是各频率分量的分布密度，即为**频谱密度函数**， $\lvert \hat{f}(\omega) \rvert$ 称**振幅频谱**，简称为**频谱**

频谱还有以下性质

1. 频谱 $\lvert \hat{f}(\omega) \rvert$ 是角频率 $\omega$ 的偶函数
2. 相位频谱 $\varphi(\omega)$ 是角频率的奇函数，但 $b(\omega) = 0$ 时是例外

## Dirac函数 - $\delta$ 函数 - 单位脉冲函数

### 定义1

$\delta$ 函数定义在 $\mathbb{R}$ 且满足

1. $$\delta(t - t_0) = \begin{cases}
+\infty, & t = t_0 \\
0, & t \neq t_0
\end{cases}
$$
2. $\int_{-\infty}^{+\infty} \delta(t-t_0) \mathrm{d} t = 1$

Dirac函数的奇异性发生在 $t_0$ 的邻域中，就是说

$$
\int_a^b \delta(t-t_0) \mathrm{d}t = \int_{-\infty}^{+\infty} \delta(t-t_0) \mathrm{d}t = 1, \ a \lt t_0 \lt b \\
\int_a^b \delta(t-t_0) \mathrm{d}t = 0, \  a \lt b \lt t_0 \  \text{or} \  t_0 \lt a \lt b
$$

### 定义2 筛选性质

$$ \forall \varphi(t) \in C[a, b], \  \int_a^b \delta(t - t_0) \varphi(t) \mathrm{d}t = \varphi(t_0), a \leq t_0 \leq b $$

$\delta$ 函数的积分值称为其**冲激强度**，函数 $A\delta(t - t_n)$ 的冲激强度为 $A$

### 其他有用的性质

$\delta$ 函数与普通函数乘积的积分仍可形式地进行**分部积分和变量代换**

#### 引理1

$f(t)$ 为广义函数

$$ \forall \varphi \in C[a, b], \int_a^b f(t)\varphi(t) \mathrm{d} t = 0 \implies f(t) = 0, t \in (a, b) $$

#### 性质1 $\delta(t)$ 是偶函数

#### 性质2

$$ \alpha(t) \in C(B_r(t_0)), \alpha(t)\delta(t - t_0) = \alpha(t_0)\delta(t - t_0) $$

这也是筛选性质的体现

#### 性质3

$$ H^\prime(t) = \delta(t) $$

**单位阶跃函数**，或**海维赛函数**如下

$$
H(t) = \begin{cases}
1, & t \geq 0 \\
0, & t \lt 0
\end{cases}
$$

#### 性质4 $\delta$ 函数有任意阶导数

$$ \int_{-\infty}^{+\infty} \delta^{(n)}(t-t_0) \varphi(t) \mathrm{d}t = (-1)^n \varphi^{(n)}(t_0) $$

#### 性质5 $\delta$ 函数的傅里叶变换

$$ \mathscr{F}\left[ \delta(t-t_0) \right] = \mathrm{e}^{-\mathrm{j}\omega t} \mathrm{d} t \\
\mathscr{F}^{-1}\left[ \delta(\omega-\omega_0) \right] = \frac{1}{2\pi} \mathrm{e}^{\mathrm{j}\omega_0 t} $$

使 $t_0 = 0, \omega_0 = 0$

$$ \hat{\delta}(\omega) = 1 \\
\hat{1} = 2\pi \delta(\omega) $$

$$
\begin{cases}
\delta(t-t_0) \leftrightarrow \mathrm{e}^{-\mathrm{j}\omega t_0} \\
\delta(t) \leftrightarrow 1
\end{cases}
$$

$$
\begin{cases}
\mathrm{e}^{\mathrm{j}\omega_0 t} \leftrightarrow 2\pi\delta(\omega - \omega_0) \\
1 \leftrightarrow 2\pi \delta(\omega)
\end{cases}
$$

#### 单位阶跃函数的傅里叶变换

$$ H(t) \leftrightarrow \frac{1}{\mathrm{j}\omega} + \pi\delta(\omega) $$

## 傅里叶变换的性质

### 线性性

### 位移性质

设

$$ \hat{f}(\omega) = \mathscr{F}\left[ f(t) \right] $$

则

$$ \mathscr{F}\left[ f(t-t_0) \right] = \mathrm{e}^{-\mathrm{j}\omega t_0} \hat{f}(\omega) \\
\mathscr{F}^{-1}\left[ \hat{f}(\omega - a) \right] = \mathrm{e}^{\mathrm{j}a t} f(t) $$

这说明，当一个函数沿时间轴移动后，它的振幅频谱不发生变化，但相位频谱发生变化

### 相似性质

若

$$
\hat{f}(\omega) = \mathscr{F}\left[ f(t) \right]
$$

则

$$ \mathscr{F}\left[ f(at) \right] = \frac{1}{\lvert a \rvert} \hat{f}(\omega/a) $$

#### 翻转公式

取 $a=1$

$$ \mathscr{F}\left[ f(-t) \right] = \hat{f}(-\omega) $$

### 微分性质

若 $t\to\infty, f(t) \to 0$

$$
\mathscr{F}\left[ f^\prime(t) \right] = \mathrm{j}\omega\hat{f}(\omega) \\
\mathscr{F}\left[ -\mathrm{j}tf(t) \right] = \frac{\mathrm{d}}{\mathrm{d}\omega}\hat{f}(\omega)
$$

第二个式子称为**象函数的导数公式**

#### 推论

若

$$ \lim_{t\to\infty} f^{(k)} t = 0, k = 0,1,\cdots,n-1 $$

则

$$ \mathscr{F}\left[ f^{(n)} \right] = (\mathrm{j}\omega)^n \hat{f}(\omega) $$

$$ \frac{\mathrm{d}^n \hat{f}(\omega)}{\mathrm{d}\omega^n} = (-\mathrm{j})^n \mathscr{F}\left[ t^nf(t) \right] $$