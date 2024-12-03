from flask import Flask, request, jsonify
from detoxify import Detoxify
import numpy as np

app = Flask(__name__)
model = Detoxify('original')

def convert_to_native(obj):
    if isinstance(obj, dict):
        return {k: convert_to_native(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [convert_to_native(i) for i in obj]
    elif isinstance(obj, np.integer):
        return int(obj)
    elif isinstance(obj, np.floating):
        return float(obj)
    elif isinstance(obj, np.ndarray):
        return obj.tolist()
    else:
        return obj

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    print(data)
    texts = data.get('texts', [])
    results = {text: convert_to_native(model.predict(text)) for text in texts}
    return jsonify(results)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
