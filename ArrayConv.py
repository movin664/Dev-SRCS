# PILLOW is a python library which adds image processing abilities to the interpreter. Its an extension of the,
# now dead, PIL library. This library provides extensive file format support, an efficient internal representation,
# and fairly powerful image processing capabilities. The core image library is designed for fast access to data
# stored in a few basic pixel formats. It should provide a solid foundation for a general image processing tool. To
# convert an image into an array we are gonna use the Image module of the Pillow library to

from PIL import Image

# SciPy (pronounced “Sigh Pie”) is open-source software for mathematics, science, and engineering.
# The SciPy library depends on NumPy, which provides convenient and fast N-dimensional array manipulation.
# The SciPy library is built to work with NumPy arrays, and provides many user-friendly and
# efficient numerical routines such as routines for numerical integration and optimization. Together,
# they run on all popular operating systems, are quick to install, and are free of charge.
# NumPy and SciPy are easy to use, but powerful enough to be depended upon


from scipy.ndimage import zoom

# It provides:
# a powerful N-dimensional array object
# sophisticated (broadcasting) functions
# tools for integrating C/C++ and Fortran code
# useful linear algebra, Fourier transform, and random number capabilities
# and much more. Besides its obvious scientific uses, NumPy can also be used as an efficient
# multi-dimensional container of generic data. Arbitrary data-types can be defined.
# This allows NumPy to seamlessly and speedily integrate with a wide variety of databases.


import numpy as np


def convertToGrayscale(image):
    grayImage = image.convert('L')
    return grayImage


def getImgHeight(image):
    width, height = image.size
    return height


def getImgWidth(image):
    width, height = image.size
    return width


srcImage = Image.open("C:\\Users\\pc\\Desktop\\signature-523237_960_720S.jpg")  # enter the image filename here
size = 512, 512
resizedImg = srcImage.resize(size)
array = np.array(convertToGrayscale(resizedImg))
array = zoom(array, 100 / 174)
np.savetxt("C:\\Users\\pc\\Desktop\\binary1.txt", array < 128, fmt="%d")  # enter output filename here
