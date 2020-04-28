# Authored by https://github.com/murizvi

from flask import Flask, request, jsonify, make_response, abort
import json
# from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, MetaData, Table
import configparser
from flask_cors import CORS

config = configparser.ConfigParser()
config.read('config.ini')
DB = config['Database']

conxn_string = ('mysql+mysqlconnector://{user}:{pswd}@{host}:{port}/{db}'.format(
	user=DB['User'], pswd=DB['Password'], host=DB['Host'], port=DB['Port'], db=DB['DBName']))

engine = create_engine(conxn_string, convert_unicode=True)
metadata = MetaData(bind=engine)

# Tables
# ...
users = Table('users', metadata, autoload=True)
posts = Table('posts', metadata, autoload=True)
assignments = Table('assignments', metadata, autoload=True)

app = Flask(__name__)
# enables CORS
CORS(app)

app.config['DEBUG'] = True

# db = SQLAlchemy(app)

# Error handlers
@app.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad request'}), 400)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


def query_db(query, data):
	with engine.connect() as con:
		res = con.excecute(q)
	return res


@app.route('/authenticate', methods=['POST'])
def authenticate():
	email = request.json['email']
	password = request.json['password']
	q = "select * from users where email = '{}' and password = '{}'".format(email, password)
	# query db for user
	user = engine.execute(q).first()
	# print(users.select(users.c.email == email).execute().first())
	if user is None:
		abort(401)
	return jsonify(dict(user))


@app.route('/users', methods=['GET'])
def get_users():
	ids = request.args.get('ids', None)
	q = "select * from users"
	if ids is not None:
		q += "where id in {}".format(tuple(ids))
	# query db for user
	users = {'users': [dict(u) for u in engine.execute(q)]}
	return jsonify(users)

@app.route('/users/<int:id>', methods=['GET'])
def get_user_byid(id):
	q = "select * from users where id = {}".format(id)
	# query db for user
	user = engine.execute(q).first()
	return jsonify(dict(user))


@app.route('/students/<int:id>', methods=['GET'])
def get_students_filtered(id):
	# filter query by type (parent/teacher/class/school??)
	st = request.args.get('type', None)
	q = 'select users.* from users inner join {} on users.user_id = {}.student_id\
	where {}_id = {}'

	if st is None:
		abort(400)
	elif st == 'parent':
		print('in parent')
		q = q.format('parent_student_relations', 'parent_student_relations', 'parent', id)
	else: # st == 'course'
		q = q.format('student_course_relations', 'student_course_relations', 'course', id)
	# query db for students
	students = {'students': [dict(s) for s in engine.execute(q)]}
	
	return jsonify(students)


@app.route('/courses/<int:id>', methods=['GET'])
def get_courses_byid(id):
	t = request.args.get('type', None)
	q = ''
	if t is None:
		abort(400)
	elif t == 'parent':
		q = 'select courses.* from courses inner join student_course_relations \
		on courses.course_id = student_course_relations.course_id where student_id = {}'
		q = q.format(id)
	else: # t == 'teacher'
		q = 'select * from courses where teacher_id = {}'.format(id)
	# query db for courses
	courses = {'courses': [dict(c) for c in engine.execute(q)]}
	return jsonify(courses)


@app.route('/posts/<int:classid>', methods=['GET'])
def get_posts_byid(classid):
	q = "select * from posts where course_id = {}".format(classid)
	# query db for posts associated with class
	posts = {'posts': [dict(p) for p in engine.execute(q)]}
	return jsonify(posts)

@app.route('/posts', methods=['POST'])
def create_post():
	data = request.json
	print(data)
	# q = "insert into posts (course_id, title, post_date, content)\
	# values {}; select last_insert_id()".format(tuple((data['course_id'], data['title'], 
	# 									data['post_date'], data['content'])))
	conxn = engine.connect()
	r = conxn.execute(posts.insert(), course_id=data['course_id'], title=data['title'],
									post_date=data['post_date'], content=data['content'])
	# r = conxn.execute(q, multi=True)
	# r = engine.execute('select last_insert_id()')
	created = r.last_inserted_params()
	created['id'] = r.inserted_primary_key[0]
	return make_response(jsonify({
		'message': 'Success',
		'data': created}), 201)


@app.route('/records/<int:classid>/<int:studentid>', methods=['GET'])
def get_records(classid, studentid):
	# update query db for user
	q = ('select * from assignments where course_id = {} and student_id = {}'
		.format(classid, studentid))
	records = {'records': [dict(r) for r in engine.execute(q)]}
	return jsonify(records)

@app.route('/records', methods=['POST'])
def create_record():
	data = request.json
	print(data)
	conxn = engine.connect()
	r = conxn.execute(assignments.insert(), course_id=data['course_id'], student_id=data['student_id'],
		title=data['title'], assignment_date=data['assignment_date'], grade=data['grade'],
		comments=data['comments'], attachment_path=data['attachment_path'])
	created = r.last_inserted_params()
	created['id'] = r.inserted_primary_key[0]
	return make_response(jsonify({
		'message': 'Success',
		'data': created}), 201)


###### UNIMPLEMENTED ######


# @app.route('/users', methods=['GET'])
# def get_users():
# 	ut = request.args.get('type')
# 	if ut:
# 		pass
# 		# filter query by type (parent/teacher)
# 	# query db for users
# 	users = None
# 	return jsonify([{'id':1, 'name': 'Bill', 'type': 'teacher'}])

# @app.route('/users/<int:id>', methods=['POST'])
# def update_user(id):
# 	# update query db for user
# 	user = None
# 	return True

# @app.route('/users', methods=['POST'])
# def create_user():
# 	data = request.get_json()
# 	if 'id' not in data:
# 		abort(400)
# 	return True


# @app.route('/students', methods=['GET'])
# def get_students():
# 	with open('students.json') as s:
# 		students = json.load(s)
# 	return jsonify(students)


# @app.route('/courses', methods=['GET'])
# def get_courses():
# 	with open('courses.json') as s:
# 		courses = json.load(s)
# 	return jsonify(courses)

# @app.route('/courses', methods=['POST'])
# def create_course():
# 	data = request.get_json()
# 	if 'id' not in data:
# 		abort(400)
# 	return True


# @app.route('/records', methods=['POST'])
# def create_record():
# 	data = request.get_json()
# 	if 'id' not in data:
# 		abort(400)
# 	# create record in db
# 	return True


# @app.route('/posts', methods=['GET'])
# def get_posts():
# 	with open('posts.json') as s:
# 		posts = json.load(s)
# 	return jsonify(posts)


# @app.route('/schools', methods=['GET'])
# def get_schools():
# 	schools = None
# 	return schools


app.run()