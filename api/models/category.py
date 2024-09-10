from datetime import datetime
from . import db

class Category(db.Model):
    __tablename__ = 'category'
    category_id = db.Column(db.Integer, primary_key=True)
    color = db.Column(db.String(50))
    name = db.Column(db.String(100))
    sector_id = db.Column(db.Integer, db.ForeignKey('sector.sector_id'))
    last_modified = db.Column(db.DateTime)
    sector = db.relationship('Sector', backref=db.backref('categories', lazy=True))

    def to_dict(self):
        return {
            'category_id': self.category_id,
            'color': self.color,
            'name': self.name,
            'sector_id': self.sector_id,
            'last_modified': self.last_modified.strftime('%Y-%m-%d %H:%M:%S') if self.last_modified else None
        }
