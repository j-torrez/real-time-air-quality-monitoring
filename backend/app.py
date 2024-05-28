from flask import Flask, jsonify
from flask_cors import CORS
import random
import time

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = []
    current_time = time.time()
    for i in range(100):
        data.append({
            "timestamp": time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(current_time - i*60)),
            "pm25": round(random.uniform(5, 50), 2),
            "pm10": round(random.uniform(10, 60), 2)
        })
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
