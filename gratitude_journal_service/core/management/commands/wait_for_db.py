import os, subprocess

from django.core.management.base import BaseCommand, CommandError
from gratitude_journal_service.settings import BASE_DIR, DATABASES

class Command(BaseCommand):
    def handle(self, *args, **options):
        db_host = DATABASES['default']['HOST']
        db_port = DATABASES['default']['PORT']
        wait_for_it = os.path.join(BASE_DIR, 'wait-for-it.sh')
        subprocess.run(['bash', wait_for_it, f'{db_host}:{db_port}'])
