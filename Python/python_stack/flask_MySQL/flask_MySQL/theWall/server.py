from flask import Flask, redirect, render_template, request, session, flash
import re
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = 'purple_unicorn'
mysql = MySQLConnector(app, 'the_wall')
EMAILREGEX = re.compile(r'^[a-zA-Z0-9.+-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+$')
#login registration
    #routes -> login registration page
    #login
        #route
            #route to handle login- "POST"
                #validation
    #registration
        #route
            #rout to handle registration -"POST"
#the message board
    #messages
    #comments
#showing login registration form
@app.route('/', methods = ['GET'])
def index():
    return render_template('index.html', messages=flash)

@app.route('/register', methods=['POST'])
def register():
    fname = request.form['first_name']
    lname = request.form['last_name']
    email = request.form['email']
    pword = request.form['password']
    cword = request.form['confirm_password']
    isValid = True;
    if (len(fname) < 1 or len(fname) > 45):
        flash('First name has to be between 1 and 45 characters')
        isValid = False
    elif not fname.isalpha():
        flash('First name can only be alphabetical')
        isValid = False

    if (len(lname) < 1 or len(lname) > 45):
        flash('Last name has to be between 1 and 45 characters')
        isValid = False
    elif(not lname.isalpha()):
        flash('Last name can only be alphabetical')
        isValid = False

    if (len(email) == 0):
        flash('Email cannot be blank')
        isValid = False
    elif not EMAILREGEX.match(email):
        flash('email has to be in john@doe.com format.')
        isValid = False

    if (len(pword) < 8 ):
        flash('Password must be at least 8 characters')
        isValid = False

    if (len(cword) < 8):
        flash('Confirmation must match password')
        isValid = False

    if isValid:
        query = "INSERT into users (first_name, last_name, email, password, created_at, updated_at) VALUES(:a, :b, :c, :d, now(), now())"
        data = {
        'a': fname,
        'b': lname,
        'c': email,
        'd': pword
        }
        mysql.query_db(query, data)
    flash('Success!')
    return redirect('/')
    #do i need to access database
        #what do i need before the database
        #what data do i need to go to the database
    #request.form [''] --> clean data?
    #query= ""
    #data = {}
    #mysql.query_db
    #what do i need to do before i exit this
        #shouid i reroute
        #should i send data to the view
@app.route('/login', methods = ['POST'])
def login():
    email = request.form['email']
    pword = request.form['password']
    isValid = True;

    if (len(email) == 0):
        flash('Email cannot be blank')
        isValid = False
    elif not EMAILREGEX.match(email):
        flash('email has to be in john@doe.com format.')
        isValid = False

    if (len(pword) < 8 ):
        flash('Password must be at least 8 characters')
        isValid = False
    if isValid:
        query = 'SELECT * FROM users where email=:one '
        data ={
            'one': email
        }
        result = mysql.query_db(query, data)
        if result == []:
            flash('invalid user')
            return redicrect ('/')
        else:
            user = result[0]
            if user['password']== pword:
                flash('successful login!')
                session['logged_id'] = user['id']
                session['logged_name'] = user['first_name']
                return redirect('/dashboard')
            else:
                flash('ya messed up, try again!')
                return redirect('/')
    return redirect('/')
#don't render from a ['POST']!!! always redirect
@app.route('/dashboard')
def dashboard():
    query = "SELECT messages.id, first_name, last_name, messages.messages, messages.created_at FROM messages JOIN users ON users.id = messages.user_id"
    result= mysql.query_db(query)
    #return str(result) to print on screen
    query2 = "SELECT comments.message_id, first_name, last_name, comments.comments, comments.created_at FROM comments JOIN users ON users.id = comments.user_id"
    result2= mysql.query_db(query2)



    return render_template('dashboard.html', messages = result, comments = result2 )

@app.route('/message', methods =['POST'])
def createMessage():
    message = request.form['message']
    users_id = session['logged_id']
    query = "INSERT INTO messages (messages.messages, created_at, updated_at, user_id) VALUES(:one, now(), now(), :two)"
    data ={
        'one': request.form['message'],
        'two': session['logged_id']
    }
    mysql.query_db(query, data)
    return redirect('/dashboard')

@app.route('/messages/<message_id>/comments', methods = ['POST'])
def createComment(message_id):
    query = "INSERT INTO comments (comments.comments, created_at, updated_at, message_id, user_id) VALUES(:one, now(), now(), :two, :three)"
    data ={
        'one': request.form['comment'],
        'two': message_id,
        'three': session['logged_id']
    }
    mysql.query_db(query, data)
    return redirect('/dashboard')
@app.route('/log_out')
def log_out():
    session.clear()
    return redirect('/')
app.run(debug = True)
