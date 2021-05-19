drop table if exists helo_users

create table helo_users(
   id serial primary key,
   username varchar(50) not null,
   password varchar(200) not null,
   profile_pic text
);

create table helo_posts(
   id serial primary key,
   title varchar(45) not null,
   content text,
   img text,
   author_id integer references helo_users(id),
   --throwing an error on line above
   date_created timestamp
);
