from flask import Flask, render_template
app = Flask(__name__)

@app.route('/', methods =['POST', 'GET'])
def index():
    return '<h1>No ninjas here</h1>'

@app.route('/ninja')
def ninja():
    return render_template('index.html')


@app.route('/ninja/<color>')
def process(color):
    return render_template('ninjas.html', color = color)


app.run(debug = True)
