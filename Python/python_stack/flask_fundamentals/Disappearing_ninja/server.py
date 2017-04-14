from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'No ninjas here'

@app.route()
