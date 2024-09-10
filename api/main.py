from flask import Flask
from flask_restful import Api
from models import db

API_prefix = '/v1'

app = Flask(__name__)

# PostgreSQL Database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/msd'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
api = Api(app)

# Import and add resources to the API
from resources.sector_resource import SectorResource
from resources.category_resource import CategoryResource
from resources.skill_resource import SkillResource

api.add_resource(SectorResource, API_prefix + '/sectors', API_prefix + '/sectors/<string:sector_id>')
#api.add_resource(SectorResource, API_prefix + '/sectors')

api.add_resource(CategoryResource, API_prefix + '/categories', API_prefix + '/categories/<string:category_id>')
#api.add_resource(CategoryResource, API_prefix + '/categories')
api.add_resource(SkillResource, API_prefix + '/skills')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
