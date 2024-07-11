from django.http import JsonResponse
from .models import Team
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

@csrf_exempt
def team(request , team_id=None):
    if request.method == 'GET':
        try:
            team = Team.objects.all()
            team_list = list(team.values('id', 'title', 'image'))
            for team in team_list:
                team['image'] = request.build_absolute_uri(settings.MEDIA_URL + team['image'])
            return JsonResponse( {'team':team_list} )
        except Team.DoesNotExist:
            return JsonResponse({'error': 'Team not found'}, status=400)
        
    elif request.method == 'POST':
        title = request.POST.get('title')
        image = request.FILES.get('image')

        if not title or not image:
            return JsonResponse({'error': 'Missing fields'}, status=400)
        
        team = Team.objects.create(title=title, image=image)
        return JsonResponse( {'id': team.id, 'title': team.title, 'image': str(team.image)} )
    
    if request.method == 'DELETE' and team_id is not None:
        try:
            team = Team.objects.get(id=team_id)
            team.delete()
            return JsonResponse({'message': 'Team deleted successfully'})
        except Team.DoesNotExist:
            return JsonResponse({'error': 'Team not found'}, status=400)

    return JsonResponse({'error': 'Invalid method'}, status=400)
