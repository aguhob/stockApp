from flask import Flask, render_template, request
import requests
import quandl
import numpy as np
import pandas as pd
import datetime
from bokeh.plotting import figure, output_file, show
from bokeh.embed import file_html
from bokeh.resources import CDN

app = Flask(__name__)  # create the application instance :)
app.vars = {}


def dateFormat(aDatetime):
    return ("%s-%s-%s" % (aDatetime.year, aDatetime.month, aDatetime.day))


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    else:
        app.vars['ticker'] = request.form['TickerChoice']
        print("User Requested: " + request.form['TickerChoice'])
        now = datetime.datetime.now()
        stockDF = quandl.get("WIKI/" + app.vars['ticker'], returns='pandas', end_date=dateFormat(now),
                             start_date=dateFormat(now - datetime.timedelta(days=30)))

        p = figure(plot_width=400, plot_height=400,
                   x_axis_type='datetime', x_axis_label="Last 30 days",
                   y_axis_label=app.vars["ticker"] + " Price")
        p.line(stockDF.index.values.tolist(), stockDF['Close'].values.tolist())
        return file_html(p, CDN, "myplot")

# from flask import Flask, render_template
# app = Flask(__name__)
# @app.route('/')
# def hello(name=None):
#     return render_template('index.html', name=name)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=33507)
