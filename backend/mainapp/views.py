from django.shortcuts import render
from rest_framework import generics, viewsets, permissions, status, views, mixins
from .models import *
from .serializers import *
from rest_framework.response import Response

# Create your views here.
def index(request):
    return render(request, 'index.html')


class ProductList(generics.ListAPIView):
    # permissions_classes = [permissions.IsAuthenticated]

    queryset = Product.objects.filter(is_published=True)
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        system = request.query_params.get('system', None)

        if system:
            queryset = queryset.filter(system=system)
            serializer = ProductSerializer(queryset, many=True)
            return Response(serializer.data)
 
    

        return Response(serializer.data)





class PartnersList(generics.ListAPIView):
    # permissions = [permissions.IsAuthenticated]

    queryset = Partners.objects.all()
    serializer_class = PartnersSerializer



class AdvertsList(generics.ListAPIView):
    # permissions = [permissions.IsAuthenticated]

    queryset = Adverts.objects.all()
    serializer_class = AdvertsSerializer



class WarrantyList(generics.ListAPIView):
    # permissions = [permissions.IsAuthenticated]

    queryset = Warranty.objects.all()
    serializer_class = WarrantySerializer


    def post(self, request, *args, **kwargs):
        serializer = WarrantySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    


class WarrantyDataList(generics.ListAPIView):
    # permissions = [permissions.IsAuthenticated]

    queryset = WarrantyData.objects.all()
    serializer_class = WarrantyDataSerializer

    def get(self, request, *args, **kwargs):
        queryset = WarrantyData.objects.all()
        serializer = WarrantyDataSerializer(queryset, many=True)
        series = request.query_params.get('series', None)

        if series:
            queryset = queryset.filter(series=series)
            serializer = WarrantyDataSerializer(queryset, many=True)

            if queryset:
                return Response({
                    'found': True,
                })
            else:
                return Response({
                    'found': False,
                })
    

        return Response(serializer.data)


    # def post(self, request, *args, **kwargs):
    #     serializer = WarrantyDataSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(status=status.HTTP_400_BAD_REQUEST)



class DealerRequestListView(generics.ListAPIView):
    queryset = DealerRequest.objects.all()
    serializer_class = DealerRequestSerializer

    def post(self, request, *args, **kwargs):
        serializer = DealerRequestSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
