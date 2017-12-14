#encoding: utf-8

from flask_restful import Resource, abort, reqparse
from models.user import User
from extensions import db

loginParse = reqparse.RequestParser()
loginParse.add_argument('username', type=str)
loginParse.add_argument('password', type=str)


class Login(Resource):
	def post(self):
		data = loginParse.parse_args()
		username = data.get('username')
		password = data.get('password')

		user = User.query.filter(User.username == username).first()
		isPasswordValid = user.check_password(password)
		print(isPasswordValid,user)
		if user and isPasswordValid:
			token = user.generate_auth_token()
			return token
		else:
			abort(404, '{} is not found'.format(username))


class SignUp(Resource):
	def post(self):
		data = loginParse.parse_args()
		username = data.get('username')
		password = data.get('password')
		print (username, password)

		user = User.query.filter(User.username == username).first()

		if not user:
			newUser = User(username, password)
			newUser.set_pasword(password)
			db.session.add(newUser)
			db.session.commit()
			return True
		else:
			abort(404, '{} is already be used, please change another name'.format(username))








