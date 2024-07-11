from django.http import JsonResponse
from .models import Dish
from django.views.decorators.csrf import csrf_exempt # Add CSRF protection later
# Add django REST and serializers later
from django.conf import settings

@csrf_exempt
def dishes(request):
    if request.method == 'GET':
        dishes = Dish.objects.all()
        dishes_list = list(dishes.values('id', 'title', 'image', 'prep_time'))
        # dishes_list = serializers.serialize('json', dishes)
        for dish in dishes_list:
            dish['image'] = request.build_absolute_uri(settings.MEDIA_URL + dish['image'])
        return JsonResponse( {'dishes':dishes_list} )

    elif request.method == 'DELETE':
        Dish.objects.all().delete()
        return JsonResponse({'message': 'All dishes have been deleted'})
    
    elif request.method == 'POST':
        title = request.POST.get('title')
        prep_time = request.POST.get('prep_time')
        image = request.FILES.get('image')

        if not title or not prep_time or not image:
            return JsonResponse({'error': 'Missing fields'}, status=400)
        
        dish = Dish.objects.create(title=title, prep_time=prep_time, image=image)
        return JsonResponse( {'id': dish.id, 'title': dish.title, 'prep_time': dish.prep_time, 'image': str(dish.image)} )
    
    return JsonResponse({'error': 'Invalid method'}, status=400)

@csrf_exempt
def delete(request, dish_id):
    if request.method == 'DELETE':
        try:
            dish = Dish.objects.get(id=dish_id)
            dish.delete()
            return JsonResponse({'message': 'Dish deleted successfully'})
        except Dish.DoesNotExist:
            return JsonResponse({'error': 'Dish not found'}, status=400)

    return JsonResponse({'error': 'Invalid method'}, status=400)