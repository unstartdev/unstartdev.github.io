---
layout: post
title: 工科数学分析-格林公式
date: 2025-05-26 10:05:18 +0800
categories: Learning
tags:
- calculus
---
# 引入

（工科数学分析P178 (B) 2·华中科技大学出版社）设有稳定的流体运动（即流速不随时间改变的）流层充分薄,可看成一个平面问题,每点处的流速可表为向量 $\vec{v}(x,y)=P(x,y)\vec{i}+Q(x,y)\vec{j}$. 平面上给定曲线$C$,并给定了单位法向量的指向.

(1) 用微元法证明:单位时间内流出曲线$C$的流量微元为

$$ \mathrm{d}q(x,y)=[P(x,y)\cos(\vec{e}_n,x)+Q(x,y)\cos(\vec{e}_n,y)]\mathrm{d}s $$

(2) 用微元法证明:单位时间内从区域$D$（$D$为$C$所围区域）内渗出来或漏下去的流量微元为

$$ \mathrm{d}q^*(x,y)=\left[\frac{\partial P(x,y)}{\partial x} + \frac{\partial Q(x,y)}{\partial y}\right]\mathrm{d}x\mathrm{y} $$

(3) 证明:流体通过$C$的流量为

$$ \oint_C [P\cos(\vec{e}_n, x) + Q\cos(\vec{e}_n, y)]\mathrm{d}s = \iint_D \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}\right)\mathrm{d}x\mathrm{d}y $$

# 格林公式

设$D$是以分段光滑曲线$L$为边界的平面闭区域，函数$P(x,y)$和$Q(x,y)$在$D$上具有一阶连续偏导数，则

$$ \oint_L P\mathrm{d}x + Q \mathrm{d}y = \iint_D \begin{pmatrix} \frac{\partial}{\partial x} & \frac{\partial}{\partial y} \\ P & Q \end{pmatrix} \mathrm{d}x\mathrm{d}y $$