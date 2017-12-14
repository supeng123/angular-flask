#encoding: utf-8
from flask import current_app
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from itsdangerous import BadSignature, SignatureExpired
from uuid import uuid4

from extensions import bcrypt, db


class User(db.Model):
	__tablename__ = 'users'

	id = db.Column(db.String(45), primary_key=True)
	username = db.Column(db.String(255))
	password = db.Column(db.String(255))

	def __init__(self, username, password):
		self.id = str(uuid4())
		self.username = username
		self.password = password

	def set_pasword(self, password):
		encryptPassword = bcrypt.generate_password_hash(password)
		self.password = encryptPassword
		print(encryptPassword)
		return  encryptPassword

	def check_password(self, password):
		return bcrypt.check_password_hash(self.password, password)

	@staticmethod
	def verfiy_auth_token(token):
		serializer = Serializer(current_app.config['SECRET_KEY'])
		try:
			data = serializer.loads(token)
		except SignatureExpired:
			return None
		except BadSignature:
			return None

		user = User.query.filter_by(id=data['id']).first()
		return user

	def generate_auth_token(self, expiration = 600):
		s = Serializer(current_app.config['SECRET_KEY'], expires_in = expiration)
		return s.dumps({'id': self.id})
