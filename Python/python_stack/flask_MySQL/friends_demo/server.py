from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
mysql = MySQLConnector(app, 'friendsdb')

@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', all_friends=friends)

@app.route('/friends', methods=['POST'])
def create():
    print request.form['first_name']
    print request.form['last_name']
    print request.form['occupation']
    return redirect('/')

@app.route('/friends/<friends_id>')
def show(friend_id):
    query = "SELECT * FROM friends where id= :specific_id"
    data = {'specific_id': friend_id}
    friends = mysql.query_db(query, data)
    return render_template('index.html', one_friend = friends[0])


app.run(debug = True)
