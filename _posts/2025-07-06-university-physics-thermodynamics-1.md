---
layout: post
title: 大学物理III-12热力学第一定律
date: 2025-07-06 18:58:28 +0800
categories: Learning
tags:
- University Physics
---
# 理想气体内能

$$ U = U(T) = \frac{i}{2}\nu RT $$

其中 $i$ 为气体分子的自由度

# 热力学第一定律

$$ \Delta U = Q - W $$

其中 $W$ 为系统对外界做的功

# 摩尔热容

热容量

$$ C^\prime = \frac{\mathrm{d}Q}{\mathrm{d}T} $$

摩尔热容

$ 1 \mathrm{mol} $ 物质温度升高 $1\mathrm{K}$ 所吸收的热量

$$ C^\prime = \nu C $$

## 定体摩尔热容

$$ C_V = \frac{(\mathrm{d} Q)_V}{\nu \mathrm{d}T} = \frac{i}{2}R $$

于是理想气体内能表达式也可以写为

$$ U = \nu C_V T $$

## 定压摩尔热容

$ 1 \mathrm{mol} $ 理想气体在等压过程中吸收的热量 $\mathrm{d}Q_P$ , 温度升高 $\mathrm{d}T$,其定压摩尔热容为

$$ C_P = \frac{(\mathrm{d}Q)_P}{\nu \mathrm{d}T} = \frac{i+2}{2}R $$

可以看出 $C_P = C_V + R$

## 定压摩尔热容与定体摩尔热容之比

$$ \gamma = \frac{2+i}{i} $$

# 绝热过程

与外界无热量交换的过程

特征

$$ \mathrm{d} Q = 0 $$

## 绝热方程

$$ V^{\gamma - 1}T = \text{CONSTANT} $$

$$ pV^{\gamma} = \text{CONSTANT} $$

$$ p^{\gamma - 1}T^{-\gamma} = \text{CONSTANT} $$

## 绝热过程与等温过程图线比较

![绝热线与等温线](https://i.ooxx.ooo/i/YTg5N.jpg)

绝热线的斜率更大

# 循环过程

系统经过一系列变化状态过程后,又回到原来的状态的过程叫**热力学循环过程**

在任何一个循环过程中,系统所做的净功在数值上等于 $p-V$ 图上循环曲线所包围的面积

## 热机效率

$$ \eta = \frac{W}{Q_1} =  \frac{Q_1 - \vert Q_2 \vert}{Q_1} = 1 - \frac{\vert Q_2 \vert}{Q_1} $$

其中 $Q_2$ 为系统向低温热源放出的热量, $Q_1$ 为系统从高温热源吸收的热量

## 致冷机效率

$$ \epsilon = \frac{Q_2}{\vert A \vert} = \frac{Q_2}{\vert Q_1 \vert - Q_2} $$

其中 $Q_2$ 为致冷机从低温热源吸收的热量, $Q_1$ 为系统向高温热源放出的热量

## 卡诺循环

卡诺循环是由两个准静态**等温**过程和两个准静态**绝热**过程组成的循环过程

### 卡诺热机效率

$$ \eta = 1 - \frac{T_2}{T_1} $$

### 卡诺热机净功

$$ W = nR(T_h - T_c)\ln \frac{V_2}{V_1} $$

### 卡诺致冷机效率

$$ \epsilon = \frac{T_2}{T_1-T_2} $$
