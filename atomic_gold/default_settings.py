import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
ADDITIONAL_APPS = [
    'livereload',
    'corsheaders',
    'rest_framework',
    'todo',
]
ADDITIONAL_MIDDLEWARE = [
    'livereload.middleware.LiveReloadScript',
    'corsheaders.middleware.CorsMiddleware',
]
TEMPLATE_BASE = [
    os.path.join(BASE_DIR, 'templates'),
]
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000'
]
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'), )
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
