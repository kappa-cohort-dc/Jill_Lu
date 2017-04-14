from flask import Flask, request, render_template, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'secretkey'

@app.route('/', methods =['GET', 'POST'])
def index():
    if 'guess'in session:
        pass
    else:
        session['random_num'] = random.randrange(0, 101)
    print session['random_num']
    return render_template('index.html')

@app.route('/guess', methods =['POST'])
def results():
    if request.form['guess'] < session['random_num']:
        flash('Too low!')
        return render_template('index.html')
    elif request.form['guess']> session['random_num']:
        flash('Too high!')
        return render_template('index.html')
    else:
        print session['random_num'] + 'was the number!'
        session.pop('random_num')
        return redirect('/')

app.run (debug = True)
