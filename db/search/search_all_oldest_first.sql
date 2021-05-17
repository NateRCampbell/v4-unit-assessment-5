select p.id as post_id
from helo_posts p

select p.username as author_username
from helo_posts p

select * from helo_posts
join post_id where helo_users(id) = author_username 
order by asc 