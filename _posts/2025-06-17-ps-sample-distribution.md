---
layout: post
title: 概率论与数理统计-6.3抽样分布
date: 2025-06-17 10:11:37 +0800
categories: Learning
tags:
- Probability and Statistics
---
# 样本与总体方差、均值的关系

对于总体 $X$ 和来自它的样本 $(X_1, X_2, X_3, \ldots, X_n)$,且 $E[X]=\mu, \, Var[X] = \sigma^2$

$$ E[\bar{X}] = \mu,\, Var[\bar{X}] = \frac{\sigma^2}{n}, \\ E[S_n^2] = \frac{n-1}{n}\sigma^2, \, E[S_n^{*2}] = \sigma^2$$

## 推论

总体 $ X \sim N(\mu, \sigma^2) $

(1) $\bar{X}$ 与 ${S_n^2}$ 相互独立,且

$$ \bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right) $$

$$ \frac{(n-1)S_n^{*2}}{\sigma^2} = \frac{nS_n^2}{\sigma^2} \sim \chi^2(n-1) $$

(2) 

$$ \frac{\bar{X} - \mu}{S_n^*}\sqrt{n} = \frac{\bar{X} - \mu}{S_n}\sqrt{n-1} \sim t(n-1) $$

(3) 

$$ \frac{S_{1m}^{*2} / \sigma_2^2}{S_{2n}^{*2} / \sigma_1^2} = \frac{\dfrac{m}{m-1}S_{1m}^2 / \sigma_1^2}{\dfrac{n}{n-1}S_{2n}^2 / \sigma_2^2} \sim F(m-1, n-1) $$

(4)

$$ \frac{(\bar{X} - \bar{Y}) - (\mu_1 - \mu_2)}{S_\omega \sqrt{\dfrac{1}{m}+\dfrac{1}{n}}} \sim t(m+n-2) $$

其中

$$ S_\omega = \sqrt{\dfrac{mS_{1m}^2 + nS_{2n}^2}{m+n-2}} $$


**NB:** 注意其中 $S_n^*$ 和 $S_n$ 的区别, 切记切记

# 分位数

$$ P(X \leq \phi_\alpha(n)) = \alpha $$

称 $\phi_\alpha(n)$ 为分布 $\phi(n)$ 的 **$\alpha$ 分位数**