from . import db

class Sector(db.Model):
    __tablename__ = 'sector'
    sector_id = db.Column(db.Integer, primary_key=True)
    color = db.Column(db.String(50))
    name = db.Column(db.String(100))
    last_modified = db.Column(db.DateTime)

    def to_dict(self):
        return {
            'sector_id': self.sector_id,
            'color': self.color,
            'name': self.name,
            'last_modified': self.last_modified
        }
