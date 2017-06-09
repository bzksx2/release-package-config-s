# release-package-config-s
1. yum install docker -y install docker  

2. docker build -t jossv https://github.com/userya/docker-config.git   构建基础软件环境

3. docker run --name db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=jot -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin  -d -p 3306:3306 mysql  



docker run --name rdb -d -p 6379:6379 redis



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