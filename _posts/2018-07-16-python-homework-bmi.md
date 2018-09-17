---
layout: post
title: Python课后作业——bmi计算器
date: 2018-07-16 09:51:07 +0800
categories: Python
---
哇呀，好久没更新过blog啦，blog也有些变化了，机房搬进了德国法兰克福，还有几个合租的，所以嘛，总算可以用得起1G RAM的VPS啦！

话不多说，进入正题，放假在家学了点Python，顺便写了个BMI(身高体重指数)计算器，把代码放出来吧
{% highlight python %}
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
height_str = input('Height: ')
height = float(height_str)
weight_str = input('Weight: ')
weight = float(weight_str)
bmi = weight / (height * height)
if bmi < 18.5:
    print('你过轻了，请注意营养')
elif bmi >= 18.5 and bmi < 25:
    print('正常哦，继续保持')
elif bmi >= 25 and bmi < 28:
    print('过重了呢，多多运动')
elif bmi >= 28 and bmi <= 32:
    print('肥胖呢，注意哦，你可能需要找医生了')
elif bmi > 32:
    print('严重肥胖，一定要找医生')
else:
    print('程序写错了呢QAQ')
{% endhighlight %}


这段Python中的开头部分定义了几个变量,height\_str和height，weight\_str和weight,带\_str后辍的是用input()函数由用户导入的，它们这时候还是字符串，所以无法直接与if的整数进行比较，而用户输入的数字是可能包含小数点的，所以使用float()函数将字符串变成浮点类这样就能和整数类进行比较了。

bmi部分便是身高体重指数的计算公式,当然你也可以用pow函数来计算平方~~PS：当时没找到资料~~那就该是这个样子的：
{% highlight python %}
bmi = weight / pow(height,2)
{% endhighlight %}

喵，我的运行结果是过轻呢，看来得多吃些啦
