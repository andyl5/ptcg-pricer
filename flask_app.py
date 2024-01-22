from flask import Flask, jsonify, request
from flask_cors import CORS
from modules.main import main

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def retrieve_data():
    user_input = request.args.get('inputDecklist')
    json_response = main(user_input)
    return jsonify(json_response)
