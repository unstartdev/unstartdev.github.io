---
layout: post
title: 大学物理III-11.气体动理论
date: 2025-05-15 19:02:33 +0800
categories: Learning
tags: 
- "University Physics"
---
# 引入

## 常用量

- 分子质量 $ m $
- 分子平均速度 $ \bar{v} $
- 气体压强 $ p $
- 体积 $ V $
- 温度 $ T $
- 物质的量 $ \gamma 或者 n $

## 单位

### 压强

$$ 1Pa = 1N \cdot m^{-2} $$

$$ 1atm = 1.013 \times 10^5Pa $$

### 温度

热力学温标与摄氏温标的转换关系

$$ T = 273.15 + t $$

# 内容

## 平衡状态

孤立系统，经过一定的时间，系统达到一个稳定的的状态（各宏观量量不变）

## 热力学第零定律

如果系统B和C分别于A的同一状态处于热平衡，那么B和C接触时也处于热平衡

## 热力学第三定律

不可能使一个物体冷却到绝对零度$ 0K $

## 分子动理论基本模型

1. 分子与分子间存在距离
2. 分子间存在相互作用力
3. 分子时刻在做无规则运动

存在 $ r_0 \approx 10^{-10} m $ 使得分子间的作用力为0，当 $ r > r_0 $ 时表现为引力，当 $ r < r_0 $ 时表现为斥力

## 理想气体状态方程及一些常量

### 物质的量

$$ n = \frac{N}{N_A}, N为分子数 $$

$$ N_A = 6.02 \times 10^{23} mol^{-1} $$

### 理想气体模型

1. 分子本身的尺度与分子距离相比可以忽略不计
2. 除碰撞瞬间，分子与分子及容器壁间无相互作用
3. 发生的碰撞均为完全弹性碰撞

即温度不太低、压强不太大的小范围气体

### 前置定律

#### 波意尔定律

$$ pV = constant $$

#### 盖——吕萨克定律

$$ \frac{V}{T} = constant $$

#### 查理定律

$$ \frac{P}{T} = constant $$

### 理想气体状态方程

$$ pV = nRT $$

摩尔气体常量

$$ R = 8.31J \cdot mol^{-1} \cdot K^{-1} $$

$$ p = \rho kT, \rho = \frac{N}{V} 为分子数密度 $$

玻尔兹曼常数

$$ k = \frac{R}{N_A} = 1.38 \times 10^{-23} J/K $$

### 道尔顿分压定律

总气体压强等于各气体分压之和

*外拓：一定体积、温度下，气体分压与气体分子数成正比*

## 麦克斯韦气体分布规律

### 麦克斯韦速率分布密度函数

$$ f(v) = \frac{\mathrm{d}N}{N} = 4\mathrm{\pi}\left(\frac{m}{2\mathrm{\pi}kT}\right)^{3/2}v^{2}\mathrm{e}^{-\frac{mv^2}{2kT}} $$

#### 最概然速率

由 $ \dfrac{\mathrm{d}f(v)}{\mathrm{d}v} = 0 $ 解出 $ v = v_p = \sqrt{\dfrac{2\mathrm{k}T}{m}} \approx 1.41\sqrt{\dfrac{\mathrm{k}T}{m}} $

替换为宏观量有

$$ v_p = \sqrt{\frac{2\mathrm{R}T}{M}} $$

表明在一定温度下分布在 $ v_p $ 附近的相对分子数最多

#### 平均速率

$$ \bar{v} = \sqrt{\frac{8\mathrm{k}T}{\mathrm{\pi}m}} \approx 1.60\sqrt{\frac{\mathrm{k}T}{m}} = 1.60\sqrt{\frac{\mathrm{R}T}{M}} $$

#### 方均根速率

$$ v_{rms} = \sqrt{\frac{3\mathrm{R}T}{M}} $$
