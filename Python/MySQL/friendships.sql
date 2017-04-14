select users.first_name, users.last_name, friend.first_name as friend_first_name, friend.last_name as friend_last_name
from users
left join friendships on users.id = friendships.user_id
left join users as friend on friend.id = friendships.friend_id 



