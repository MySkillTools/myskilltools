from datetime import datetime
from . import db

class Skill(db.Model):
    __tablename__ = 'skill'
    skill_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    category_id = db.Column(db.Integer, db.ForeignKey('category.category_id'))
    last_modified = db.Column(db.DateTime)
    category = db.relationship('Category', backref=db.backref('skills', lazy=True))

    def to_dict(self):
        return {
            'skill_id': self.skill_id,
            'name': self.name,
            'category_id': self.category_id,
            'last_modified': self.last_modified.strftime('%Y-%m-%d %H:%M:%S') if self.last_modified else None
        }
