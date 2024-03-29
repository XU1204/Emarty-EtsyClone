from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class FavoriteForm(FlaskForm):
    productId = IntegerField('Product id', [DataRequired()])
