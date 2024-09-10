from flask import Flask#, send_from_directory
from flask_restful import Api
from models import db

API_prefix = '/v1'

app = Flask(__name__)

#app = Flask(__name__, static_folder='../web/build')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/vboxuser/myskilltools.net/db/msd.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
api = Api(app)

# Import and add resources to the API
from resources.sector_resource import SectorResource
from resources.category_resource import CategoryResource
from resources.skill_resource import SkillResource

api.add_resource(SectorResource, API_prefix + '/sectors')
api.add_resource(CategoryResource, API_prefix + '/categories')
api.add_resource(SkillResource, API_prefix + '/skills')

#@app.route('/')
#def index():
#    return send_from_directory(app.static_folder, 'index.html')

#@app.route('/<path:filename>')
#def serve_file(filename):
#    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
