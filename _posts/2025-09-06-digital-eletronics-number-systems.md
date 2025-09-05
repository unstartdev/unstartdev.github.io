---
layout: post
title: Digital Electronics - Number Systems
date: 2025-09-06 02:00:30 +0800
categories: Learning
tags:
- Digital Electronics
---
## Transfrom decimal to binary

### For fraction

1. Multiply by 2
2. Take the MSB
3. Repeat 1 and 2, unless the value is 1.0

## Unsigned Numbers

### 1's Complement

Getting by changing all "1" in source code to "0" in 1's complement.

### 2's Complement

2's complement = (1' complement) + 1

or

1. Start at LSB, keep as-is until meet the first 1.
2. Take the 1's complement for the remaining part (excluding the first 1).

## Signed Numbers

### Sign-Magnitude Form

Sign bit: the left most bit

### 1's Complement Form

In the complement form, a negative number is the 1's complement of the corresponding positive number.

### 2's Complement Form

In the 2's complement form, a negative number is the 2's complement of the corresponding postive number.

## The Decimal Value of Signed Numbers

### Sign-Magnitude

1. Sum the weights in all the magnitude bit positions where there are 1s and ignoring those positions where there are zeros.
2. Exam the sign bit to determine the sign.

### 1's Complement

1. Assign a negative value to the sign bit.
2. Sum the weights in all bit positions where there are 1s and ignoring those positions where are zeros.
3. **Add 1 to the result.** (Which is **different** in 2's complement)

### 2's Complement

The same as 1's complement but it is needed to remove the **step 3** in 1's complement.

> Processors use 2's complement for calculation, because substration is the same as adding a negative number.

A circuit composed of inverter and adder can easily transform between the forms above.

## Range of Signed Integer Numbers

$$
-(2^{n-1}) to +(2^{n-1} - 1)
$$

## Floating-Point Numbers (Single Precsion)

Size: 4Bytes

|S|Exponent|Mantissa(fraction)|
|---|---|---|
|1b|8b|23b|

$$
\text{Num} = (-1)^{\text{S}}(1+\text{F}{2^{\text{E}-127}})
$$

## Binary Coded Decimal (8421 BCD)

Use 4bit to represent each digit.

|BCD|Digit|
|---|---|
|0001|1|
|0010|2|
|0011|3|
|0100|4|
|0101|5|
|0110|6|
|0111|7|
|1000|8|
|1001|9|

Other values which is not in the table is **invalid**.

## Gray Code

Feature: it exhibits only a single bit change from one code word to the next in sequence.

Useful in the Analog-to-Digtal sensors.

### Binary-to-Gray Code

1. Take the MSB as-is
2. Going from left to right, XOR each adjacent pair of binary code bits to get the next Gray code bit.

### Gray-to-Binary

1. Take the MSB as-is
2. XOR binary code bit generated to the Gray code bit in the next adjacent position.