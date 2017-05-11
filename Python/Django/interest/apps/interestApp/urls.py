from django.conf.urls import url
from .import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add$', views.addItem, name='additem'),
    url(r'^users$', views.dashboard, name='dashboard'),
    url(r'^show/(?P<id>\d+)$', views.interest, name='userInterest'),
]
