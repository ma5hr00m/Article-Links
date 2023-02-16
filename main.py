from flask import Flask, render_template

# change the templates folder while creating the app 
app = Flask(__name__, template_folder='./views')


@app.route('/')
def index():
    return render_template('index.html')

@app.errorhandler(404)
def pagenot_found(e):
    return render_template('404.html')

if __name__ == '__main__':
    app.run()