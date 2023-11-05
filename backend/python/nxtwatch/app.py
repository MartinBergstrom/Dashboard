import sys

from flask_cors import CORS
from pymongo import MongoClient
import urllib.parse
from flask import Flask, g, request, jsonify
import json
import os
from bson import json_util, ObjectId

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


def add_new_to_priority_list(inserted_id):
    client = get_db_client()
    db_nxtwatch = client['nxtwatch']
    collection = db_nxtwatch.get_collection('priority')
    priority_doc = collection.find_one({})
    if priority_doc:
        priority_list_id = priority_doc['_id']
        update_filter = {'_id': priority_list_id}
        collection.update_one(update_filter, {
            '$push': {
                'priorities': inserted_id
            }
        })
        print("Successfully added a new priority last in list")
    else:
        raise Exception("No priority list found")


@app.route("/")
def hello_world():
    return "Hello, World!xd1"


@app.route("/watches", methods=['GET'])
def get_watches():
    client = get_db_client()
    db_nxtwatch = client['nxtwatch']
    collection = db_nxtwatch.get_collection('watches')
    data = list(collection.find({}))
    for document in data:
        document['_id'] = str(document['_id'])  # Convert the Objectid to simple string id
    return parse_json(data)


@app.route("/watches/priority", methods=['GET'])
def get_priority():
    client = get_db_client()
    db_nxtwatch = client['nxtwatch']
    collection = db_nxtwatch.get_collection('priority')
    priority_doc = collection.find_one({})
    if priority_doc:
        return parse_json(priority_doc)
    else:
        return "Priority list not found", 404


@app.route("/watch/<watch_id>", methods=['PUT'])
def update_watch(watch_id):
    try:
        data = request.json
        data["_id"] = ObjectId(watch_id)
        client = get_db_client()
        db_nxtwatch = client['nxtwatch']
        collection = db_nxtwatch.get_collection('watches')
        existing = collection.find_one({'_id': ObjectId(watch_id)})
        if existing:
            update_filter = {'_id': ObjectId(watch_id)}
            collection.replace_one(update_filter, data)
        else:
            error_line = "The watch with provided id: " + watch_id + "does not exist"
            return jsonify({"error": error_line}), 404
        return jsonify({"message": "Watch updated", "id": str(watch_id)}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/watch/new", methods=['POST'])
def new_watch():
    try:
        data = request.json
        data.pop('_id', None)  # remove _id field if it exists
        client = get_db_client()
        db_nxtwatch = client['nxtwatch']
        collection = db_nxtwatch.get_collection('watches')
        inserted_id = collection.insert_one(data).inserted_id
        add_new_to_priority_list(inserted_id)
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
