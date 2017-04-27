from django.conf.urls import url
from .import views

urlpatterns =[
    url(r'^$', views.index, name='index'),
    url(r'^register$', views.register, name='register'),
    url(r'^login$', views.login, name='login'),
    url(r'^success$', views.success, name='success'),
    url(r'^books$', views.books, name='books'),
    url(r'^books/add$', views.addBooks, name='addBooks'),
    url(r'^books/create$', views.create, name='create'),
    url(r'^books/(?P<id>\d+)$', views.reviewBooks, name='reviewBooks'),
    url(r'^users/(?P<id>\d+)$', views.viewUsers, name='viewUsers'),
    url(r'^logout$', views.logout, name='logout'),
    url(r'^createreview/(?P<id>\d+)$', views.createReview, name='createReview'),
]
