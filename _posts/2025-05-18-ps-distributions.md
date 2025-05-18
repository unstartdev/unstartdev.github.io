---
layout: post
title: 概率论与数理统计-常用的分布及性质
date: 2025-05-18 14:07:32 +0800
categories: Learning
tags:
- Probability and Statistics
---

* toc
{:toc}

# 前置

## 分布函数

概率空间为 $ (\Omega, \mathcal{F}, P) $ ， $ X $ 为随机变量，其分布函数 $ F_X $ 由如下定义

$$ F_X(x) = P(X \leq x) $$

由概率测度的上下连续性, $ \forall a \lt b \in \mathbb{R} $，有

$$ P(a < X \leq b) = F_X(b) - F_X(a), $$

$$ P(a \leq X \leq b) = F_X(b) - F_X(a - 0), $$

$$ P(a \leq X < b) = F_X(b - 0) - F_X(a - 0) $$

$$ P(a \lt b) = F_X(b - 0) - F_X(a) $$

此处 $ a - 0 $ 或 $ b - 0 $ 表示 $ \lim_{x \to a^-} F_X(x) $ 或 $ \lim_{x \to b^-} F_X(x) $

分布函数还有如下性质：

1. $ 0 \leq F_X(x) \leq 1, \forall x \in \mathbb{R} $
2. $ \forall x_1 \lt x_2, F_X(x_1) \leq F_X(x_2) 且 \lim_{x \to x_0^+} F_X(x) = F_X(x_0) $
3. $ \lim_{x \to -\infty} F_X(x) = 0, \lim_{x \to \infty} F_X(x) = 1 $

## 分布密度函数

对于**连续型随机变量** $ X $的分布函数 $ F_X(x) $ 有

$$ F_X(x) = \int_{-\infty}^x f_X(t) \mathrm{d}t,\quad x \in \mathbb{R} $$

其中 $ f_X(t) $为一非负函数，即为 $ X $的**分布密度函数**

容易发现 $ F_X(x) $ 是既左连续又右连续的，即连续型随机变量的分布函数处处连续

$$ f_X(x) = F_X^\prime(x) $$

$$ P(a \lt X \leq b) = F_X(b) - F_X(a) = \int_a^b f_X(t) \mathrm{d}t,\quad\forall a \lt b \in \mathbb{R} $$

*例题* 设连续型随机变量 $ X $ 的分布函数为

$$ F(x) = \begin{cases}
        0, & x \lt 0 ,\\
        Ax^2, & 0 \leq x \lt 2, \\
        1, & x \geq 2
        \end{cases} $$

求系数 $ A $

## 期望

### 离散型

$$ E[X] = \sum_{i=1}^{\infty}x_ip_i $$

### 连续型

$$ E[X] = \int_{\mathbb{R}}xf_X(x)\mathrm{d}x $$

同时

$$ E[g(X)] = \int_{\mathbb{R}}g(x)f_X(x)\mathrm{d}x $$

运算性质

1. $ E[CONSTANT] = CONSTANT $
2. 线性性 $ E[aX+bY] = aE[X] + bE[Y] $

### 多维

对于随机向量$ \mathbf{X} = (X_1, X_2, \dots, X_n) $，且 $ Var[X_i] \lt \infty,\ i=1,2,\dots,n $

$$ E[\mathbf{X}] = (E[X_1], E[X_2], \dots, E[X_n]) $$

## 协方差

$ (X, Y) $ 为二维随机向量，且 $ Var[X] \lt \infty $, $ Var[Y] \lt \infty $

定义协方差为

$$ \mathrm{Cov}(X, Y) = E[(X-E[X])(Y-E[Y])] = E[XY] - E[X]E[Y] $$

## 相关系数

$$ r(X, Y) = \frac{\mathrm{Cov}(X, Y)}{\sqrt{Var[X]} \sqrt{Var[Y]}} $$

若 $ r(X, Y) = 0 $，则$ X $和$Y$不相关

## 方差

$$ Var[X] = E[X^2] - E^2[X] $$

运算性质

1. $ Var[CONSTANT] = 0 $
2. $ Var[aX+bY] = a^2Var[X] + b^2 Var[Y] + 2abCov[X, Y] $

### 多维

$$ Var[\mathbf{X}] = (Cov(X_i, X_j))_{n \times n} $$

为一矩阵

# 分布

## 离散型

### 二项分布

$ X $ 取值在 $ 0, 1, 2, 3, 4, \ldots, n $

$ X \sim B(n, p) $ 即

$$ P(X = k) = \mathrm{C}_n^k p^k (1-p)^{n-k},\quad k=1,2,3,\dots,n $$

当 $ t = \lfloor (n+1)p \rfloor = (n+1)p $ 时，$ k = t $ 和 $ k = t - 1 $ 时 $ P(X=k) $取得最大值

否则 $ k = \lfloor (n+1)p \rfloor $ 时，$ P(X = k) $ 取得最大值

#### 期望

$$ E[X] = np $$

#### 方差

$$ Var[X] = np(1-p) $$

### 泊松分布

$ X $ 取值为非负整数

$ X \sim \mathrm{Pios}(\lambda) $，即

$$ P(X = k) = \frac{\mathrm{e}^{-\lambda}\lambda^{k}}{k!},\quad n = 1, 2, 3, \dots $$

该分布与泰勒展开式 $ \mathrm{e}^{x} = 1 + x + \dfrac{x^2}{2!} + \ldots + \dfrac{x^n}{n!} + \ldots $ 有关

#### 泊松定理

若 $ 0 \lt p_n \lt 1$ 与 $ n $ 相关，$ X \sim B(n, p_n) $， 且 $ \lim_{n \to \infty} np_n = \lambda $，则 $ \lim_{n \to \infty} P(X = k) = \lim_{n \to \infty} \mathrm{C}_n^k p_n^k(1-p_n)^{(n-k)} = \dfrac{\mathrm{e}^{-\lambda}\lambda^k}{k!} $

这说明二项分布的极限分布为二项分布，当n足够大时可使用泊松分布近似计算二项分布

#### 期望

$$ E[X] = \lambda $$

#### 方差

$$ Var[X] = \lambda $$

### 几何分布

每次试验成功的概率为 $ p $，设随机变量$ X $为直到首次试验成功所需要的次数，那么

$$ P(X = k) = (1-p)^{k-1}p, \quad k=1,2,3,\dots $$

由于几何级数 $ 1 + (1-p) + \dots + (1-p)^k + \dots = \dfrac{1}{1-(1-p)} = \dfrac{1}{p} $， 称该分布为几何分布，记作 $ X \sim \mathrm{Geo}(p) $

**无记忆性** 若已知前$k$次试验都是失败的，则从$k+1$次开始首次出现成功试验所在的次数$n$与$k$无关

#### 期望

$$ \begin{aligned} E[X] & = \sum_{k=1}^{\infty}k(1-p)^{k-1}p \\
& =p\sum_{k=1}^{\infty}k(1-p)^{k-1} \\
& =-p\sum_{k=1}^{\infty}\frac{\mathrm{d}}{\mathrm{d}p}(1-p)^{k} \\
& =-p\frac{\mathrm{d}}{\mathrm{d}p}\sum_{k=1}^{\infty}(1-p)^k \\
& = -p\frac{\mathrm{d}}{\mathrm{d}p}\left(\frac{1}{p}\right) \\
& = \frac{1}{p} \\
\end{aligned}$$

#### 方差

$$ Var[X] = E[X^2] - E^2[X] = \frac{1-p}{p^2} $$

## 连续型

### 均匀分布

#### 一维

$ X $ 服从 $ [a, b] $ 上的均匀分布记作 $ X \sim U[a, b] $

若几何概型中投点都落入 $[a,b]$ 内，$ X $ 为落点坐标则 $ X \sim U[a, b] $

##### 分布密度函数

$$ f_X(x) = \begin{cases} \frac{1}{b-a}, &x\in[a,b],\\ 0, &x \notin [a, b] \end{cases} $$

##### 期望

$$ E[X] = \frac{b - a}{2} $$

即区间中点坐标

#### 二维

##### 分布密度函数

设$D$为二维平面上的一个有界区域，其面积为$S_D$

$$ f_{X, Y}(x, y) = \begin{cases} \dfrac{1}{S_D}, & (x, y) \in D \\ 0, &otherwise \end{cases} $$

### 指数分布

$X$服从参数为$\lambda (\lambda \gt 0)$的指数分布记作$X \sim Exp(\lambda)$

#### 分布密度函数

$$ f_X(x) = \begin{cases} \lambda \mathrm{e}^{-\lambda x}, &x \gt 0 \\ 0, &x\leq 0 \end{cases} $$

#### 期望

$$ \begin{aligned}
E[X]  & = \int_{0}^{\infty} x \cdot \lambda \mathrm{e}^{-\lambda x}\mathrm{d}x \\
& = \frac{1}{\lambda}\int_0^{\infty}u\mathrm{e}^{-u}\mathrm{d}u \\
&=\frac{1}{\lambda}\lim_{h \to \infty}\left(h\mathrm{e}^{-h}-0\cdot1-(\mathrm{e}^{-h} - 1)\right)\\
&=\frac{1}{\lambda}
\end{aligned}$$

#### 方差

$$ Var[X] = \frac{2}{\lambda^2} $$

求$E[X^2]$的过程与求$E[X]$的过程几乎相同

### 正态分布

$X$服从参数为$(\mu, \sigma^2)$的正态分布，记作$X \sim N(\mu, \sigma^2)$

#### 分布密度函数

$$ f_X(x) = \frac{1}{\sqrt{\pi}}\cdot\frac{1}{\sqrt{2\sigma^2}}\mathrm{e}^{-\frac{(x-\mu)^2}{2\sigma^2}} $$

特别地，当$ \mu = 0, \sigma = 1 $时

$$ \phi (x) = \frac{1}{\sqrt{\pi}}\cdot\frac{1}{\sqrt{2}}\mathrm{e}^{-\frac{x^2}{2}} $$

对应的分布函数满足

$$ \Phi (x) = 1 - \Phi (-x) $$

#### 期望

$$ E[X] = \mu $$

#### 方差

$$ Var[X] = \sigma^2 $$

#### 多维

##### 二维

$ (X, Y) \sim N(\mu_1, \mu_2, \sigma_1^2, \sigma_2^2, \rho) $

$$ f_{X, Y}(x,y) = \frac{1}{2\pi}\cdot\frac{1}{\sqrt{1-\rho^2}}\cdot\frac{1}{\sigma_1\sigma_2}\exp{\left\{-\frac{1}{2(1-\rho^2)}\left(\frac{1}{\sigma_1^2}(x-\mu_1)^2-\frac{2\rho}{\sigma_1\sigma_2}(x-\mu_1)(y-\mu_2)+\frac{1}{\sigma_2^2}(y-\mu_2)^2\right)\right\}} $$

$$ f_X(x) = \frac{1}{\sqrt{2\pi}\sigma_1}\mathrm{e}^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}} $$

即$ X \sim N(\mu_1, \sigma_1^2) $，同样地，$ Y \sim N(\mu_2, \sigma_2^2) $

当$\rho = 0 $时，$ f_{X,Y}(x, y) = f_X(x) \cdot f_Y(y) $，即$X$与$Y$相互独立

##### n维

$ \mathbf{X} = (x_1, x_2, x_3, \ldots, x_n)^T, \boldsymbol{\mu} = (\mu_1, \mu_2, \ldots, \mu_n)^T$, $\boldsymbol{\Sigma} $ 为n阶正定矩阵

$$ f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) = \frac{1}{(2\pi |\boldsymbol{\Sigma}|)^{\frac{n}{2}}}\exp{\left\{-\frac{1}{2}(\mathbf{X}-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\mathbf{X}-\boldsymbol{\mu})\right\}} $$

记作$ \mathbf{X} = N(\boldsymbol{\mu}, \boldsymbol{\Sigma}) $

对于上述的二维正态分布

$$ \boldsymbol{\mu} = \begin{pmatrix} \mu_1 \\ \mu_2 \end{pmatrix}, \boldsymbol{\Sigma} = \begin{pmatrix} \sigma_1^2 & \rho\sigma_1\sigma_2 \\ \rho\sigma_1\sigma2 & \sigma_2^2 \end{pmatrix} $$

### $ \Gamma $分布

若$ X \sim N(0,1) $则$ X^2 \sim \Gamma(\dfrac{1}{2}, \dfrac{1}{2}) $

#### 分布密度函数

$$ f_X(x) = \begin{cases}
\frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha - 1}\mathrm{e}^{-\lambda x}, &x \gt 0,\\
0, & Otherwise.
\end{cases}$$

#### 期望

$$ E[X] = \frac{\alpha}{\lambda} $$

#### 方差

$$ Var[X] = \frac{\alpha}{\lambda^2} $$

#### 可加性

若$X_1 \sim \Gamma(\alpha_1, \lambda), X_2 \sim \Gamma(\alpha_2, \lambda)$,且$X_1$, $X_2$相互独立，则$X_1+X_2 \sim \Gamma(\alpha_1 + \alpha_2, \lambda)$

### $ \chi^2 $分布

设$X \sim N(0,1)$, $(X_1, X_2, \ldots, X_n)$ 为其简单随机样本，即$X_1, X_2, \ldots, X_n$独立同分布，则$X_1^2+X_2^2+\ldots+X_n^2 \sim \Gamma(\dfrac{n}{2}, \dfrac{1}{2})$，令$Y=X_1^2+X_2^2+\ldots+X_n^2$，即$Y \sim \Gamma(\dfrac{n}{2}, \dfrac{1}{2})$，此时称$Y$服从**自由度为n的$\chi^2$分布**，又记作$Y \sim \chi^2(n)$

又由中心极限定理，若$ X \sim \chi^2(n) $，当$n \to \infty$，$(X-n)/\sqrt{2n} \sim N(0, 1)$

#### 分布密度函数

$$ f_X(x) = \begin{cases}
\frac{1}{2^n\Gamma(\frac{n}{2})}x^{\frac{n}{2}-1}\mathrm{e}^{-x/2}, & x \gt 0\\
0, & Otherwise.\\
\end{cases}
$$

#### 期望

$$ E[X] = n $$

#### 方差

$$ Var[X] = 2n $$

### t分布

设$X \sim N(0,1), Y \sim \chi^2(n)$，且$X$与$Y$相互独立，令$T=\dfrac{X}{\sqrt{Y/n}}$，此时$T$服从**自由度为n的t分布**，记作$T \sim t(n)$

#### 分布密度函数

$$ f_T(x) = \frac{1}{\sqrt{n\pi}} \cdot \frac{\Gamma\left(\frac{n+1}{2}\right)}{\Gamma\left(\frac{n}{2}\right)}\left(1+\frac{x^2}{2}\right)^{-\frac{n+1}{2}} $$

同样地，当$n \to \infty$时，$t(n)$渐近于$N(0,1)$

#### 期望

$$ E[X] = 0 (n \gt 1) $$

#### 方差

$$ Var[X] = \frac{n}{n-2} (n \gt 2) $$

### F分布

$ X \sim \chi^2(m), Y \sim \chi^2(n) $ 且 $X$ 与 $Y$ 独立，令 $ Z = \dfrac{X/m}{Y/n} $，则称$Z$服从**第一自由度为 $m$ 、第二自由度为 $n$ 的 $F$ 分布**，记为 $Z \sim F(m, n)$

若 $ Z \sim F(m, n) $，则 $ \dfrac{1}{Z} \sim F(n, m) $

#### 分布密度函数

$$ f_Z(z) = \begin{cases}
\frac{\Gamma(\frac{m+n}{2})}{\Gamma(\frac{m}{2})\Gamma(\frac{n}{2})}m^{m/2}n^{n/2}\frac{x^{\frac{m}{2}-1}}{(mx+n)^{(m+n)/2}}, & x \gt 0, \\
0, & x \leq 0.
\end{cases}
$$