from flask import Flask, jsonify, request
from flask_cors import CORS
from modules.parse_decklist import parse_decklist

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def retrieve_data():
    input_decklist = request.args.get('inputDecklist')
    deck_data = parse_decklist(input_decklist)
    return jsonify(deck_data)