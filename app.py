from flask import Flask, render_template, redirect, url_for, request, session
import database_manager

app = Flask(__name__)

app.secret_key = b'_5#y2L"F4Q8zxec]/'


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/result", methods=["GET", "POST"])
def result():
    if 'user_name' in session:
        return render_template("result.html", result=session["count"])

    return render_template("index.html", username="not logged in")


@app.route('/logout')
def logout():
    to_logout = request.args.get('logout')
    if to_logout == "yes":
        session.clear()
        return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
