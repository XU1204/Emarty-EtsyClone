from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, DecimalField
from wtforms.validators import DataRequired, Email, ValidationError

def len_check(form, field):
    if len(field.data) > 254:
        raise ValidationError("Note must be less than 255 characters")

class ProductForm(FlaskForm):
    name = StringField('Name', [DataRequired(), len_check])
    description = StringField("Description", [DataRequired(), len_check])
    avalibility = IntegerField('Avalibility', [DataRequired()])
    categoryId = SelectField('Category', [DataRequired()], choices=[(1, 'Jewelry & Accessories'), (2, 'Clothing & Shoes'), (3, 'Home & Living'), (4, 'Toys & Entertainment'), (5, 'Art & Collectibles')])
    price = DecimalField('Price', [DataRequired()], places=2)
    previewImage = StringField('Preview Image', [DataRequired()])