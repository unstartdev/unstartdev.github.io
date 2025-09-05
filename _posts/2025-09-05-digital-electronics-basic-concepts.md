---
layout: post
title: Digital Electronics - Basic Concepts
date: 2025-09-05 14:01:03 +0800
categories: Learning
tags:
- Digital Electronics
---
## The Composition of Scores

|Part|Ratio|
|---|---|
|Homework + Quiz|30%|
|Final exam|70%|

## How to Produce a Digital Signal

1. Discrete sample
2. Quantitized
3. Encode
4. Out

## Logic Level

The logic value, like "1" and "0", which we express in digital circuits, is a range of voltage level.

Example:

|Name|Voltage|
|---|---|
|HIGH|$2.7\mathrm{V} \leq u \leq 3.3\mathrm{V}$|
|Unacceptable|$0.8\mathrm{V} \leq u \lt 2.7\mathrm{V}$|
|LOW|$0 \leq u \lt 0.8\mathrm{V}$|

## Basic Components

### Gate

Perform fixed logic operations

1. Not Gate (aka Inverter)
    - Invert the input
2. AND Gate
    - Produces a HIGH output only when all the inputs are HIGH
3. OR Gate
    - Produces a LOW output only when all the inputs are LOW
4. XOR Gate
    - Produces a HIGH output only when all the inputs are oppsite

### Fixed-function ICs

Perform fixed specific functions

#### Adder

1. 1-bit Adder
    - Add 2 binary number
    - Has two output of carry and sum
2. Full Adder
    - Add A, B and the carry from the previous full adder
    - Has two output of carry and sum

Example: 74LS283