from flask_restful import Resource
from flask import request
from models.category import Category

"""
    CategoryResource handles HTTP GET requests to retrieve categories from the database.

    Methods:
    -------
    get(category_id=None):
        Handles the retrieval of categories. If `category_id` is provided, it returns the category
        that matches the ID. If `category_id` is not provided, it checks for a query parameter 
        `sector_id` and filters categories by sector. If neither is provided, it lists all categories.
        
        Parameters:
        -----------
        category_id : str, optional
            The unique identifier of the category to retrieve (default is None).
        
        Returns:
        --------
        If `category_id` is provided and found:
            A dictionary representing the category details.
        
        If `sector_id` is provided as a query parameter:
            A list of dictionaries representing all categories associated with the specified sector.
        
        If neither `category_id` nor `sector_id` is provided:
            A list of dictionaries representing all categories.

        Error Handling:
        ---------------
        - Returns a 404 status code with a message if a category is not found for the provided `category_id`.
        - Returns a 404 status code with a message if no categories are found for the provided `sector_id`.

    list_all():
        Retrieves and returns all categories from the database.

        Returns:
        --------
        A list of dictionaries representing all categories.

    CategoryResource handles HTTP GET requests to retrieve categories from the database.

    Examples of API Endpoints:
    --------------------------
    
    1. Retrieve all categories:
    ---------------------------
    GET /v1/categories
    
    Example response:
    [
        {
            "category_id": "1",
            "name": "Software Development",
            "color": "#4CAF50",
            "sector_id": "1",
            "last_modified": "2024-09-10T10:30:00"
        },
        {
            "category_id": "2",
            "name": "Cybersecurity",
            "color": "#FF9800",
            "sector_id": "1",
            "last_modified": "2024-09-10T10:30:00"
        }
    ]

    2. Retrieve categories filtered by sector:
    ------------------------------------------
    GET /v1/categories?sector_id=1
    
    Example response:
    [
        {
            "category_id": "1",
            "name": "Software Development",
            "color": "#4CAF50",
            "sector_id": "1",
            "last_modified": "2024-09-10T10:30:00"
        },
        {
            "category_id": "2",
            "name": "Cybersecurity",
            "color": "#FF9800",
            "sector_id": "1",
            "last_modified": "2024-09-10T10:30:00"
        }
    ]
    
    3. Retrieve a specific category by ID:
    --------------------------------------
    GET /v1/categories/<category_id>
    
    Example request:
    GET /v1/categories/1
    
    Example response:
    {
        "category_id": "1",
        "name": "Software Development",
        "color": "#4CAF50",
        "sector_id": "1",
        "last_modified": "2024-09-10T10:30:00"
    }

    Error Responses:
    ----------------
    1. Category not found by `category_id`:
    ---------------------------------------
    GET /v1/categories/999
    
    Example response:
    {
        "message": "Category not found"
    }
    
    2. No categories found for a sector:
    ------------------------------------
    GET /v1/categories?sector_id=999
    
    Example response:
    {
        "message": "No categories found for this sector"
    }
"""

class CategoryResource(Resource):
    def get(self, category_id=None):
        if category_id:
            # Search by category_id
            category = Category.query.filter_by(category_id=category_id).first()
            if category:
                return category.to_dict()
            else:
                return {'message': 'Category not found'}, 404
        else:
            # If no category_id, check for sector_id in query params
            sector_id = request.args.get('sector_id', None)
            
            if sector_id:
                # Filter categories by sector_id
                categories = Category.query.filter_by(sector_id=sector_id).all()
                if categories:
                    return [category.to_dict() for category in categories]
                else:
                    return {'message': 'No categories found for this sector'}, 404
            else:
                return self.list_all()

    def list_all(self):
        # List all categories
        categories = Category.query.all()
        return [category.to_dict() for category in categories]
