#encoding: utf-8
from flask_uploads import configure_uploads
from flask import Flask
from flask_restful import Api
from flask_cors import CORS
import config
import os

from tasks.auth import Login, SignUp
from tasks.uploader import UploaderFile
from extensions import bcrypt, db, photos

app = Flask(__name__)
app.config.from_object(config)
app.config['SECRET_KEY'] = os.urandom(24)
app.config['UPLOADED_PHOTO_DEST'] = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'static')

configure_uploads(app, photos)

db.init_app(app)
bcrypt.init_app(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*", "supports_credentials": True}})
api = Api(app)

api.add_resource(SignUp, '/api/signup')
api.add_resource(Login, '/api/login')
api.add_resource(UploaderFile, '/api/uploadFile')

if __name__ == '__main__':
	app.run(debug=True)