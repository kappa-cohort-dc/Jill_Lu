from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,     )
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/success', methods =['POST'])
def success():
