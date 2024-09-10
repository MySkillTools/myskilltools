from flask_restful import Resource
from models.category import Category

class CategoryResource(Resource):
    def get(self):
        categories = Category.query.all()
        return [category.to_dict() for category in categories]
