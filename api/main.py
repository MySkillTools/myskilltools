# app.py
from flask import Flask
from flask_restful import Api

app = Flask(__name__)
api = Api(app)

# Import the resources
from resources.HelloWorld import HelloWorld

# Add resources to the API
api.add_resource(HelloWorld, '/hello')

if __name__ == '__main__':
    app.run(debug=True)
