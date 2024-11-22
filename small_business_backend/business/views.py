from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Business
from .serializers import BusinessSerializer

class BusinessListView(APIView):
    def get(self, request):
        businesses = Business.objects.all()
        serializer = BusinessSerializer(businesses, many=True)
        return Response(serializer.data)
