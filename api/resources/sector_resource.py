from flask_restful import Resource
from models.sector import Sector

class SectorResource(Resource):
    def get(self):
        sectors = Sector.query.all()
        return [sector.to_dict() for sector in sectors]
