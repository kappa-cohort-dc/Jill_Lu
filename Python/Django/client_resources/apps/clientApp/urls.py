from django.conf.urls import url
from .import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^process$', views.process, name='process'),
    url(r'^create$', views.add_client, name='add_client'),
    url(r'^client/(?P<id>\d+)$', views.show_client, name='show_client'),
    url(r'^addproject$', views.add_project, name ='add_project'),
    url(r'^show/projects/(?P<id>\d+)$', views.show_projects, name='show_projects'),
]
