# Generated by Django 4.2.3 on 2024-01-01 22:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PPH', '0036_alter_formule_contre_indications_alter_formule_duree_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='composition',
            name='num_formule',
            field=models.CharField(max_length=200),
        ),
    ]