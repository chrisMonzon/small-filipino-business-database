from django.contrib import admin
from .models import Business

@admin.register(Business)
class BusinessAdmin(admin.ModelAdmin):
    # Fields to display in the admin list view
    list_display = ('business_name', 'type', 'email')

    # Optional: Enable search functionality
    search_fields = ('business_name', 'type')

    # Optional: Add filters for specific fields
    list_filter = ('type',)

    # Optional: Define the order of displayed records
    ordering = ('business_name',)
