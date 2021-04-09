from skimage import img_as_float
from skimage import io, color, morphology
from PIL import Image
import numpy as np
import cv2
import PIL.ImageOps
import imagehash
from PIL import ImageFilter


def thinArray(ilocation):
    image = img_as_float(color.rgb2gray(io.imread(ilocation)))

    image_binary = image < 0.5
    # out_skeletonize = morphology.skeletonize(image_binary)
    out_thin = morphology.thin(image_binary)

    im = Image.fromarray(out_thin)
    im.save(ilocation)
    invertImg(ilocation)


def DetectAngle(ilocation):
    image = cv2.imread(ilocation)
    # convert the image to grayscale and flip the foreground
    # and background to ensure foreground is now "white" and
    # the background is "black"
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    gray = cv2.bitwise_not(gray)
    # threshold the image, setting all foreground pixels to
    # 255 and all background pixels to 0
    thresh = cv2.threshold(gray, 0, 255,
                           cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]

    # grab the (x, y) coordinates of all pixel values that
    # are greater than zero, then use these coordinates to
    # compute a rotated bounding box that contains all
    # coordinates
    coords = np.column_stack(np.where(thresh > 0))
    angle = cv2.minAreaRect(coords)[-1]
    # the `cv2.minAreaRect` function returns values in the
    # range [-90, 0); as the rectangle rotates clockwise the
    # returned angle trends to 0 -- in this special case we
    # need to add 90 degrees to the angle
    if angle < -45:
        angle = -(90 + angle)
    # otherwise, just take the inverse of the angle to make
    # it positive
    else:
        angle = -angle

    # rotate the image to deskew it
    (h, w) = image.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    rotated = cv2.warpAffine(image, M, (w, h),
                             flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)

    print("[INFO] angle: {:.3f}".format(angle))
    if 40 > angle > -40:
        cv2.imwrite(ilocation, rotated)


def invertImg(ilocation):
    image = Image.open(ilocation)

    inverted_image = PIL.ImageOps.invert(image)  # PILLOW inverts in one line of code

    inverted_image.save(ilocation)


def removeWhiteSpace(ilocation, slocation):
    img = cv2.imread(ilocation)  # Read in the image and convert to grayscale
    img = img[:-20, :-20]  # Perform pre-cropping
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = 255 * (gray < 128).astype(np.uint8)  # To invert the text to white
    gray = cv2.morphologyEx(gray, cv2.MORPH_OPEN, np.ones((2, 2), dtype=np.uint8))  # Perform noise filtering
    coords = cv2.findNonZero(gray)  # Find all non-zero points (text)
    x, y, w, h = cv2.boundingRect(coords)  # Find minimum spanning bounding box
    rect = img[y:y + h, x:x + w]  # Crop the image - note we do this on the original image
    cv2.imwrite(slocation, rect)  # Save the image

def compare(imgone, imgtwo):
    img1 = Image.open(imgone)  # Enter image one here
    img2 = Image.open(imgtwo)  # Enter image two here
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


if __name__ == '__main__':
    # invertImg("C:\\Users\\pc\\Desktop\\SDGP\\Tests\\y_056.jpeg","C:\\Users\\pc\\Desktop\\SDGP\\Tests\\y_056.jpeg")
    removeWhiteSpace("C:\\Users\\pc\\Desktop\\SDGP\\Tests\\y_056.jpeg","C:\\Users\\pc\\Desktop\\SDGP\\Originals\\y_056.jpeg")
    DetectAngle("C:\\Users\\pc\\Desktop\\SDGP\\Originals\\y_056.jpeg")
    removeWhiteSpace("C:\\Users\\pc\\Desktop\\SDGP\\Originals\\y_056.jpeg","C:\\Users\\pc\\Desktop\\SDGP\\Originals\\y_056.jpeg")
    thinArray("C:\\Users\\pc\\Desktop\\SDGP\\Originals\\y_056.jpeg")
    compare("C:\\Users\\pc\\Desktop\\SDGP\\Originals\\y_054.jpeg","C:\\Users\\pc\\Desktop\\SDGP\\Originals\\y_101.jpeg")
