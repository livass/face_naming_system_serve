* 新建一个登录表
~~~
create table login(
    usr varchar(20) primary key,
    pwd varchar(20) not null,
    ident int not null,
    usrname varchar(20) not null
    //身份码 1:学生 2:老师
);
~~~
  登录表数据插入
~~~
//学生
insert into login(usr,pwd,ident,usrname) values('MP2209113','123',1,'阮荣耀');
insert into login(usr,pwd,ident,usrname) values('MP2209114','123',1,'孙权');


//老师
insert into login(usr,pwd,ident,usrname) values('tea','123',0,'唐明伟');
~~~

* 新建一个班级表
~~~
create table class(
  idnum int primary key,
  classid varchar(20) not null,
  usr varchar(20),
  ident int not null,
  class varchar(20) not null
);
~~~
班级表数据插入
~~~
insert into class(idnum,classid,usr,ident,class) values(1,'cl001','tea',0,'高级程序编程');
insert into class(idnum,classid,usr,ident,class) values(2,'cl002','tea',0,'python');
insert into class(idnum,classid,usr,ident,class) values(3,'cl003','tea',0,'java');
~~~

班级表姓名更新
~~~
update class set usrname="唐明伟" where idnum=1;
update class set usrname="唐明伟" where idnum=2;
update class set usrname="唐明伟" where idnum=3;
~~~

* 新建一个点名表
~~~
create table namestu(
  idnum int primary key,
  classid varchar(20) not null,
  usr varchar(20),
  usrname varchar(20),
  ifname int not null,
  weekid int not null 
);
~~~

点名表数据插入
~~~
insert into namestu(idnum,classid,usr,usrname,ifname,weekid) values(1,'cl001','MP2209113','阮荣耀',0,1);
insert into namestu(idnum,classid,usr,usrname,ifname,weekid) values(2,'cl001','MP2209114','孙权',0,1);
insert into namestu(idnum,classid,usr,usrname,ifname,weekid) values(3,'cl001','MP2209113','阮荣耀',0,2);

//数据更新
update namestu set ifname=0 where usr='MP2209114';

~~~

* 新建一个人脸库
~~~
create table stupic(
  usr varchar(20) primary key,
  usrname varchar(20) not null,
  ifupload int not null,//是否上传照片
  picaddress varchar(20)//照片地址
);
~~~

人脸库数据插入
~~~
insert into stupic(usr,usrname,ifupload,picaddress) values('MP2209114','孙权',0,null);
~~~

* 新建一个签到表
~~~
create table stusign(
  signid int auto_increment primary key,
  usr varchar(20) not null,
  usrname varchar(20) not null,
  classid varchar(20) not null,
  weekid int not null,
  ifname int not null,
  ifrec int not null
);
~~~

