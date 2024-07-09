from django.http import JsonResponse
from .models import Dish
import json
from django.views.decorators.csrf import csrf_exempt

def index(request):
    dishes = Dish.objects.all()
    dishes_list = list(dishes.values('id', 'title', 'image', 'prep_time'))
    # dishes_list = serializers.serialize('json', dishes)
    return JsonResponse( {'dishes':dishes_list} )

# Add CSRF protection later
@csrf_exempt
def add_dish(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        prep_time = request.POST.get('prep_time')
        image = request.FILES.get('image')

        if not title or not prep_time or not image:
            return JsonResponse({'error': 'Missing fields'}, status=400)
        
        dish = Dish.objects.create(title=title, prep_time=prep_time, image=image)
        return JsonResponse( {'id': dish.id, 'title': dish.title, 'prep_time': dish.prep_time, 'image': str(dish.image)} )

    return JsonResponse({'error': 'Invalid method'}, status=405)