from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_cors import CORS
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object("config.Config")

CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
mail = Mail(app)

from routes import *

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
