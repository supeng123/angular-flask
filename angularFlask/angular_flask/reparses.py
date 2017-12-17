#encoding: utf-8
import werkzeug
from flask_restful import reqparse

loginParse = reqparse.RequestParser()
uploaderParse = reqparse.RequestParser()

loginParse.add_argument('username', type=str)
loginParse.add_argument('password', type=str)

uploaderParse.add_argument('file', type=werkzeug.datastructures.FileStorage, location='files')
uploaderParse.add_argument('Authorization', type=str, location='headers')