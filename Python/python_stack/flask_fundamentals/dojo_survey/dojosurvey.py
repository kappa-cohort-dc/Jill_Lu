from flask import Flask, render_template, request, redirect

app = Flask(__name__)
@app.route('/', methods =['POST', 'GET'])
def index():
    location = ['San Jose', 'Seattle', 'Washington, D.C.']
    language = ['Python', 'Javascript', 'Ruby']
    return render_template('index.html', location = location, language = language)

@app.route('/create', methods=['POST'])
def create_user():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template('input.html', name = name, location =location, language = language, comment = comment)

app.run(debug = True)
