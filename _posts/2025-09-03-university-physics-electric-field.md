---
layout: post
title: 大学物理III-14电场
date: 2025-09-03 13:31:46 +0800
categories: Learning
tags:
- University Physics
---
* toc
{:toc}

## 库仑定律

$$
\vec{F} = \frac{1}{4\pi \varepsilon_0} \frac{q_1 q_2}{r^2}\vec{e}_r
$$

## 电场强度

$$
\begin{aligned}
\vec{E} &= \frac{\vec{F}}{q_0} \\
& = \frac{q}{4\pi \varepsilon_0 r^2}\vec{e}_r \  \text{点电荷} \\
& = \frac{1}{4\pi \varepsilon_0} \int \frac{\mathrm{d}q}{r^2} \vec{e}_{r} \  \text{点电荷连续分布}
\end{aligned}
$$

定义以下电荷密度

- $\rho$ 体密度
- $\sigma$ 面密度
- $\lambda$ 线密度

于是电荷的微元可以是

$$
\begin{aligned}
\mathrm{d}q &= \rho \mathrm{d}V \\
& = \sigma \mathrm{d}S \\
& = \lambda \mathrm{d}l 
\end{aligned}
$$

### 电荷在电场中的受力

根据电场强度的定义式可知

$$
\vec{F} = q\vec{E}
$$

$$
\vec{F} = \int \vec{E}\mathrm{d}q
$$

#### 电偶极子

一堆带电相反的电荷

定义电矩 $\vec{p}$

$$
\vec{p} = q\vec{l}
$$

##### 外电场对电偶极子的作用

$$
\vec{F} = 0 \\
\vec{M} = \vec{p} \times \vec{E}
$$

## 电场强度通量

微元定义

$$
\mathrm{d}\Phi_e = E\mathrm{d}S\cos \theta = \vec{E} \cdot \mathrm{d}\vec{S}
$$

容易看出这是个标量

定义 $\mathrm{d}S_{\bot}$ 为 $\mathrm{d}S$ 在垂直于场强方向上的投影面积

所以

$$
\Phi_e = \int \mathrm{d}\Phi_e = \int_S \vec{E}\cdot\mathrm{d}\vec{S} = \oint \vec{E}\mathrm{d}\vec{S}
$$

## 电场中的高斯定理

$$
\Phi_e = \oiint_S \vec{E}\cdot\mathrm{d}\vec{S} = \frac{1}{\varepsilon_0} \sum_{i=1} q_i
$$

或者说

$$
\oiint_S \vec{E}\cdot\mathrm{d}\vec{S} = \frac{1}{\varepsilon_0} \int_V \rho \mathrm{d}V
$$

可以描述为：在通过该闭合曲面的电场通量，与场源所发出的守恒

显然的，如果闭合面 $S$ 不包围任何电荷，那么 $\Phi_e = 0$

## 常见带电形体的电场分布

### 均匀带电球面

$$
E = \begin{cases}
\dfrac{1}{4\pi\varepsilon_0} \cdot \dfrac{q}{r^2} \ & (r \gt R) \\
0 \ & (r \lt R)
\end{cases}
$$

## 均匀带电球体

$$
E = \begin{cases}
\dfrac{1}{4\pi\varepsilon_0} \cdot \dfrac{q}{r^2} \ & (r \geq R) \\
\dfrac{1}{4\pi\varepsilon_0} \cdot \dfrac{rq}{R^3} \ & (r \leq R)
\end{cases}
$$

## 无限长均匀带电直线

$$
E = \frac{\lambda}{2\pi\varepsilon_0 r}
$$

## 无限长圆柱面

$$
E = \begin{cases}
0 \ & (r \lt R) \\
\dfrac{\lambda}{2\pi\varepsilon_0 r} & (r \gt R)
\end{cases}
$$

## 无限大均匀带电平板

$$
E = \frac{\sigma}{2\varepsilon_0}
$$

## 两异号平板

$$
E = \frac{\sigma}{\varepsilon_0}
$$

## 电势

$$
U_a = \frac{W_a}{q_0} = \int_a^{\text{电势零点}} \vec{E} \cdot \mathrm{d}\vec{l}
$$

通常取**无限远**作为**电势零点**

电势的相对值具有实际意义

### 电势差

$$
U_{ab} = U_a - U_b = \int_a^b \vec{E} \cdot \mathrm{d}\vec{l}
$$

### 点电荷电场中的电势分布

$$
\begin{aligned}
U_P & = \int_P^\infty \vec{E} \mathrm{d}\vec{l} = \int_{r}^\infty \frac{q}{4\pi\varepsilon_0 t^2} \mathrm{d}t \\
& = \frac{q}{4\pi\varepsilon_0 r} \  (r \neq 0)
\end{aligned}
$$

多个点电荷进行叠加计算

$$
U_P = \sum_{i=1}^n \dfrac{q_i}{4\pi\varepsilon_0 r_i}
$$

对应到电荷连续分布

$$
U_P = \int \frac{\mathrm{d}q}{4\pi\varepsilon_0 r}
$$

其中 $r = r(t)$ 为 $\mathrm{d}q$ 到场点 $P$ 的距离

## 等势面

1. 电荷沿等势面移动，电场力做功为0
2. 等势面与电场线处处正交
3. 电场线从高电势指向低电势
4. 等势线密集处电场线也密集
5. 规定相邻等势面间电势差相等

## 电势与场强的微分关系

$$
\vec{E} = - \frac{\mathrm{d}U}{\mathrm{d}n}\vec{e}_n = - \nabla U
$$

$\frac{\mathrm{d}U}{\mathrm{d}n}$ 为电势沿等势面法线的方向导数

$E_l = -\frac{\mathrm{d}U}{\mathrm{d}l}$ 为 $\vec{E}$ 在 $l$ 方向的分量

## 计算方法

### 场强计算

1. 已知场强公式

  场强矢量叠加

2. 电场分布具有对称性

  构造一个闭合曲面，使用高斯定理计算

3. 电势函数可求/可知

  对电势取梯度

### 电势计算

1. 已知场强分布

  根据定义式使用路径积分

2. 电势叠加

  已知电势公式直接进行叠加计算