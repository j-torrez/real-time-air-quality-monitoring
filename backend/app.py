from flask import Flask, jsonify
from flask_cors import CORS
import random
import time
import math

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = []
    current_time = time.time()
    for i in range(100):
        hour = (i % 24) + 1
        data.append({
            "timestamp": time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(current_time - i*60)),
            "pm25": round(random.uniform(5, 50) * math.sin(hour / 24 * 2 * math.pi) + 25, 2),
            "pm10": round(random.uniform(10, 60) * math.cos(hour / 24 * 2 * math.pi) + 30, 2),
            "temperature": round(random.uniform(15, 35) + 10 * math.sin(hour / 24 * 2 * math.pi), 2),
            "humidity": round(random.uniform(20, 80) + 10 * math.cos(hour / 24 * 2 * math.pi), 2),
            "co2": round(random.uniform(300, 600) * math.sin(hour / 24 * 2 * math.pi) + 400, 2)
        })
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5001)


