"""
This is the file containing all of the endpoints for our flask app.
The endpoint called `endpoints` will return all available endpoints.
"""

from flask import Flask, send_from_directory
from flask_restful import Api, Resource
from .src.endpoints.endpoints import Endpoints
from .src.endpoints.LogIn import GoogleLogIn, LogInSuccessPage

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
api = Api(app)
session = {}

class Index(Resource):
    def get(self):
        return send_from_directory(app.static_folder, 'index.html')


api.add_resource(Index, "/")
api.add_resource(Endpoints, "/endpoints")
api.add_resource(GoogleLogIn, "/login", resource_class_kwargs={})
api.add_resource(LogInSuccessPage, "/loggedin")

if __name__ == "__main__":
    app.run(debug=True)
