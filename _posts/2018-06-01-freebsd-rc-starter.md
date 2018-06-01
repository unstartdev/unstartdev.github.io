---
layout: post
title: FreeBSD rc.d脚本编写的小尝试
date: 2018-06-01 09:26:03 +0800
categories: freebsd
---
最开始我的需求是做一个`jekyll build的daemon`,开始的时候CentOS的`systemd unit file`编写起来很容易的，可我后来换到的是FreeBSD，其中的rc脚本开始的时候看得我挺懵的，后来翻了一下文档(英语+中文)

## 一个rc脚本开始的雏形

rc脚本应该被存放在`/etc/rc.d`或者是用户目录`/usr/local/etc/rc.d`

为了管理的方便，我用了服务名或软件包名来给rc脚本定义文件名

{% highlight shell %}
#!/bin/sh	#定义一行魔幻的shebang

. /etc/rc.subr

name="xxdaemon"	#daemon的名字
rcvar="xxdaemon_enable"	#此处为要求/etc/rc.conf中要含有xxdaemon_enable="YES才可以使用service xxdaemon {start|restart|stop}等命令管理服务，否则只能这样service xxdaemon {onestart|onestop|onerestart}
xxdaemon_pidfile="/var/run/xxdaemon.pid"	#定义一个pidfile

load_rc_config $name	#此处为载入配置行

command="/bin/xxdaemon"	#daemon的启动命令

run_rc_command "$1"
{% highlightend %}

## 进阶

这是我的jekylld脚本

{% highlight shell %}
#!/bin/sh

. /etc/rc.subr

name="jekylld"
rcvar="jekylld_enable"
jekylld_pidfile="/var/run/jekylld.pid"

load_rc_config $name

export JEKYLL_ENV=production
jekylld_chdir="/home/git/site"
command="/usr/sbin/daemon"
command_args="-u root -p /var/run/jekylld.pid -o /root/test.log /usr/local/bin/bundle exec jekyll build --source /home/git/site --layouts /home/git/site/_layouts --destination /home/nginx/site --watch"

run_rc_command "$1"
{% highlightend%}

这里多了
	export:sh里最常用的环境变量定义方法
	xxx_chdir:变更下面主进程的工作目录
	command_args:command后加的参数

这里我还使用了daemon工具去启动bundle，此处不延伸阅读

### reload参数实现

{% highlight shell %}
#!/bin/sh

. /etc/rc.subr

name="nginx"
rcvar="nginx_enable"
nginx_pidfile="/usr/local/nginx/logs/nginx.pid"

load_rc_config $name

#nginx_user=nginx
#nginx_group=nginx
command="/usr/local/sbin/nginx"
extra_commands="reload" #嗯没错就这一行

run_rc_command "$1"
{% highlightend %}

有些程序可能并不会为reload提供支持请注意
