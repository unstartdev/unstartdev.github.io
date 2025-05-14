---
layout: post
title: 工科数学分析-微分方程
date: 2025-05-10 10:32:22 +0800
categories: Learning
tags: calculus
---

# 前置

## 反导数表

记录一些常用且难记的函数对应的原函数

|函数|原函数|
|---|---|
|$ \sec^2 x $|$ \tan x + C $|
|$ - \csc^2 x $|$ \cot x + C $|
|$ \tan x \sec x $|$ \sec x + C $|
|$ -\cot x \csc x $|$ \csc x + C $|
|$ \frac{1}{1+x^2} $|$ \arctan x + C $|
|$ \frac{1}{\sqrt{1-x^2}} $|$ \arcsin x + C $|
|$ -\frac{1}{\sqrt{1-x^2}} $|$ \arccos x + C $|
|$ \frac{1}{\sqrt{x^2+1}} $|$ \sinh^{-1} x + C = \ln(x+\sqrt{x^2+1}) + C$|
|$ \frac{1}{\sqrt{x^2-1}} $|$ \ln(x+\sqrt{x^2-1}) + C$|

## 欧拉公式

$$ e^{i \theta} = \cos \theta + i \sin \theta $$

# 复习内容

## 二阶常系数线性微分方程的解法

### 常系数线性齐次微分方程

形式：
$$ L[y] = y''+py'+qy=0 (*)$$
其中p和q为常数。

解特征方程
$$ r^2+pr+q=0 $$
得
$$ r_{1,2} = \frac{-p\pm\sqrt{p^2-4q}}{2} $$
$r_1$ 和 $r_2$ 即为方程(*)的特征根

#### 根据特征根的不同情况可求出方程(*)的两个线性无关的特解及通解

1. 特征根为两实根

$$ y_1 = e^{r_1 x}, y_2 = e^{r_2 x} $$

$$ y = C_1 e^{r_1 x} + C_2 e^{r_2 x} $$

2. 一个二重特征根

特征根$ r = r_1 = r_2 $

由特征根得一特解 $ y_1 = e^{rx} $

设 $ y_2(x) = u(x) e^{rx} $ 其中u(x)待定且不为常数.

解$ L[y_2] = L[u(x) e^{rx}] $ 得 $ u''=0 $，此时不妨取 $ u(x) = x $ ，即得 $ y_2 = xe^{rx} $

故方程(*)的通解为
$$ y_1 = (C_1 + C_2 x)e^{rx} $$

3. 一对共轭复根

显然若特征方程没有实根，那么一定有一堆共轭复根。

不妨设 $ r_1 = \alpha + i \beta, r_2 = \alpha - i \beta $ ，按照上面的做法得 $$ y_1= e^{(\alpha + i \beta)x}=e^{\alpha x}(\cos \beta x + i \sin \beta x),\\ y_2= e^{(\alpha - i \beta)x}=e^{\alpha x}{(\cos \beta x - i \sin \beta x)} $$

利用线性叠加原理1可将含有虚数i的特解转为实值解
$$ \tilde{y_1} = \frac{1}{2} (y_1 + y_2) = e^{\alpha x}\cos \beta x, \\ $$
$$ \tilde{y_2} = \frac{1}{2i} (y_1 - y_2) = e^{\alpha x} \sin \beta x $$

即得通解
$$ y = C_1e^{\alpha x}\cos \beta x + C_2e^{\alpha x}\sin \beta x $$

#### 拓展到n阶常系数线性齐次微分方程
$$ y^{(n)}+a_1y^{(n-1)}+...+a_{n-1}y'+a_ny=0 $$

特征方程为
$$ r^n+a_1r^{n-1}+...+a_{n-a}r+a_n=0 $$

1. 特征单根r对应一个特解
$$ e^{rx} $$

2. k重实特征根对应k个线性无关的特解
$$ e^{rx}, xe^{rx}, x^2e^{rx}, ..., x^{k-1}e^{rx} $$

3. 每对单重共轭复根 $\alpha \pm i \beta$ 对应一对特解
$$ e^{\alpha x}\cos \beta x, e^{\alpha x}\sin \beta x $$

4. 每对k重共轭复根 $\alpha \pm i \beta$ 对应k对线性无关特解
$$ e^{\alpha x}\cos \beta x, xe^{\alpha x}\cos \beta x, ..., x^{k-1}e^{\alpha x}\cos \beta x $$
$$ e^{\alpha x}\sin \beta x, xe^{\alpha x}\sin \beta x, ..., x^{k-1}e^{\alpha x}\sin \beta x $$

以上所有特解都线性无关（证明略去）

### 常系数线性非齐次微分方程

$$ L[y] = y'' + py' + qy = f(x) \ \ \ (a)$$

一般的，方程(a)的解通常是其对应的齐次方程 $ L[y] = y'' + py' +qy = 0 \ \ \ (b)$ 的通解再加上方程(a)的一个特解

使用**待定系数法**，考虑(a)右端 $f(x)$ 的形式，有如下情况

#### (1) $ f(x) = e^{\lambda x}P_m(x), \\ \lambda 为常数, P_m 为 x 的 m 次多项式$

1. $ \lambda $ 不是特征方程 $ r^2 + pr + q =0 $ 的根

设
$$ y^* = e^{\lambda x}Q_m(x) $$
$$ Q_m(x) = b_0 x^m + b_1 x^{m-1} + ... + b_{m-1} x + b_m, \\ 此处的b_i(i=0,1,2,..m)即为所谓的待定系数 $$

将 $y^*$ 代回方程(a)中并比较左右两侧的系数即得特解

2. $ \lambda $ 是特征方程的单根

此时取
$$ y^* = xe^{\lambda x}Q_m(x) $$

3. $ \lambda $ 是特征方程的重根

此时取
$$ y^* = x^2e^{\lambda x}Q_m(x) $$

#### (2) $ f(x) = e^{\lambda x}[P_m(x)\cos \omega x + Q_m(x)\sin \omega x] $

1. 若 $ \lambda + i \omega $ 不是特征方程的根

此时取
$$ y^* = e^{\lambda x}[Q_m^{(1)}(x)\cos \omega x + Q_m^{(2)}(x)\sin \omega x] $$

2. 若 $ \lambda + i \omega $ 是特征方程的根

此时取
$$ y^* = xe^{\lambda x}[Q_m^{(1)}(x)\cos \omega x + Q_m^{(2)}(x)\sin \omega x] $$

### 欧拉方程

欧拉方程是一类可常系数化的微分方程

形如
$$ x^ny^{(n)} + p_1x^{n-1}y^{(n-1)} + \dots + p_{n-1}xy' + p_ny = f(x), \\ 其中p_i(i=1,2,\dots,n)为常数 $$

以二阶的欧拉方程为例
$$ x^2y'' + p_1xy' + p_2y = f(x) \ \ \ (b) $$

施加变换 $ x = e^t $ 或 $ t = ln x $
$$ y' = \frac{1}{x} \frac{dy}{dt}, y'' = \frac{1}{x^2}\left(\frac{d^2y}{dt^2} - \frac{dy}{dt}\right) $$

则方程(b)化为
$$ \frac{d^2y}{d^2t} - \frac{dy}{dt} + p_1\frac{dy}{dt} +p_2y = f(e^t) $$

显然已经为常系数的微分方程，用之前的方法求解，再将解变换回去即可

## 一阶线性微分方程

### 常数变易法

线性齐次方程的通解很容易解得，只需考虑如何求非齐次特解即可

若有齐次通解
$$ y = Ce^{-\int{P(x)dx}} $$

设C=C(x)得
$$ y = C(x)e^{-\int{P(x)dx}} $$

带入非齐次方程中解出 $ C(x) $ 即得非齐次特解

*不考虑记通解公式*
$$ y = Ce^{-\int{P(x)dx}} + e^{-\int{P(x)dx}}\int{Q(x)e^{\int{P(x)dx}}dx} $$

### 伯努利方程

一类可化为线性方程得微分方程

形如
$$ \frac{dy}{dx} + P(x)y = Q(x)y^n \ (n \neq 0, 1)$$
即
$$ y^{-n}\frac{dy}{dx} + P(x)y^{1-n} = Q(x) $$

作变换 $ y^{1-n} = z $ 得
$$ \frac{dz}{dx} = (1-n)y^{-n}\frac{dy}{dx} $$

代入方程中得
$$ \frac{dz}{dx} +(1-n)P(x)z = (1-n)Q(x) $$

已化为可用一般方法求解的线性微分方程了

### Riccati方程

若已知Riccati方程的一个特解则可以求出其特解

形如
$$ \frac{dy}{dx} = P(x)y^2 + Q(x)y + R(x) $$

有特解 $ y = \phi (x) $

设通解为 $ y = \phi (x) + u $
则 $ \frac{dy}{dx} = \frac{d\phi (x)}{dx} + \frac{du}{dx} $

代入方程中得
$$ \frac{du}{dx} = P(x)u^2 + [2P(x)\phi (x) + Q(x)]u $$

这是一个伯努利方程，可用上述方法解出特解u

### 降阶法中常用的替换

1. $ y^{(n)} = f(x) $ 型

连续积分即可

2. $ y'' = f(x, y') $ 型

做代换 $ p = y' $

例子. $ y'' + 2xy'^2 =0 $

3. $ y'' = f(y, y') $ 型

做代换 $ p = y' $

$$ \frac{dy}{dx} = p, \frac{d^2y}{dx^2} = \frac{dp}{dy}\bullet\frac{dy}{dx} =p\frac{dp}{dy} $$

例子. $ yy''-y'^2=0 $