from flask_restful import Resource
from flask import request
from models.skill import Skill

"""
    SkillResource handles HTTP GET requests to retrieve skills from the database.

    Methods:
    -------
    get(skill_id=None):
        Handles the retrieval of skills. If `skill_id` is provided, it returns the skill
        that matches the ID. If `skill_id` is not provided, it checks for a query parameter 
        `category_id` and filters skills by category. If neither is provided, it lists all skills.
        
        Parameters:
        -----------
        skill_id : str, optional
            The unique identifier of the skill to retrieve (default is None).
        
        Returns:
        --------
        If `skill_id` is provided and found:
            A dictionary representing the skill details.
        
        If `category_id` is provided as a query parameter:
            A list of dictionaries representing all skills associated with the specified category.
        
        If neither `skill_id` nor `category_id` is provided:
            A list of dictionaries representing all skills.

        Error Handling:
        ---------------
        - Returns a 404 status code with a message if a skill is not found for the provided `skill_id`.
        - Returns a 404 status code with a message if no skills are found for the provided `category_id`.

    list_all():
        Retrieves and returns all skills from the database.

        Returns:
        --------
        A list of dictionaries representing all skills.
        SkillResource handles HTTP GET requests to retrieve skills from the database.

    Examples of API Endpoints:
    --------------------------
    
    1. Retrieve all skills:
    -----------------------
    GET /v1/skills
    
    Example response:
    [
        {
            "skill_id": "1",
            "name": ["Java", "Spring", "Hibernate"],
            "category_id": "1",
            "last_modified": "2024-09-10T12:00:00"
        },
        {
            "skill_id": "2",
            "name": ["JavaScript", "React", "Node.js"],
            "category_id": "1",
            "last_modified": "2024-09-10T12:00:00"
        }
    ]

    2. Retrieve skills filtered by category:
    ----------------------------------------
    GET /v1/skills?category_id=1
    
    Example response:
    [
        {
            "skill_id": "1",
            "name": ["Java", "Spring", "Hibernate"],
            "category_id": "1",
            "last_modified": "2024-09-10T12:00:00"
        },
        {
            "skill_id": "2",
            "name": ["JavaScript", "React", "Node.js"],
            "category_id": "1",
            "last_modified": "2024-09-10T12:00:00"
        }
    ]
    
    3. Retrieve a specific skill by ID:
    -----------------------------------
    GET /v1/skills/<skill_id>
    
    Example request:
    GET /v1/skills/1
    
    Example response:
    {
        "skill_id": "1",
        "name": ["Java", "Spring", "Hibernate"],
        "category_id": "1",
        "last_modified": "2024-09-10T12:00:00"
    }

    Error Responses:
    ----------------
    1. Skill not found by `skill_id`:
    ---------------------------------
    GET /v1/skills/999
    
    Example response:
    {
        "message": "Skill not found"
    }
    
    2. No skills found for a category:
    ----------------------------------
    GET /v1/skills?category_id=999
    
    Example response:
    {
        "message": "No skills found for this category"
    }
"""
    
class SkillResource(Resource):

    def get(self, skill_id=None):
        if skill_id:
            # Search by skill_id
            skill = Skill.query.filter_by(skill_id=skill_id).first()
            if skill:
                return skill.to_dict()
            else:
                return {'message': 'Skill not found'}, 404
        else:
            # If no skill_id, check for category_id in query params
            category_id = request.args.get('category_id', None)
            
            if category_id:
                # Filter skills by category_id
                skills = Skill.query.filter_by(category_id=category_id).all()
                if skills:
                    return [skill.to_dict() for skill in skills]
                else:
                    return {'message': 'No skills found for this category'}, 404
            else:
                return self.list_all()

    def list_all(self):
        # List all skills
        skills = Skill.query.all()
        return [skill.to_dict() for skill in skills]
