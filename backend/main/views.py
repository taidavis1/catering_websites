from django.shortcuts import render
from django.http import HttpRequest , HttpResponse
# Create your views here.

def home(request):
    return render(request , 'home.html')
def about(request):
    return render(request , 'home.html')
def contact(request):
    return render(request , 'home.html')
def gallery(request):
    return render(request , 'home.html')
