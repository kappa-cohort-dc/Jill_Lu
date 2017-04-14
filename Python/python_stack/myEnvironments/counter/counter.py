from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = 'cherry blossom pink'

@app.route('/')
def index():
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 0
    return render_template('index.html')

@app.route('/count', methods= ['post'])
def count():
    session['counter'] += 1
    return redirect('/')

@app.route('/double', methods =['post'])
def double():
    session['counter'] += 1
    return redirect('/')

@app.route('/reset', methods=['post'])
def reset():
    session['counter'] = 0
    return redirect('/')

app.run(debug = True)
