from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def latest(request):
    return render(request, 'attendance/index.html', {})


def login(request):
    return render(request, 'attendance/login.html', {})
