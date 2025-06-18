---
layout: post
title: 概率论与数理统计-5大数定律和中心极限定理
date: 2025-06-18 02:58:34 +0800
categories: Learning
tags:
- Probability and Statistics
---
# 概率收敛

## 依概率收敛到 $Y$

如果 $ \forall \epsilon \gt 0$

$$ \lim_{n \to \infty} P(\omega: |X_n(\omega) - Y(\omega)| \geq \epsilon) = 0 $$

称 $X_1,X_2,\ldots$ 依概率收敛到 $Y$ ,即 $X_n \overset{P}{\rightarrow} Y$

## 以概率1收敛到 $Y$

如果

$$ P(\omega: \lim_{n \to \infty} X_n(\omega) = Y_n(\omega)) = 1 $$

称 $X_1,X_2,\ldots$ 以概率1收敛到 $Y$ ,即 $X_n \overset{a.s.}{\rightarrow} Y$

# 大数定律

## 弱大数定律

### 切比雪夫不等式

设随机变量 $X$ 的方差存在,则对任意 $\epsilon \gt 0$ 有

$$ P(|X-E[X]| \geq \epsilon) \leq \frac{Var[X]}{\epsilon^2} $$

### 切比雪夫弱大数定律

设 $X_1,X_2,\ldots$ 为随机变量序列, $E[X_i]=\mu, Var[X_i] \leq C, i = 1,2,\ldots$, 则 $\bar{X} \overset{P}{\rightarrow} \mu$

### 辛钦弱大数定律

设 $X_1,X_2,\ldots$ 为**独立同分布**随机变量序列,具有有限的期望 $\mu$,则 $\bar{X} \overset{P}{\rightarrow} \mu$

## 强大数定律

*不考,懒了*

# 中心极限定理

设 $X_1,X_2,\ldots$ 为随机变量序列,具有有限的数学期望和方差,若

$$ \frac{\sum_{k=1}^n(X_k-E[X_k])}{\sqrt{Var[\sum_{k=1}^n X_k]}} \overset{d}{\rightarrow} N(0,1) $$

## 林德伯格-莱维定理

随机变量序列 $X_1, X_2, \ldots$ 满足:

(1) 独立同分布

(2) 具有有限的数学期望 $\mu$ 和方差 $\sigma^2$

则其服从中心极限定理,即

$$ \lim_{n \to \infty} P\left(\frac{1}{\sigma\sqrt{n}}\left[\sum_{k=1}^n X_k - n\mu\right] \leq x\right) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^x e^{-\frac{u^2}{2}}\mathrm{d}u $$

**NB:** 即 $n$ 充分大时该随机变量序列的分布近似为正态分布,上面的式子不过是将其进行了标准化,变为标准正态分布进行计算

## 棣莫弗-拉普拉斯定理

随机变量序列 $X_1, X_2, \ldots$ 满足:

(1) 独立同分布

(2) $ X_n \sim B(1,p) $

则其服从中心极限定理,即

$$ \lim_{n \to \infty} P\left(\frac{1}{\sqrt{np(1-p)}}\left[\sum_{n=1}^nX_k - np \right] \leq x\right) = \frac{1}{2\pi}\int_{-\infty}^x e^{\frac{x^2}{2}} \mathrm{d}x $$