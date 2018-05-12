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
./configure --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=native -fPIC' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -pie' --with-threads --with-file-aio --with-pcre=../pcre-8.42 --with-zlib=../zlib-1.2.11 --with-openssl=../openssl --with-pcre-opt=-fPIC --with-zlib-opt=-fPIC
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

## 设置nginx

这是我的一份配置(https自动重定向+letsencrypt+HSTS+部分优化)

{% highlight conf %}
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    gzip  on;

    ssl_certificate /etc/letsencrypt/live/n-a.date/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/n-a.date/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    #ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    resolver 8.8.8.8 8.8.4.4;
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/ssl/certs/ca-bundle.trust.crt;
    ssl_session_ticket_key ssl/tls_session_ticket1.key;
    ssl_session_ticket_key ssl/tls_session_ticket2.key;
    ssl_session_tickets on;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://ssl.google-analytics.com https://assets.zendesk.com https://connect.facebook.net; img-src 'self' https://ssl.google-analytics.com https://s-static.ak.facebook.com https://assets.zendesk.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.zendesk.com; font-src 'self' https://themes.googleusercontent.com; frame-src https://assets.zendesk.com https://www.facebook.com https://s-static.ak.facebook.com https://tautt.zendesk.com; object-src 'none'";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;
    server_tokens off;
    charset utf-8;
    http2_push_preload on;

    server {
        listen 80;
        server_name n-a.date;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 80;
        server_name ngn.n-a.date;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 80;
        server_name ngn.edu.n-a.date;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen       443 http2;
        listen  [::]:443 http2;
        server_name  n-a.date;
        ssl on;
        http2_push /assets/main.css;
        #charset utf-8;

        #access_log  logs/host.access.log  main;

        location / {
            root   /usr/share/nginx/site;
            index  index.html index.htm;
        }

        error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    }

    server {
        listen 443 http2;
        listen [::]:443 http2;
        server_name ngn.n-a.date;
        ssl on;

        location / {
            root /usr/share/nginx/ngn;
            index index.html;
        }

        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    }

    server {
        listen 443 http2;
        listen [::]:443 http2;
        server_name ngn.edu.n-a.date;
        ssl on;

        location / {
            root /usr/share/nginx/ngn-edu;
            index index.html;
        }

        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    }
}
{% endhighlight %}

## 设置git server

### 安装git

{% highlight shell %}
yum -y install git
{% endhighlight %}

### 新建一个叫git的用户

{% highlight shell %}
useradd -m -s /usr/bin/git-shell
{% endhighlight %}

### 新建git裸仓库

裸仓库是为了分享而生的

{% highlight shell %}
git init --bare --shared /home/git/site.git
{% endhighlight %}

### 建立hook

`vim /home/git/site.git/post-receive`

文件内容为

{% highlight shell %}
#!/bin/bash
git --work-tree=/home/git/site --git-dir=/home/git/site.git checkout -f
{% endhighlight %}

赋予可执行权限`chmod +x post-receive`

### 更改文件权限

{% highlight shell %}
chown -R git:git /home/git/site.git
{% endhighlight %}

### ssh连接

创建authorized_keys文件`touch /home/git/.ssh/authorized_keys`

更改权限为600

{% highlight shell %}
chmod 700 /home/git/.ssh #ssh目录需为700
chmod 600 /home/git/.ssh/authorized_keys
{% endhighlight %}

将你的ssh公钥填进`/home/git/.ssh/authorized_keys`

### 第一次push

设置完git后你就可以进行第一次push来测试了

## jekyll自动部署设置

### 安装ruby

yum源中的ruby太旧了，我们要用rvm去安装

{% highlight shell %}
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash -s stable --ruby
{% endhighlight %}

### 安装jekyll

{% highlight shell %}
gem install bundle jekyll
{% endhighlight %}

### bundle初始化

{% highlight shell %}
cd /home/git/site
bundle
bundle update
{% endhighlight %}

### 进程守护

我用了systemd去守护进程

Systemd UNIT file:
{% highlight conf %}
# /etc/systemd/system/jekylld.service
[Unit]
Description=Jekyll build deamon

[Service]
Environment=JEKYLL_ENV=production
WorkingDirectory=/home/git/site
ExecStart=/usr/local/rvm/gems/ruby-2.5.1/wrappers/bundle exec jekyll build --watch --source /home/git/site --destination /usr/share/nginx/site
Restart=on-failure
Type=simple

[Install]
WantedBy=multi-user.target
{% endhighlight %}

注意将`ExecStart`中的`ruby-2.5.1`替换为你的ruby版本，`source`目录改为你先前在git hook里定义的work tree,`destination`更改为nginx的webroot

### 启动服务

{% highlight shell %}
systemctl start jekylld
{% endhighlight %}

用`systemctl status jekylld`查看状态，没有错误则进入下一步

### 将服务设为开机自启

{% highlight shell %}
systemctl enable jekylld
{% endhighlight %}