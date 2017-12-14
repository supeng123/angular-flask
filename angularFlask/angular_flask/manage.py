#encoding: utf-8
from extensions import db
from angular_flask import app
from flask_script import Manager

from flask_migrate import Migrate, MigrateCommand

from models.user import User

manager = Manager(app)

# 要使用flask_migrate,要绑定app和db
migrate = Migrate(app, db)

# 把migrateCommand命令添加到manager中
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()