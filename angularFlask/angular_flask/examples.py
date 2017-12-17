# #encoding: utf-8
# from flask import Flask
# from flask_restful import Api, Resource, abort, reqparse
# from flask_cors import CORS
# import config
# import os
#
# from tasks.auth import Login, SignUp
# from extensions import bcrypt, db
#
#
# app = Flask(__name__)
# app.config.from_object(config)
# app.config['SECRET_KEY'] = os.urandom(24)
#
# db.init_app(app)
# # with app.app_context():
# #     db.create_all()
#
# bcrypt.init_app(app)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
# api = Api(app)
#
# @app.route('/')
# def hello_world():
# 	return 'hello world'
#
# TODOS = {
# 	'todo1': {'task': 'build an API'},
# 	'todo2': {'task': '?????'},
# 	'todo3': {'task': 'profit!'}
# }
#
# def abort_if_todo_doesnt_exist(todo_id):
# 	if todo_id not in TODOS:
# 		abort(404, message="Todo {} doesn't exist".format(todo_id))
#
# parse = reqparse.RequestParser()
# parse.add_argument('task', type=str)
#
# class Todo(Resource):
# 	def get(self, todo_id):
# 		abort_if_todo_doesnt_exist(todo_id)
# 		return TODOS[todo_id]
#
# 	def delete(self, todo_id):
# 		abort_if_todo_doesnt_exist(todo_id)
# 		del TODOS[todo_id]
# 		return TODOS, 200
# 		# return '', 204
#
# 	def put(self, todo_id):
# 		args = parse.parse_args()
# 		task = {'task': args['task']}
# 		TODOS[todo_id] = task
# 		return task, 201
#
# class TodoList(Resource):
# 	def get(self):
# 		return TODOS
#
# 	def post(self):
# 		args = parse.parse_args()
# 		todo_id = int(max(TODOS.keys()).lstrip('todo')) + 1
# 		todo_id = 'todo%i' % todo_id
# 		TODOS[todo_id] = {'task': args['task']}
# 		return TODOS, 200
# 		# return TODOS[todo_id], 201
#
#
# class HelloWorld(Resource):
# 	def get(self):
# 		return {'hello': 'world'}
#
#
# api.add_resource(HelloWorld, '/')
# api.add_resource(TodoList, '/todos')
# api.add_resource(Todo, '/todos/<todo_id>')
# api.add_resource(SignUp, '/api/signup')
# api.add_resource(Login, '/api/login')
#
# if __name__ == '__main__':
# 	app.run(debug=True)