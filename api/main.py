from flask import Flask
from flask_restful import Api
from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/vboxuser/myskilltools.net/db/msd.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
api = Api(app)

# Import and add resources to the API
from resources.sector_resource import SectorResource
from resources.category_resource import CategoryResource
from resources.skill_resource import SkillResource

api.add_resource(SectorResource, '/sectors')
api.add_resource(CategoryResource, '/categories')
api.add_resource(SkillResource, '/skills')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
