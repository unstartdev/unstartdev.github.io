---
layout: post
title: 工科数学分析-第一类曲线积分
date: 2025-05-22 14:45:16 +0800
categories: Learning
tags:
- calculus
---
# 背景

求已知线密度 $ \delta(x, y, z) $ 的空间曲线 $ \Gamma $ 的质量

# 曲线的弧长

## 弧长微分

对于参数方程表示的曲线 $ C： \vec{r} = x(t)\vec{i} + y(t)\vec{j} + z(t)\vec{k} $

其切向量为

$$ \vec{v}  = \frac{\mathrm{d}\vec{r}}{\mathrm{d}t} = \frac{\mathrm{d}x(t)}{\mathrm{d}t}\vec{i}+\frac{\mathrm{d}y(t)}{\mathrm{d}t}\vec{j} + \frac{\mathrm{d}z(t)}{\mathrm{d}t}\vec{k} $$

$$ \mathrm{d}s = ||\vec{v}||\mathrm{d}t = \sqrt{\left(\frac{\mathrm{d}x(t)}{\mathrm{d}t}\right)^2 + \left(\frac{\mathrm{d}y(t)}{\mathrm{d}t}\right)^2 + \left(\frac{\mathrm{d}z(t)}{\mathrm{d}t}\right)^2}\mathrm{d}t $$

所以其弧长为

$$ s = \int_C ds $$

对于显函数表示的曲线 $ C\prime: y = f(x) $

$$ \mathrm{d}s = \sqrt{1 + (f^\prime(x))^2}\mathrm{d}x $$

# 结

所以 $ \Gamma $ 的质量为

$$ M = \int_\Gamma \delta(x(t), y(t), z(t)) ||\vec{v}_\Gamma||\mathrm{d}t $$

计算第一类曲线积分的要点是找出曲线的参数表示

## 延申

### $ \Gamma $ 上的质量在各坐标平面上的一阶矩

$$ M_{yz} = \int_\Gamma x \delta \mathrm{d} s, M_{zx} = \int_\Gamma y\delta\mathrm{d}s, M_{xy} = \int_\Gamma z\delta\mathrm{d}s $$

### 重心坐标

$$ \bar{x} = M_{yz}/M, \bar{y} = M_{zx}/M, \bar{z} = M_{xy}/M $$

### 对坐标轴的转动惯量

$$ J_x = \int_\Gamma (y^2 + z^2) \delta\mathrm{d}s, J_y = \int_\Gamma (z^2 + x^2) \delta\mathrm{d}s, J_z =  \int_\Gamma (x^2 + y^2) \delta\mathrm{d}s $$

### 封闭曲线

使用记号 $ \oint_\Gamma f(\mathbf{P})\mathrm{d}s $