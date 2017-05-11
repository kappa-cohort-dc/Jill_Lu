from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create$', views.createItem, name='create_item'),
    url(r'^process$', views.process, name='process'),
    url(r'^addItem/(?P<id>\d+)$', views.addItem, name='addItem'),
    url(r'^delete/(?P<id>\d+)$', views.deleteItem, name='delete'),
    url(r'^showItem/(?P<id>\d+)$', views.showItem, name='showItem'),
    url(r'^remove/(?P<id>\d+)$', views.removeItem, name='remove'),
]
