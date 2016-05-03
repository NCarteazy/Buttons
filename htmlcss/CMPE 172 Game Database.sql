show databases;
use cmpe_172_game;
show tables;
create table team(color varchar(25) primary key not null);
show tables;
describe team;
insert into team(color)
	values('green');
select * from team;
insert into team(color)
	values('red');
select * from team;

show tables;
create table timer(time_remaining varchar(25) not null, value int(100) unsigned primary key not null);
show tables;
describe timer;
insert into timer(time_remaining, value)
	values('time remaining in seconds', '30');
select * from timer;

show tables;
create table score(color varchar(25) primary key not null, points int(200) unsigned not null);
show tables;
describe score;
insert into score(color, points)
	values('green', '0');
select * from score;
insert into score(color, points)
	values('red', '0');
select * from score;

show tables;
create table reset(color varchar(25) not null, score int(100) unsigned not null, timer varchar(25) primary key not null, time int(100) not null);
show tables;
describe reset;
insert into reset(color, score, timer, time)
	values('green', '0', 'starting time (green)', '30');
select * from reset;
insert into reset(color, score, timer, time)
	values('red', '0', 'starting time (red)', '30');
select * from reset;

show tables;
create table date_and_time(month varchar(25) not null, day varchar(25) not null, year varchar(25) not null, time varchar(25) not null);
show tables;
describe date_and_time;
insert into date_and_time(month, day, year, time)
	values('January', '1', '2016', '12:00 AM');
select * from date_and_time;
