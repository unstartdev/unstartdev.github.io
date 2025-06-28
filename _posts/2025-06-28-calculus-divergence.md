---
layout: post
title: 工科数学分析-散度定理和高斯公式
date: 2025-06-28 17:39:24 +0800
categories: Learning
---
* toc
{:toc}

# 散度

$$ \mathrm{div} \vec{F} = \nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} $$

# 高斯公式

此公式将第二类将曲面积分与三重积分联系起来

设 $ \Sigma $ 为光滑闭曲面, $V$ 为其所围成的立体区域, $\Sigma$ 的单位外法向为 $\vec{e}_n = (\cos\alpha, \cos\beta, \cos\gamma)$

$$ \iiint_V \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right) \mathrm{d}x\mathrm{d}y\mathrm{d}z = \oiint_\Sigma \left(P\cos\alpha + Q\cos\beta + R\cos\gamma\right)\mathrm{d}S $$

或者对应地写成坐标积分的形式

$$ \iiint_V \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right) \mathrm{d}x\mathrm{d}y\mathrm{d}z = \oiint_\Sigma P\mathrm{d}y\mathrm{d}z + Q\mathrm{d}z\mathrm{d}x + R\mathrm{d}x\mathrm{d}y $$

或者写成向量形式

$$ \iiint_V \mathrm{div} \vec{F} \mathrm{d}V = \oiint_\Sigma \vec{F} \cdot \vec{e}_n \mathrm{d}S $$

## 格林第一公式

这个公式是定积分分部积分公式的推广

$$ \iint_\Sigma v\frac{\partial u}{\partial \vec{n}} = \iiint_\Omega \nabla v \cdot \nabla u \mathrm{d}x\mathrm{d}y\mathrm{d}z + \iiint_\Omega v \nabla^2 u \mathrm{d}x\mathrm{d}y\mathrm{d}z $$