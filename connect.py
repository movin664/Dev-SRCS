from flask import request, Flask
from flask_cors import CORS
from CoreFunction import *
import base64

app=Flask(__name__)
CORS(app)
@app.route("/test", methods=["POST"])
def getData():
    data=request.get_json()
    print(data)
    print(type(data))
    image_64_decode = base64.b64decode(data["address"])
    image_result = open('D:\\images\\image2.jpeg', 'wb') # create a writable image and write the decoding result
    image_result.write(image_64_decode)
    percentage = compare(readBlobImg(data["custId"]), 'D:\\images\\image2.jpeg')
    return percentage

if __name__ == '__main__':
    app.run()