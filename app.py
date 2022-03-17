from flask import Flask, render_template, redirect, url_for, request, session, Response
import database_manager

app = Flask(__name__)

app.secret_key = b'_5#y2L"F4Q8zxec]/'


@app.route("/", methods=["GET", "POST"])
def index():
    session.clear()
    if request.method == "POST":
        if request.form.get("start") == "start":
            current_player = request.form["player"]
            session['player'] = current_player
            return Response(status=204)
    return render_template("index.html")


@app.route("/result", methods=['GET', 'POST'])
def result():
    if request.method == 'POST':
        end_result = request.form.get('result')
        database_manager.add_scores(session['player'], end_result)
        data = database_manager.show_scores()
        return render_template('result.html', data=data)
    data = database_manager.show_scores()
    return render_template('result.html', data=data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
