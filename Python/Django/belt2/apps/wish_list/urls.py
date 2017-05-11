from django.conf.urls import url
from .import views
urlpatterns = [
    url(r'^$', views.dashboard, name='dashboard'),
    url(r'^wish_items/create$', views.createItem, name='create_item'),
    url(r'^process$', views.process, name='process'),
    url(r'^delete/(?P<id>\d+)$', views.deleteItem, name='delete'),
    url(r'^wish_items/(?P<id>\d+)$', views.showItem, name='show_item'),
    url(r'^remove/(?P<id>\d+)$', views.removeItem, name='remove'),
]
