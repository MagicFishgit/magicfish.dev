from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/about')
def login():
    return render_template("about.html")

@auth.route('/projects')
def logout():
    return render_template("projects.html")

@auth.route('/contact')
def sign_up():
    return render_template("contact.html")