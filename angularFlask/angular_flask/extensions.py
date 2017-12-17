#encoding: utf-8
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_uploads import UploadSet

bcrypt = Bcrypt()

db = SQLAlchemy()

photos = UploadSet('PHOTO')