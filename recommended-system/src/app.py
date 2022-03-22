from flask import Flask
import filteringdata
import json
app = Flask(__name__)

@app.route('/recommend')
def index():
    result = filteringdata.returnRecommended()
    return json.dumps(result)

if __name__ == "__main__":
    app.run()