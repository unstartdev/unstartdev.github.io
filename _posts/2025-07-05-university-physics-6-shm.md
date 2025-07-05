---
layout: post
title: 大学物理III-6简谐振动
date: 2025-07-05 19:12:00 +0800
categories: Learning
tags:
- University Physics
---
* toc
{:toc}

# 简谐振动的判据

$$ f = -kx$$

$$ \frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + \omega^2 x = 0 $$

$$ x = A\cos (\omega t + \varphi) $$

# 弹簧振子

$$ \frac{k}{m} = \omega^2 $$

$$ T = 2\pi\sqrt{\frac{m}{k}} $$

# 单摆

$$ \omega^2 = \frac{g}{l} $$

$$ T = 2\pi\sqrt{\frac{l}{g}} $$

# 复摆

![复摆](https://i.ooxx.ooo/i/YjMzM.jpg)

$$ \vec{M} = \vec{l} \times \vec{F} $$

其中

$$ M = -mgl\sin \theta = J\alpha = J \frac{\mathrm{d}^2 \theta}{\mathrm{d}t^2} $$

应用近似 $\sin\theta \approx \theta$

$$ -mgl\theta = J\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2} $$

套用形式

$$ \frac{\mathrm{d}^2 \theta}{\mathrm{d} t} + \omega^2\theta = 0 $$

即

$$ \omega = \sqrt{\frac{mgl}{J}} $$

# 扭摆

$$ M_z = -D\theta $$

$$ J_z \frac{\mathrm{d}^2 \theta}{\mathrm{d}t^2} = -D \theta $$

即

$$ \omega = \sqrt{\frac{D}{J_z}} $$

# 同方向同频率简谐振动的合成

$$ x_1 = A_1\cos(\omega t + \varphi_1) $$

$$ x_2 = A_2\cos(\omega t + \varphi_2) $$

$$ A = \sqrt{A_1^2 + A_2^2 + 2 A_1 A_2 \cos(\varphi_2 - \varphi_1)} $$

$$ \tan \varphi = \frac{A_1 \sin \varphi_1 + A_2 \sin \varphi_2}{A_1 \cos \varphi_1 + A_2 \cos \varphi_2} $$

# 两个同方向不同频率的简谐振动的合成

运用和差化积公式

$$ x = \left(2A_1 \cos \frac{\omega_1 - \omega_2}{2}t\right)\cos \frac{\omega_1 + \omega_2}{2} t $$

## 拍频(振幅变化的频率)

$$ \nu = \nu_2 - \nu_1 $$