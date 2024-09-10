from flask_restful import Resource
from models.skill import Skill

class SkillResource(Resource):
    def get(self):
        skills = Skill.query.all()
        return [skill.to_dict() for skill in skills]
