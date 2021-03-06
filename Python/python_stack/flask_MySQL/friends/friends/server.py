from flask import Flask, redirect, render_template, request
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friends')

@app.route('/')
def index():
    query = 'SELECT * FROM friends'
    friends = mysql.query_db('SELECT * From friends')
    return render_template('index.html', all_friends = friends)

@app.route('/friends', methods=['POST'])
def create():
    query = 'INSERT INTO friends(first_name, last_name, age, friends_since, created_at, updated_at) VALUES(:first_name, :last_name, :age, :friends_since, NOW(), NOW())'

    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'age': request.form['age'],
        'friends_since': request.form['friends_since']
    }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<friend_id>')
def show(friend_id):
    query = "SELECT * FROM friends where id= :specific_id"
    data = {'specific_id':friend_id}
    friends = mysql.query_db(query, data)
    return render_template('index.html', one_friend = friends[0])

@app.route('/remove_friend/<friend_id>', methods=['POST'])
def delete(friend_id):
    query = 'DELETE FROM friends WHERE id = :id'
    data = {'id': friend_id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
