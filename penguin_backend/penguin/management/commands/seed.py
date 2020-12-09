from django.core.management.base import BaseCommand
from ...models import Commands
from django.contrib.auth.models import User
import requests

API_BASE = 'https://raw.githubusercontent.com/dd8917vk/penguin/main/penguin/public/cleaned_data.json'
#AGENCIES_TO_SEED = 
class Command(BaseCommand):

    def handle(self, *args, **options):
        get_commands()
        seed_commands()
        # clear_all_beer_data()

        
def get_commands():

    response = requests.get(f'{API_BASE}', headers={'Content-Type':      
    'application/json'})
    command_data = response.json()
    print(f'Fetched {len(command_data)} departments from {API_BASE}')
    return command_data 

def seed_commands():
    data = get_commands()
    for item in data:
        command = Commands(command=item["command"], description=item["description"], link=item["link"], html=item["html"])
        command.save()
    breakpoint()

        # for ori in data[item]:
        #     department = Departments(agency_name=data[item][ori]["agency_name"], state_name=data[item][ori]["state_name"], latitude = data[item][ori]["latitude"], longitude = data[item][ori]["longitude"])
        #     department.save()
    
#FAILING ON THIS ONE