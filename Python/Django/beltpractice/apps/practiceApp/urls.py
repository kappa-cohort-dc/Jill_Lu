from django.conf.urls import url
from .import views
urlpatterns = [
    url(r'^books$', views.booksHome, name ='booksHome'),
    url(r'^books/add$', views.addBook, name='addBook'),
    url(r'^process$', views.addBookProcess, name='addBookProcess'),
    url(r'^books/(?P<id>\d+)$', views.showReview, name='showReview'),
    url(r'^users/(?P<id>\d+)$', views.reviewer, name='reviewer'),
]
