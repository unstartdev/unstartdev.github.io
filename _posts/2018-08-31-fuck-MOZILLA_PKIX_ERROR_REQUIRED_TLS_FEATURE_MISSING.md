---
layout: post
title: 解决Firefox错误:MOZILLA_PKIX_ERROR_REQUIRED_TLS_FEATURE_MISSING
date: 2018-08-31 00:14:29 +0800
categories: site
---
> 服务器环境: Nginx+Libressl

Emmm...在使用了certbot的--must-staple选项后若未正确配置便会出现下图的情况，原因是oscp未正确响应
![截图_2018-08-31_00-15-10.png](https://i.loli.net/2018/08/31/5b8818a870b50.png)

## 解决方法:

在配置文件的server段加上resolver,比如
```
resolver 8.8.8.8 8.8.4.4;
```

[Nginx Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#resolver)