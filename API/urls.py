from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, RoomJoin, UserInRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', RoomJoin.as_view()),
    path('user-room', UserInRoom.as_view())
]
