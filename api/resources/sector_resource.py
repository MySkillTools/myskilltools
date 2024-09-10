from flask_restful import Resource
from models.sector import Sector

"""
    SectorResource provides a RESTful interface for managing sectors.
    
    Methods:
    --------
    get(sector_id=None):
        Handles GET requests. If `sector_id` is provided, it returns the 
        sector with the corresponding ID. If no `sector_id` is provided,
        it returns a list of all sectors.
        
        Parameters:
        -----------
        sector_id (int, optional): The ID of the sector to retrieve.
        
        Returns:
        --------
        - dict: If `sector_id` is provided and the sector exists, 
                returns the sector data as a dictionary.
        - dict: If `sector_id` is provided and the sector is not found,
                returns a message with a 404 status code.
        - list: If no `sector_id` is provided, returns a list of all sectors.

    list_all():
        Retrieves and returns a list of all sectors.

        Returns:
        --------
        - list: A list of dictionaries, where each dictionary contains 
                sector data.

    Example API Usage:
    ------------------
    1. Get all sectors:
    
       Endpoint: GET /api/sectors
       Example Request: 
       ```
       GET /api/sectors
       ```
       Example Response:
       ```
       [
           {"sector_id": 1, "name": "Technology", "description": "Tech sector"},
           {"sector_id": 2, "name": "Healthcare", "description": "Healthcare sector"}
       ]
       ```
    
    2. Get a specific sector by ID:
    
       Endpoint: GET /api/sectors/<sector_id>
       Example Request: 
       ```
       GET /api/sectors/1
       ```
       Example Response:
       ```
       {
           "sector_id": 1,
           "name": "Technology",
           "description": "Tech sector"
       }
       ```
       
       If sector is not found:
       ```
       {
           "message": "Sector not found"
       }
       Status: 404 Not Found
       ```
"""

class SectorResource(Resource):
    def get(self, sector_id=None):
        if sector_id:
            # Find a sector by its ID
            sector = Sector.query.filter_by(sector_id=sector_id).first()
            if sector:
                return sector.to_dict()
            else:
                return {'message': 'Sector not found'}, 404
        else:
            return self.list_all()

    def list_all(self):
        # List all sectors
        sectors = Sector.query.all()
        return [sector.to_dict() for sector in sectors]
