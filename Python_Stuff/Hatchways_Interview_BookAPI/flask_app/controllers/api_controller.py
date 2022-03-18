from operator import attrgetter, methodcaller
from turtle import pos
from typing import Iterable
from flask import Flask
from jinja2 import Undefined
from flask_app import app
from flask import jsonify
import requests

# I recommend looking into ways to improve this code

sortparams = ['id','reads','likes','popularity','']
direction = ['asc', 'dec','']

@app.get('/api/ping')
@app.get('/api/ping/<string:tag>')
def test1(tag='tech'):
    response = requests.get(f"https://api.hatchways.io/assessment/blog/posts?tag={tag}")
    data = response.json()
    if data:
        apiData = {"success": True}
        return jsonify(apiData), 200
    else:
        apiData = {"success": False}
        return jsonify(apiData), 400


# @app.get('/api/posts')
@app.get('/api/posts/<string:tag>')
@app.get('/api/posts/<string:tag>/<string:sortBy>')
@app.get('/api/posts/<string:tag>/<string:sortBy>/<string:direction>')




def test(tag='tech', sortBy='popularity', direction='asc'):
    if tag==Undefined:
        error = {
            "error": "Tags parameter is required"
        }
        return jsonify(error), 400
    elif sortBy not in sortparams:
        error = {
            "error": "sortBy parameter is invalid"
        }
        return jsonify(error), 400
    else:
        response = requests.get(f"https://api.hatchways.io/assessment/blog/posts?tag={tag}&sortBy={sortBy}&direction={direction}")
        data = response.json()
        sort = []
        sort.append(data)
        def sortparam(sort):
            return sort.get(f'{sortBy}')
        if data:
            if sortBy:
                # sortedRes = sorted(sort, key=attrgetter (f'{sortBy}'))
                sort = sorted(Iterable, key=sortparam)
                return(sort)
            else:
                return jsonify(sort), 200