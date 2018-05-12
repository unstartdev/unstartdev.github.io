---
layout: post
title: 重新构建网站
date: 2018-05-06 20:37:19 +0800
categories: site
---
VPS从fedora 27升到28的时候出现了许多bug，所以我不得不去重装为Centos 7，跟着又是一趟折腾。。。可算恢复了一切

## 获取Nginx和它的依赖的源码

用wget

> PS: 如果你不担心稳定性的话，你可以用hg将源码拷下来

最新的一版是`Stable： 1.14.0`(我写这篇文章的时候)

{% highlight shell %}
wget http://nginx.org/download/nginx-1.14.0.tar.gz
{% endhighlight %}

### 展开源码到当前目录中

{% highlight shell %}
tar xzvf ./nginx.tar.gz
{% endhighlight %}

### 获取Nginx的依赖库

先来看看Nginx都依赖什么

分别是：
- OpenSSL
- PCRE
- Zlib
- GD（可选）

#### OpenSSL

它在[openssl.org/download](https://openssl.org/download)上找到，也可以从[git仓库](https://github.com/openssl/openssl)编译

我这里用了git仓库的源码，可能有些不稳定，你可以用别的版本

{% highlight shell %}
git clone https://github.com/openssl/openssl.git
{% endhighlight %}

#### PCRE

PCRE正则表达式库在[ftp.pcre.org/pub/pcre/](https://ftp.pcre.org/pub/pcre/)

这回用wget下载

{% highlight shell %}
wget https://ftp.pcre.org/pub/pcre/pcre-8.42.tar.gz
tar xzvf ./pcre-8.42.tar.gz
{% endhighlight %}

#### Zlib

[Zlib](https://zlib.net)

{% highlight shell %}
wget https://zlib.net/zlib-1.2.11.tar.gz
tar xzvf zlib-1.2.11
{% endhighlight %}

## 编译Nginx

进入nginx源码目录

{% highlight shell %}
cd nginx-1.14.0
{% endhighlight %}

运行`./configure`生成`Makefile`,可以去掉你不需要的部分

{% highlight shell %}
./configure --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=native -fPIC' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -pie' --with-threads --with-file-aio --with-http_image_filter_module --with-pcre=../pcre-8.42 --with-zlib=../zlib-1.2.11 --with-openssl=../openssl --with-pcre-opt=-fPIC --with-zlib-opt=-fPIC
{% endhighlight %}

Make it!

{% highlight shell %}
make -j 2
{% endhighlight %}

Install it!

{% highlight shell %}
make install
{% endhighlight %}

没错的话，你的配置文件现在`/etc/nginx/nginx.conf`