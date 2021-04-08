# Python file to invert color of images as some of the images have black as background and white as foreground
from PIL import Image
import PIL.ImageOps

image = Image.open('C:\\Users\\pc\\Desktop\\SDGP\\y_045.jpeg')

inverted_image = PIL.ImageOps.invert(image)  # PILLOW inverts in one line of code

inverted_image.save('C:\\Users\\pc\\Desktop\\SDGP\\y_045.jpeg')
