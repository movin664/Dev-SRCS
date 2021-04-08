from skimage import img_as_float
from skimage import io, color, morphology
from PIL import Image

# Insert image location here
image = img_as_float(color.rgb2gray(io.imread("C:\\Users\\pc\\Desktop\\SDGP\\y_045Rotated.jpeg")))

image_binary = image < 0.5
out_skeletonize = morphology.skeletonize(image_binary)
out_thin = morphology.thin(image_binary)

im = Image.fromarray(out_thin)
im.save("C:\\Users\\pc\\Desktop\\SDGP\\binary4.jpeg")

# Remove hashtag to display the difference between normal image, skeleton and thin

# f, (ax0, ax1, ax2) = plt.subplots(1, 3, figsize=(10, 3))
#
# ax0.imshow(image, cmap='gray')
# ax0.set_title('Input')
#
# ax1.imshow(out_skeletonize, cmap='gray')
# ax1.set_title('Skeletonize')
#
# ax2.imshow(out_thin, cmap='gray')
# ax2.set_title('Thin')
#
# plt.savefig("C:\\Users\\pc\\Desktop\\signature-523237_960_7201S.jpg")
# plt.show()