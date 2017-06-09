#!/bin/sh
yum install docker -y install docker
mkdir -p /etc/docker

tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://2c97fm2l.mirror.aliyuncs.com"]
}
EOF

systemctl daemon-reload
systemctl restart docker


docker build -t jossv https://github.com/userya/docker-config.git 

#docker run --name db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=jot -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin  -d -p 3306:3306 mysql 

docker run --name db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=jot -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin  -d mysql 

#docker run --name rdb -d -p 6379:6379 redis

docker run --name rdb -d redis

#docker run --link db:mysql --link rdb:redis -it -p 80:80  jossv:latest

docker run --name app --link db:mysql --link rdb:redis -it -d -p 80:80  jossv:latest