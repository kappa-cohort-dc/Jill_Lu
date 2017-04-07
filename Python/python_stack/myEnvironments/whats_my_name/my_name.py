from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def my_name():
    return render_template('index.html')

@app.route('/process', methods=['post'])
def submit():
    print 'Submitted!'
    return redirect('/')

app.run(debug = True)
