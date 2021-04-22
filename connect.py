from flask import request, Flask
from flask_cors import CORS
from CoreFunction import *
app=Flask(__name__)
CORS(app)
@app.route("/test", methods=["POST"])
def getData():
    data=request.get_json()
    print(data)
    print(type(data))
    
    percentage = compare(readBlobImg(data["custId"]), data["address"])
    return percentage

if __name__ == '__main__':
    app.run()