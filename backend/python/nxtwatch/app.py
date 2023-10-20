from flask_cors import CORS
from pymongo import MongoClient
import urllib.parse
from flask import Flask, g, request, jsonify
import json
import os
from bson import json_util

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

username = urllib.parse.quote_plus(os.getenv('MONGO_NXTWATCH_USERNAME'))
password = urllib.parse.quote_plus(os.environ.get('MONGO_NXTWATCH_PASSWORD'))
app.config['MONGO_URI'] = f"mongodb://{username}:{password}@mongo:27017/nxtwatch"


def parse_json(data):
    return json.loads(json_util.dumps(data))


def get_db_client():
    if 'mongo' not in g:
        g.mongo = MongoClient(app.config['MONGO_URI'])
    return g.mongo


@app.route("/")
def hello_world():
    return "Hello, World!xd1"


@app.route("/watches", methods=['GET'])
def get_watches():
    client = get_db_client()
    db_nxtwatch = client['nxtwatch']
    collection = db_nxtwatch.get_collection('watches')
    data = list(collection.find({}))
    return parse_json(data)


@app.route("/watch/new", methods=['POST'])
def new_watch():
    try:
        data = request.json
        data.pop('_id', None)  # remove _id field if it exists
        client = get_db_client()
        db_nxtwatch = client['nxtwatch']
        collection = db_nxtwatch.get_collection('watches')
        inserted_id = collection.insert_one(data).inserted_id
        return jsonify({"message": "Watch created", "id": str(inserted_id)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.teardown_appcontext
def close_mongo_connection(error):
    mongo = g.pop('mongo', None)
    if mongo is not None:
        mongo.close()


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
