import pandas as pd 
import django
import os 
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ssmart.settings')
django.setup()
from mainapp.models import WarrantyData

def read_excel(file_name):
    df = pd.read_excel(f'excel/{file_name}.xlsx')
    series = df.iloc[:, 0].tolist()
    for i in series:
        new = WarrantyData(series=i)
        new.save()
        print(f'saved: {i}')
    
    # return df


read_excel(2)