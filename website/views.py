from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def base():
    return render_template("base.html")

@views.route('/projects')
def projects():
    return render_template("projects.html")

@views.route('/contact')
def contact():
    return render_template("contact.html")