from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def landing_page():
    return render_template('index.html')

@app.route('/ninja')
def ninjas():
    return render_template('ninja.html')

@app.route('/dojos')
def dojos():
    return render_template('dojos.html')



app.run(debug = True)
