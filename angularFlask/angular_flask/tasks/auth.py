#encoding: utf-8
from flask_restful import Resource, abort
from models.user import User
from extensions import db
from reparses import loginParse

class Login(Resource):
	def post(self):
		data = loginParse.parse_args()
		username = data.get('username')
		password = data.get('password')

		user = User.query.filter(User.username == username).first()
		isPasswordValid = user.check_password(password)

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








