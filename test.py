from PIL import Image
from PIL import ImageFilter
import imagehash

img1 = Image.open(r"C:\\Users\\pc\\Desktop\\SDGP\\y_026r.jpeg")  # Enter image one here
img2 = Image.open(r"C:\\Users\\pc\\Desktop\\SDGP\\signature-523237_960_720r.jpg")  # Enter image two here
# Resizing the images to be equal to each other in size
if img1.width < img2.width or img1.height < img2.height:
    img2 = img2.resize((img1.width, img1.height))
else:
    img1 = img1.resize((img2.width, img2.height))
# Blurs the image by setting each pixel to the average value of the pixels in a square box
# extending radius pixels in each direction.
img1 = img1.filter(ImageFilter.BoxBlur(radius=3))
img2 = img2.filter(ImageFilter.BoxBlur(radius=3))

# Image hashes tell whether two images look nearly identical. This is different from cryptographic hashing algorithms
# (like MD5, SHA-1) where tiny changes in the image give completely different hashes. In image fingerprinting,
# we actually want our similar inputs to have similar output hashes as well.
# The image hash algorithms (average, perceptual, difference, wavelet) analyse the image structure on luminance (
# without color information). The color hash algorithm analyses the color distribution and black & gray fractions (
# without position information).
phashvalue = imagehash.phash(img1) - imagehash.phash(img2)
ahashvalue = imagehash.average_hash(img1) - imagehash.average_hash(img2)
totalaccuracy = phashvalue + ahashvalue
print(100 - totalaccuracy, "%")
