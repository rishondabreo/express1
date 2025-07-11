from flask import Flask, request, jsonify

app = Flask(__name__)

# Route for testing in browser
@app.route('/')
def index():
    return "Flask backend is running!"

# Route for handling form submissions (POST)
@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    return jsonify({'status': 'success', 'data': data}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
