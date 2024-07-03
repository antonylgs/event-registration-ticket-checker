import os


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY") or "supersecretkey"
    SQLALCHEMY_DATABASE_URI = (
        os.environ.get("DATABASE_URL")
        or "postgresql://postgres:postgres@db:5432/event_db"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MAIL_SERVER = os.environ.get("MAIL_SERVER") or "smtp.gmail.com"
    MAIL_PORT = int(os.environ.get("MAIL_PORT") or 587)
    MAIL_USERNAME = os.environ.get("MAIL_USERNAME")
    MAIL_PASSWORD = os.environ.get("MAIL_PASSWORD")
    MAIL_USE_TLS = os.environ.get("MAIL_USE_TLS") in ["true", "True", "1"]
    MAIL_USE_SSL = os.environ.get("MAIL_USE_SSL") in ["true", "True", "1"]
    MAIL_DEFAULT_SENDER = (
        os.environ.get("MAIL_DEFAULT_SENDER") or "contact@antonylanglois.com"
    )
    BASE_URL = os.environ.get("BASE_URL") or "http://localhost:3000"
