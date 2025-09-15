---
layout: post
title: Digital Electronics - Boolean Expression and Its Simplification
date: 2025-09-15 10:59:14 +0800
categories: Learning
tags:
- Digital Electronics
---
The knowledge about boolean alegebra and evalation of boolean expression is already learnt in the discrete mathematics, so I will not write again, but I will still take notes about something that has forgotten.

## Boolean Expression Simplification

### Special Distributive Law

$$
\begin{aligned}
(A+B)(A+C) & = AA + AC + AB + BC \\
& = A + AC + AB + BC \\
& = A(1 + C) + AB + BC \\
& = A \cdot 1 + AB + BC \\
& = A(1 + B) + BC \\
& = A \cdot 1 + BC \\
& = A + BC
\end{aligned}
$$

So, we have the following rules.

$$
A + AB = A(1+B) = A \cdot 1 = A \\
A + A^\prime B = (A + A^\prime )(A + B) = 1 \cdot (A + B) = A + B
$$

### Transforming into All NAND Expression through DeMorgan's Theorems

Take twice complement of the original expression.

$$
\begin{aligned}
Y &= (B(A^\prime+C^\prime))^\prime \\
&= (B(AC)^\prime)^\prime
\end{aligned}
$$

### The Karnaugh Map

The main method is grouping the adjacent "1"s following the rules below.

1. Maximize the size of groups and minimize the number of groups.
2. Ensure the number of cells that every group contains is the power of 2.
3. Must include all the "1"s.
4. Cell already in a group can be used again, as long as the new group you intend to create includes a new cell.