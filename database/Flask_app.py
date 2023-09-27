import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from datetime import datetime
from flask_cors import CORS

# python -m http.server [PORT]

#################################################
# Database Setup 
#################################################
engine = create_engine("sqlite:///Netflix_DB.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
global1 = Base.classes.global1
canada = Base.classes.canada
united_kingdom=Base.classes.united_kingdom
australia=Base.classes.australia
egypt=Base.classes.egypt
countries=Base.classes.countries

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:8004"}})
#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:!!!!!!<br/>"
        f"/api/v1.0/global1<br/>"
        f"/api/v1.0/canada<br/>"
        f"/api/v1.0/united_kingdom<br/>"
        f"/api/v1.0/australia<br/>"
        f"/api/v1.0/egypt<br/>"
        f"/api/v1.0/countries"
    )


@app.route("/api/v1.0/global1")
def global1_func():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of global1 data"""
    # Query all passengers
    results = session.query(global1.No, global1.movie, global1.week_at_Top10,global1.hours_seen,global1.duration,global1.views).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_data = []
    for No, movie, week_at_Top10, hours_seen, duration,views in results:
        data_dict = {}
        data_dict["No"] = No
        data_dict["movie"] = movie
        data_dict["week_at_Top10"] = week_at_Top10
        data_dict["hours_seen"] = round(hours_seen,2)
        data_dict["duration"] = str(duration)
        data_dict["views"] = round(views,2)
        all_data.append(data_dict)

    return jsonify(all_data)

@app.route("/api/v1.0/canada")
def canada_func():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    """Return a list of the selected country data"""
    # Query all passengers
    results = session.query(canada.No, canada.movie, canada.week_at_Top10).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_data = []
    for No, movie, week_at_Top10 in results:
        data_dict = {}
        data_dict["No"] = No
        data_dict["movie"] = movie
        data_dict["week_at_Top10"] = week_at_Top10
        all_data.append(data_dict)

    return jsonify(all_data)


@app.route("/api/v1.0/united_kingdom")
def united_func():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    """Return a list of the selected country data"""
    # Query all passengers
    results = session.query(united_kingdom.No, united_kingdom.movie, united_kingdom.week_at_Top10).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_data = []
    for No, movie, week_at_Top10 in results:
        data_dict = {}
        data_dict["No"] = No
        data_dict["movie"] = movie
        data_dict["week_at_Top10"] = week_at_Top10
        all_data.append(data_dict)

    return jsonify(all_data)

@app.route("/api/v1.0/egypt")
def egypt_func():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    """Return a list of the selected country data"""
    # Query all passengers
    results = session.query(egypt.No, egypt.movie, egypt.week_at_Top10).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_data = []
    for No, movie, week_at_Top10 in results:
        data_dict = {}
        data_dict["No"] = No
        data_dict["movie"] = movie
        data_dict["week_at_Top10"] = week_at_Top10
        all_data.append(data_dict)

    return jsonify(all_data)


@app.route("/api/v1.0/australia")
def australia_func():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    """Return a list of the selected country data"""
    # Query all passengers
    results = session.query(australia.No, australia.movie, australia.week_at_Top10).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_data = []
    for No, movie, week_at_Top10 in results:
        data_dict = {}
        data_dict["No"] = No
        data_dict["movie"] = movie
        data_dict["week_at_Top10"] = week_at_Top10
        all_data.append(data_dict)

    return jsonify(all_data)


if __name__ == '__main__':
    app.run(debug=True)
