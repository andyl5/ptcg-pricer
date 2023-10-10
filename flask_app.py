from flask import Flask, jsonify, request
from flask_cors import CORS
from modules.parse_decklist import parse_decklist

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def retrieve_data():
    imported_decklist = request.args.get('importedDecklist')
    response = parse_decklist(imported_decklist)    
    return jsonify(response)