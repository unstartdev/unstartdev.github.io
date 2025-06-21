---
layout: post
title: 工科数学分析-10.6泰勒级数
date: 2025-06-18 17:38:38 +0800
categories: Learning
tags:
- calculus
---
# 拉格朗日余项

$$ R_n(x) \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1} $$

# 函数能展开为泰勒级数的条件

## 充要条件

1. 函数 $f(x)$ 在区间 $(x_0-R, x_0+R)$ 有任意阶导数
2. $\forall x \in (x_0-R, x_0+R)$
$$ \lim_{n \to \infty} R_n(x) = 0 $$

## 充分条件

$$ \exists M, \forall x \in (x_0-R,x_0+R), \forall n \in \mathbb{N}, |f^{(n)}(x)| \leq M $$

则 $f(x)$ 能在 $(x_0-R, x_0+R)$ 内展开为泰勒级数

# 记住以下展开式

$$ \frac{1}{1+x} = \sum_{n=0}^\infty (-x)^n = 1 - x + x^2 - x^3 + \ldots + (-1)^n x^n + \ldots, x \in (-1, 1) $$

$$ \sqrt{1+x} = 1 + \frac{1}{2} x + \sum_{n=2}^\infty (-1)^n\frac{(2n-3)!!}{(2n)!!} x^n, x \in [-1, 1] $$

$$ \frac{1}{\sqrt{1+x}} = 1 - \frac{1}{2}x + \sum_{n=2}^\infty (-1)^n\frac{(2n-1)!!}{(2n)!!}x^n, x \in (-1, 1] $$

$$ \mathrm{e}^n = \sum_{n=0}^\infty \frac{x^n}{n!}, x \in (-\infty, +\infty) $$

$$ \frac{1}{1-x} = \sum_{n=0}^\infty x^n, x \in (-1, 1) $$

$$ \ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1} x^n}{n}, -1 \lt x \leq 1 $$

$$ \sin x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!}, -\infty \lt x \lt +\infty $$

$$ \cos x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!}, -\infty \lt x \lt +\infty $$

$$ (1+x)^p = \sum_{n=0}^\infty \mathrm{C}_{p}^n x^n, -1 \lt x \lt 1 $$