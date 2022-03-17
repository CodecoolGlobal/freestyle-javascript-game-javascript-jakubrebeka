create table players (
	id serial NOT NULL,
	username text,
	score integer
);


insert into players (username, score) values ('test', 10);
