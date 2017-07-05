# release-package-config-s
1. yum install docker -y install docker  

2. docker build -t jossv https://github.com/userya/docker-config.git   构建基础软件环境

3. docker run --name db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=jot -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin  -d -p 3306:3306 mysql  



docker run --name rdb -d -p 6379:6379 redis


docker run --name app --link db:mysql --link rdb:redis -d -p 80:80  jossv:latest
docker stop app && docker rm app && docker run --name app --link db:mysql --link rdb:redis -d -p 80:80  jossv:latest

docker logs -f app

docker run -it -p 8888:80 --net=host myfirstserver:v1



docker run --net=host -p 8888:80 myfirstserver:v1

docker run --net=host -p 8888:80 myfirstserver:v1



docker run --link db:mysql --link rdb:redis -it -p 8888:80  myfirstserver:v1


# release-package-config-s

docker build -t jossv https://github.com/userya/docker-config.git

docker run --name db2 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=jot -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin  -d mysql

docker run --name rdb -d -p 6379:6379 redis



docker run --link db2:mysql -it -p 8888:80  myfirstserver:v1



docker run --net=host -p 8888:80 myfirstserver:v1

docker run --net=host -p 8888:80 myfirstserver:v1







 yum install glibc.i686

yum install yum-utils -y
yum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo
yum install openresty -y

