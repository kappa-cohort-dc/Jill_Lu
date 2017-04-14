-- select customer.first_name, customer.last_name, customer.email
-- from customer
-- join address on address.address_id = customer.address_id
-- where city_id = 312
-- 

-- select film.title, film.special_features, film.description, film.release_year, film.rating, category.name
-- from film
-- join film_category on film.film_id = film_category.film_id
-- join category on category.category_id = film_category.category_id
-- where category.name = 'comedy'

-- select film.film_id, film.title, film.description, film.release_year
-- from film
-- left join film_actor on film.film_id = film_actor.film_id
-- where film_actor.actor_id = 5
-- 
-- select customer.first_name, customer.last_name, customer.email, address.address 
-- from customer
-- join address on customer.address_id = address.address_id 
-- where customer.store_id = 1 and address.city_id in (1, 42, 312, 459)


-- select film.title, film.special_features, film.description, film.release_year, film.rating
-- from film 
-- join film_actor on film.film_id = film_actor.film_id 
-- join actor on film_actor.actor_id = actor.actor_id
-- where film.special_features = "Behind the scenes" and film_actor.actor_id = 15


-- select film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name
-- from film
-- join film_actor on film.film_id = film_actor.film_id 
-- join actor on film_actor.actor_id = actor.actor_id 
-- where film.film_id = 369
-- 
-- select film.title, film.special_features, film.description, film.release_year, film.rating, category.name
-- from film
-- join film_category on film.film_id = film_category.film_id
-- join category on category.category_id = film_category.category_id
-- where category.name = 'drama' and film.rental_rate = 2.99

select film.title, film.special_features, film.description, film.release_year, film.rating, category.name, concat(actor.first_name, ' ', actor.last_name) as actor_name
from film
join film_actor on film.film_id = film_actor.film_id 
join actor on film_actor.actor_id = actor.actor_id 
join film_category on film.film_id = film_category.film_id
join category on category.category_id = film_category.category_id
where category.name = 'action' and actor.first_name = 'sandra' and actor.last_name = 'kilmer'