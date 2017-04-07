from flask import Flask, render_template, request
app = Flask(__name__)



@app.route('/', methods=["GET", "POST"])
def homepage():
    print dir (request)
    print request.form["myfirstdata"]       #Post render
    if request.form["myfirstdata"]== "noob":
        return "welcome!"
    else:
    # print request.value["myfirstdata"]
    return render_template('helloworldflask.html')


app.run(debug = True)
