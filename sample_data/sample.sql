DROP TABLE IF EXISTS public.users;
create table users (
	id serial NOT NULL,
	username text,
	password text,
	registration_date timestamp without time zone,
	number_of_asked_questions integer,
	number_of_answers integer,
	number_of_comments integer,
	reputation integer
);


insert into users (username, password, registration_date, number_of_asked_questions, number_of_answers, number_of_comments, reputation) values ('test@mail.com', 'test', '2021-02-28 05:59:05', 0, 0, 0, 0);
