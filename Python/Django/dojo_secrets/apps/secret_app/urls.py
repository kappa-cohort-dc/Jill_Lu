from django.conf.urls import url
from .import views
urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^login$', views.login, name = 'login'),
    url(r'^register$', views.register, name ='register'),
    url(r'^secrets$', views.secret, name ='secrets'),
    url(r'^logout$', views.logout, name= 'logout'),
    url(r'^recentSecrets$', views.recentSecrets, name= 'recentSecrets'),
    url(r'^like/(?P<id>\d+)$', views.like, name='like'),
]
