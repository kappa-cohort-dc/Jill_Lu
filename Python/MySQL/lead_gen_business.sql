-- select sum(billing.amount) as total_rev
-- from billing 
-- where billing.charged_datetime between '2012-03-01 00:00:00' and '2012-03-31 23:59:59'

select sum(billing.amount) as total_rev, billing.client_id
from clients
join billing on clients.client_id = billing.client_id
where billing.client_id = 2