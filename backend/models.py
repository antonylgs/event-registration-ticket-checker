from app import db
from sqlalchemy.dialects.postgresql import UUID
import uuid


class Registration(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    day1 = db.Column(db.Boolean, default=False)
    day2 = db.Column(db.Boolean, default=False)
    ticket_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4, unique=True)
    ticket_used = db.Column(db.Boolean, default=False)
