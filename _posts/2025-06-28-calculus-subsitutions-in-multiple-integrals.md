---
layout: post
title: 工科数学分析-多重积分换元法
date: 2025-06-28 19:59:07 +0800
categories: Learning
---
* toc
{:toc}

# 前置

## 雅可比行列式

$$ \frac{\partial \left(F_1, F_2, \dots, F_n\right)}{\partial\left(x_1, x_2, \dots, x_i\right)} = \begin{vmatrix} 
\dfrac{\partial F_1}{\partial x_1} & \dfrac{\partial F_1}{\partial x_2} & \ldots & \dfrac{\partial F_1}{x_i} \\ \\
\dfrac{\partial F_2}{\partial x_1} & \dfrac{\partial F_2}{\partial x_2} & \ldots & \dfrac{\partial F_2}{\partial x_i} \\ \\
\vdots & \vdots & \ddots & \vdots \\ \\
\dfrac{\partial F_n}{\partial x_1} & \dfrac{\partial F_n}{\partial x_2} & \dots & \dfrac{\partial F_n}{\partial x_i}
\end{vmatrix} $$

# 多元积分换元法

以二元积分为例

$$ \iint_R f(x, y)\mathrm{d}x\mathrm{d}y = \iint_G f(g(u, v), h(u, v)) \left| \frac{\partial \left(x, y\right)}{\partial \left(u, v\right)}\right| \mathrm{d}u\mathrm{d}v $$

其中的雅可比行列式称为伸缩系数，以下为常见的伸缩系数

## 二重积分

### 极坐标系

从直角坐标系转换到极坐标系下

$$ \mathrm{d}x\mathrm{d}y = r\mathrm{d}r\mathrm{d}\theta $$

## 三重积分

### 柱坐标系

$$ \mathrm{d}x\mathrm{d}y\mathrm{d}z = r\mathrm{d}r\mathrm{d}\theta\mathrm{d}z $$

### 球坐标系

$$ \mathrm{d}x\mathrm{d}y\mathrm{d}z = r^2\sin\phi \mathrm{d}r\mathrm{d}\phi\mathrm{d}\theta $$