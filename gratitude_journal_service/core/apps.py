from django.apps import AppConfig
from django.conf import settings
import logging

logger = logging.getLogger()


class CoreConfig(AppConfig):
    name = 'core'

    def ready(self):
        logging.info('Launching Gratitude Journal Service')
        logging.debug(f'Using secret key: {settings.SECRET_KEY}')
