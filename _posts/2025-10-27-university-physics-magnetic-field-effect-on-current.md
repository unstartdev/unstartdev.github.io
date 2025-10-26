---
layout: post
title: 大学物理III-17磁场对电流的作用
date: 2025-10-27 01:01:56 +0800
categories: Learning
tags:
- University Physics
---
* toc
{:toc}

## 洛伦兹力

$$
\vec{F} = q\vec{v} \times \vec{B}
$$

几种特殊情况：

### $\vec{v} \perp \vec{B}$ 圆周运动

$$
R = \frac{mv}{qB}, \  T=\frac{2\pi R}{v}=\frac{2\pi m}{qB}
$$

### $\left\langle \vec{v}, \vec{B} \right\rangle = \theta$ 等距螺旋线运动

$$
R= \frac{mv\sin \theta}{qB}, \ T=\frac{2\pi m}{qB}
$$

螺距 $h=v_{∥}T=\dfrac{2\pi mv\cos \theta}{qB}$

## 霍尔效应

$$
U_{H} = R_H \frac{IB}{d}, \  R_H = \begin{cases}
\frac{1}{nq}, & \ \text{载流子为正电荷} \\
-\frac{1}{ne}, & \ \text{载流子为负电荷}
\end{cases}
$$

## 电流元在外磁场中的受力

$$
\mathrm{d}\vec{F} = I \mathrm{d}\vec{l}\times\vec{B} \\
\vec{F} = \int I\mathrm{d}\vec{l} \times \vec{B}
$$

弯曲导线在均匀磁场中所受磁场力的总和，应等于从起点到终点载有相同电流的直导线所受的磁场力

$$
F=IlB\sin\theta
$$

## 均匀磁场对线圈的作用

$$
\vec{M} = \vec{p}_m \times \vec{B}, \ \vec{p}_m = NIS\vec{e}_n
$$

$\vec{e}_n$ 为线圈平面的法线方向

考虑法线与磁场的夹角 $\varphi$

1. $\varphi = \pi / 2, \vec{p}_m \perp \vec{B}, M_{\text{max}} = NIBS$ 力矩作用将使夹角减少
2. $\varphi = 0, M = 0, \vec{p}_m \parallel \vec{B}$ 稳定平衡状态
3. $\varphi = 0, M = 0, \vec{p}_m = -k\vec{B}$ 处于非稳定平衡状态，稍微扰动即可使线圈装动使 $\varphi$ 减小

## 磁力距对载流线圈做功

$$
W = I \Delta \Phi_m
$$