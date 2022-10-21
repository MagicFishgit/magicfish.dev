from distutils.debug import DEBUG
from email import message
import imp
from flask import Flask
from mimetypes import init
from sre_constants import SUCCESS
from flask import Blueprint, render_template, request
from flask_mail import Mail, Message
from mailconfig import mail_username, mail_password

views = Blueprint('views', __name__)

app = Flask(__name__)

app.config.update(dict(
    DEBUG=True,
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 587,
    MAIL_USE_TLS = True,
    MAIL_USE_SSL = False,
    MAIL_USERNAME = mail_username,
    MAIL_PASSWORD = mail_password,
))

mail = Mail(app)

@views.route('/')
def base():
    return render_template("base.html")

@views.route('/about')
def about():
    return render_template("about.html")

@views.route('/projects')
def projects():
    return render_template("projects.html")

@views.route('/contact', methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        firstName = request.form.get('firstName')
        lastName = request.form.get('lastName')
        email = request.form.get('emailInfo')
        phone = request.form.get('phoneNumber')
        message = request.form.get('message')

        msg = Message(subject=f"Contact request from {firstName} {lastName}", body=f"Email: {email} \nPhone: {phone} \n\n\n Message: {message}", sender=mail_username, recipients=['rudivisagie@icloud.com'])
        mail.send(msg)
        return render_template("contact.html", success=True)


    return render_template("contact.html")