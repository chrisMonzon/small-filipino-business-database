"""
Django settings for small_business_backend project.

Generated by 'django-admin startproject' using Django 5.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from pathlib import Path
import os
from environ import Env

# Initialize environment variables
env = Env()
Env.read_env()
ENVIRONMENT = env('ENVIRONMENT', default='production')

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY', default='django-insecure-default-key-for-development-only')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool('DEBUG', default=ENVIRONMENT == 'development')

ALLOWED_HOSTS = env.list('ALLOWED_HOSTS', default=['localhost', '127.0.0.1', 'small-filipino-business-database-production.up.railway.app', 'jollibuy.vercel.app'])

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'business',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # CORS should be at the top
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Should be right after security middleware
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS Settings
CORS_ALLOWED_ORIGINS = env.list('CORS_ALLOWED_ORIGINS', default=[
    "http://localhost:3000",
    "https://small-filipino-business-database.vercel.app",
    "https://jollibuy.vercel.app",
    "https://small-filipino-business-database-kcfdvxedq.vercel.app",
])

CORS_ALLOW_CREDENTIALS = True

# URLs
ROOT_URLCONF = 'small_business_backend.urls'

# Templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'frontend' / 'build'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'small_business_backend.wsgi.application'

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases
if ENVIRONMENT == 'production':
    # Use PostgreSQL in production
    DATABASES = {
        'default': env.db('DATABASE_URL', default='postgres://postgres:postgres@localhost:5432/small_business')
    }
else:
    # Use SQLite for development
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Media files
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Security settings for production
if ENVIRONMENT == 'production':
    # HTTPS settings
    SECURE_SSL_REDIRECT = env.bool('SECURE_SSL_REDIRECT', default=True)
    SESSION_COOKIE_SECURE = env.bool('SESSION_COOKIE_SECURE', default=True)
    CSRF_COOKIE_SECURE = env.bool('CSRF_COOKIE_SECURE', default=True)
    SECURE_HSTS_SECONDS = env.int('SECURE_HSTS_SECONDS', default=31536000)  # 1 year
    SECURE_HSTS_INCLUDE_SUBDOMAINS = env.bool('SECURE_HSTS_INCLUDE_SUBDOMAINS', default=True)
    SECURE_HSTS_PRELOAD = env.bool('SECURE_HSTS_PRELOAD', default=True)
    SECURE_BROWSER_XSS_FILTER = env.bool('SECURE_BROWSER_XSS_FILTER', default=True)

# CSRF settings
CSRF_TRUSTED_ORIGINS = env.list('CSRF_TRUSTED_ORIGINS', default=[
    "https://small-filipino-business-database-production.up.railway.app",
    "https://jollibuy.vercel.app",
    "https://small-filipino-business-database-kcfdvxedq.vercel.app"
])

# """
# Django settings for small_business_backend project.

# Generated by 'django-admin startproject' using Django 5.1.2.

# For more information on this file, see
# https://docs.djangoproject.com/en/5.1/topics/settings/

# For the full list of settings and their values, see
# https://docs.djangoproject.com/en/5.1/ref/settings/
# """

# from pathlib import Path

# from environ import Env
# env = Env()
# Env.read_env()
# ENVIRONMENT = env('ENVIRONMENT', default='production')

# # Build paths inside the project like this: BASE_DIR / 'subdir'.
# BASE_DIR = Path(__file__).resolve().parent.parent


# # Quick-start development settings - unsuitable for production
# # See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# # SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = env('SECRET_KEY')

# # SECURITY WARNING: don't run with debug turned on in production!
# if ENVIRONMENT == 'development':
#     DEBUG = True
# else:
#     DEBUG = False

# ALLOWED_HOSTS = ['localhost', '127.0.0.1', 'small-filipino-business-database-production.up.railway.app', 'jollibuy.vercel.app']


# # Application definition

# INSTALLED_APPS = [
#     'django.contrib.admin',
#     'django.contrib.auth',
#     'django.contrib.contenttypes',
#     'django.contrib.sessions',
#     'django.contrib.messages',
#     'django.contrib.staticfiles',
#     'rest_framework',
#     'corsheaders',
#     'business',
# ]

# MIDDLEWARE = [
#     'corsheaders.middleware.CorsMiddleware',
#     'django.middleware.security.SecurityMiddleware',
#     'whitenoise.middleware.WhiteNoiseMiddleware',
#     'django.contrib.sessions.middleware.SessionMiddleware',
#     'django.middleware.common.CommonMiddleware',
#     'django.middleware.csrf.CsrfViewMiddleware',
#     'django.contrib.auth.middleware.AuthenticationMiddleware',
#     'django.contrib.messages.middleware.MessageMiddleware',
#     'django.middleware.clickjacking.XFrameOptionsMiddleware',   
# ]

# # MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')
# # MIDDLEWARE.insert(0, 'corsheaders.middleware.CorsMiddleware')


# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:3000", # React Frontend URL
#     "https://small-filipino-business-database.vercel.app",
#     "https://jollibuy.vercel.app",
#     "https://small-filipino-business-database-kcfdvxedq.vercel.app",
# # Vercel Frontend URL
# ]

# # CORS_ALLOW_ALL_ORIGINS = True

# CORS_ALLOW_CREDENTIALS = True

# ROOT_URLCONF = 'small_business_backend.urls'

# TEMPLATES = [
#     {
#         'BACKEND': 'django.template.backends.django.DjangoTemplates',
#         'DIRS': [BASE_DIR / 'frontend' / 'build'],  # Update path
#         'APP_DIRS': True,
#         'OPTIONS': {
#             'context_processors': [
#                 'django.template.context_processors.debug',
#                 'django.template.context_processors.request',
#                 'django.contrib.auth.context_processors.auth',
#                 'django.contrib.messages.context_processors.messages',
#             ],
#         },
#     },
# ]

# WSGI_APPLICATION = 'small_business_backend.wsgi.application'


# # Database
# # https://docs.djangoproject.com/en/5.1/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': 'db.sqlite3',
#     }
# }


# # Password validation
# # https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

# AUTH_PASSWORD_VALIDATORS = [
#     {
#         'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
#     },
#     {
#         'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
#     },
#     {
#         'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
#     },
#     {
#         'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
#     },
# ]


# # Internationalization
# # https://docs.djangoproject.com/en/5.1/topics/i18n/

# LANGUAGE_CODE = 'en-us'

# TIME_ZONE = 'UTC'

# USE_I18N = True

# USE_TZ = True


# # Static files (CSS, JavaScript, Images)
# # https://docs.djangoproject.com/en/5.1/howto/static-files/

# STATIC_URL = 'static/'
# STATIC_ROOT = BASE_DIR / 'staticfiles'
# STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# # Default primary key field type
# # https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

# DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# CSRF_TRUSTED_ORIGINS = [
#     "https://small-filipino-business-database-production.up.railway.app",
#     # "https://small-filipino-business-database.vercel.app",  # Optional, if making POST requests from frontend
#     "https://jollibuy.vercel.app",
#     "https://small-filipino-business-database-kcfdvxedq.vercel.app"
# ]
