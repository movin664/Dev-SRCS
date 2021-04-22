# import base64
#
# image = open('C:\\Users\\pc\\Desktop\\image.txt', 'rb')
# image_read = image.read()
# image_64_decode = base64.b64decode(image_read)
# image_result = open('C:\\Users\\pc\\Desktop\\image2.jpeg', 'wb') # create a writable image and write the decoding result
# image_result.write(image_64_decode)

import requests

#the required first parameter of the 'get' method is the 'url':
x = requests(,'https://w3schools.com/python/demopage.htm')

#print the response text (the content of the requested file):
print(x.text)
