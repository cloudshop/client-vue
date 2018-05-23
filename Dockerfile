FROM nginx:1.13

# Install base packages
RUN apk update
RUN apk upgrade
RUN apk add ca-certificates && update-ca-certificates
# Change TimeZone
RUN apk add --update tzdata
ENV TZ=Asia/Shanghai
# Clean APK cache
RUN rm -rf /var/cache/apk/*

RUN rm /etc/nginx/conf.d/default.conf
#//删除nginx 默认配置

ADD default.conf /tmp/template.conf
#//添加我们自己的配置 default.conf 在下面
ADD dist /usr/share/nginx/html/  
#//把刚才生成dist文件夹下的文件copy到nginx下面去
ADD h5-src/ /usr/share/nginx/html/

EXPOSE 8888
