---
layout: post
title: 十月里有什么新的
date: 2018-10-01 11:01:17 +0800
categories: log
---
### 1. 取自各种电影\动漫的一句话

[https://api.n-a.date/random-cuts.php](https://api.n-a.date/random-cuts.php?jsonpcallback=test)
目前数目还非常少，各位可以在评论向我推荐

所获得数据为jsonp,这种方式可以安全跨域

调用方法:

1. jQuery

{% highlight js %}
<script>
    $.getJSON("https://api.n-a.date/random-cuts.php?jsonpcallback=?", function(data)
    {
      document.getElementById("cut").innerHTML = data.content;
      document.getElementById("translate").innerHTML = data.translate;
      document.getElementById("from").innerHTML = data.from;
    });
    });
</script>
{% endhighlight %}

2. 原生javascript(jsonp)

{% highlight js %}
<script>
    function callbackFunction(result) //callbackFunction换成你定义的名称
    {
      document.getElementById("cut").innerHTML = result.content;
      document.getElementById("translate").innerHTML = result.translate;
      document.getElementById("from").innerHTML = result.from;
    }
</script>
<script src="https://api.n-a.date/random-cuts.php?jsonpcallback=callbackFunction"></script>
{% endhighlight %}

注意，两种方法都需要在你希望显示的地方加入以下HTML

{% highlight html %}
<p id="cut"></p>
<h5><p id="translate"></p></h5>
<h4><p id="from"></p></h4>
{% endhighlight %}

### 2. 101商店

[101shop](https://n-a.date/shop101)

组装台式~~捡垃圾~~的小店，帮补一下服务器运行费用

就这么多了，再见