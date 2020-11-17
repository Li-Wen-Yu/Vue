from flask import Flask,render_template
import json

app = Flask(__name__)
app.jinja_env.variable_start_string = '{['
app.jinja_env.variable_end_string = ']}'

@app.route("/",methods=['GET'])
def msg():
    return render_template("index.html",msg="hello world")

@app.route("/getnames",methods=['POST'])
def getnames():
    return json.dumps(["wei","long","yu"])

if __name__ == '__main__':
    app.run(debug=True)
