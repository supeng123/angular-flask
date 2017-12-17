#encoding: utf-8
from flask_restful import Resource
from werkzeug.utils import secure_filename
from reparses import uploaderParse
from flask import current_app, send_from_directory, abort
import os
from extensions import photos
from models.user import User

class UploaderFile(Resource):
    def post(self):
        data = uploaderParse.parse_args()
        token = data.get('Authorization')
        print(data)
        print(token)
        if User.verfiy_auth_token(token):
            f = data.get('file')
            filename = photos.save(f)
            print filename
            url =  photos.url(filename)
            return url
        else:
            abort(404, 'you have no right to upload file because authentication failed!')

class SecondUploader(Resource):
    def post(self):
        data = uploaderParse.parse_args()
        f = data.get('file')
        upload_path = os.path.join(current_app.config['UPLOADED_PHOTO_DEST'], secure_filename(f.filename))
        f.save(upload_path)
        streamedFile = send_from_directory(current_app.config['UPLOADED_PHOTO_DEST'], f.filename)
        return True