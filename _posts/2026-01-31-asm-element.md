---
layout: post
title: 汇编程序语言-基本程序要素
date: 2026-01-31 16:14:40 +0800
category: The assembly language
---
## 常量

### 整型常量

```
[{+ | -}] digits [ radix ]
```

基数词可以为

- `h` 十六进制
- `r` 编码实数
- `q/o` 八进制
- `d/t` 十进制
- `b/y` 二进制

{% highlight asm %}
26
26d
11010011b
42q
42o
1Ah
{% endhighlight %}

以上这些表示的整型值都是26

特别地，以字母开头的十六进制整型常量开头要附加一个0以防汇编器将其识别为标识符

### 实数常量

```
[sign] integer.[integer] [exponent]
```

{% highlight asm %}
2.
+3.0
-11.1E+05
26.E5
{% endhighlight %}

至少需要一个数字和小数点来表示

### 字符常量

{% highlight asm %}
'A'
"a"
{% endhighlight %}

字符常量会以它的ASCII码值进行存取

### 字符串常量

{% highlight asm %}
'Hello'
"Hello"
'"Hello"'
{% endhighlight %}

## 保留字

- 指令助记符
- 寄存器名称
- 伪指令
- 属性（类型）
- 运算符
- 预定义符号

## 标识符

- 可以包含1到247个字符
- 不区分大小写
- 以字母、下划线、@、?或$开头
- 不能与保留字相同

## 指令

```
[label:] mnemonic [operands] [;comment]
```

### 标号

数据标号标识变量的位置

代码标号以冒号结束，作为跳转和循环的目标

{% highlight asm %}
.data
count DWORD 100 ;A data label

.code
loop: ;A code label
    nop
    jmp loop ;A meaningless loop
{% endhighlight %}

### 指令助记符

一些助记符的例子

- `mov` 传送（分配）数值
- `mul` 两个数值相乘
- `add` 两个数值相加
- `jmp` 跳转
- `sub` 从一个数值中减去另一个数值
- `call` 调用一个子程序

### 操作数

指令的操作数的数量范围为0~3个，每个操作数可以是寄存器、内存操作数、整数表达式和输入输出端口，操作数按固有顺序可以分为：**目的操作数**（第一个操作数）、**源操作数**（第二个操作数）

### 注释

{% highlight asm %}

mov ax, bx ;单行注释

COMMENT !
    多行注释
    感叹号可以被替换为其他符号只要不在注释中出现
!

{% endhighlight %}

## 伪指令

伪指令实际由汇编器执行而不会在运行时执行，他们被用于定义变量、宏和子程序，并为内存段分配名称

{% highlight asm %}
.data
var DWORD 26

.code
mov ax,var

;以上的.data和.code是段定义
{% endhighlight %}