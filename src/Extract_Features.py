"""
This python file defines the functions used for extracting 
feature descriptors from images. 

The three functions defined include:
1. extract_flattened_image_vectors
2. extract_
"""

# importing libraries required
import cv2
import numpy as np
from skimage.feature import hog
from sklearn.cluster import KMeans

def extract_flattened_image_vectors(X, size = (128, 128)):
    
    """
    Extracts Flattened, Normalised Image Vectors from raw Image Pixels
    
    Args:
        X : pd.Series consisting of image paths
        size : defines the dimensions of resized image
        [if size is None, then the image vectors will be variable length if the image dimensions is variable]
        
    Returns:
        img_vectors: list of flattened, normalised image vectors
    """
    img_vectors = []
    
    for img_path in X:
    
        img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE).astype(np.float32)
        
        if size is None:
            normalized_image_cv2_func = np.zeros_like(img)
            cv2.normalize(img, normalized_image_cv2_func, 0, 1, cv2.NORM_MINMAX)
        else: 
            resized_img = cv2.resize(img, size)
            normalized_image_cv2_func = np.zeros_like(resized_img)
            cv2.normalize(resized_img, normalized_image_cv2_func, 0, 1, cv2.NORM_MINMAX)
        
        nimg_flatten = normalized_image_cv2_func.flatten()
        img_vectors.append(nimg_flatten)

    return img_vectors

def extract_sift_features_from_images(paths, size = (128, 128)):
    """
    This function extracts sift features from images using cv2.SIFT_create()

    Args:
        paths (pd.Series): paths to images [The path of images should be absolute and not relative.]
        size (tuple): defines the dimensions of the resized images

    Returns:
        list: extracted sift descriptors 
        [The number of keypoints in the images vary from image to image, therefore the number of descriptor vectors for each image is variable.
        Use the BoVW function to obtain k-bins histogram for the image, for tasks like image classification]
    """
    sift = cv2.SIFT_create()
    image_descriptors_list = []
    
    for path in paths:

        img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
        
        if size is None:
            _, descriptors = sift.detectAndCompute(img, None)
        else:
            resized_img = cv2.resize(img, size)
            _, descriptors = sift.detectAndCompute(resized_img, None)

        image_descriptors_list.append(list(descriptors))

    return image_descriptors_list

def kmeans_clustering_sift_descriptors(sift_descriptors_list, k = 500):
    
    """
    This functions fits KMeans Clustering Algorithm for pool of sift descriptors

    Args:
        sift_descriptors_list (list) : list of sift descriptors for each image
        k (int) : Number of clusters for KMeans
         
    Returns:
        kmeans_estimator (Object): kmeans estimator fitted for pool of sift descriptors
    """
    
    if k is None:
        print("Number of clusters for KMeans cannot be None.")
        return None
    
    # pooling all the image descriptors
    sift_descriptors_pool = []

    for image in sift_descriptors_list:
        sift_descriptors_pool.extend(image)

    print("Pooling sift descriptors successful.")
    print("Total number of sift descriptors in the pool: ", len(sift_descriptors_pool)) 

    sift_descriptors_pool = np.array(sift_descriptors_pool)
    
    # defining estimator with k
    kmeans_estimator = KMeans(k)
    # fiiting the estimators with pool of sift descriptors
    kmeans_estimator = kmeans_estimator.fit(sift_descriptors_pool)
    
    return kmeans_estimator
    


def BoVW(kmeans, k, image_descriptors):

    """
    This function generates the k bin histogram, by mapping each descriptor to one of the k clusters obtained using K-Means Clustering Algorithm
    
    Args:
        kmeans : Kmeans estimator fitted to the pool of sift descriptors extracted from training set
        k : Number of clusters/bins defined in the kmeans
        image_descriptors : list of exctracted sift descriptors vectors for each image

    Returns:
        image_histogram_of_visual_words : k bins histogram vector for each image
    """
    
    image_histogram_of_visual_words = []

    for image in image_descriptors:

        # empty histogram of k clusters -> counts the number of descriptors in the image belonging to a cluster
        histogram_of_visual_words = [0] * k
        
        # histogram population by predicting the descriptors' clusters
        for descriptor in image:
            label = kmeans.predict(descriptor.reshape((1, 128)))
            histogram_of_visual_words[label[0]] += 1

        # appending the k-element histogram to the collection of histograms of all images
        image_histogram_of_visual_words.append(histogram_of_visual_words)

    return np.array(image_histogram_of_visual_words)


# function to extract hog features
def extract_hog_features_from_images(paths, size = (128, 128)):

    """
    This function extracts Histogram of Gradients for each image

    Args:
        paths (pd.Series): paths to images [The path of images should be absolute and not relative.]
        size (tuple): defines the dimensions of the resized images
        [Ensure that all the images are of same dimensions to obtain hog vectors of same dimensions, if using for tasks like image classification]

    Returns:
        list: extracted hog descriptors 
    """
    image_descriptors_list = []
    
    for path in paths:

        img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
        
        if size is not None:
            try:
                resized_img = cv2.resize(img, size)
                descriptor = hog(resized_img, orientations=9, pixels_per_cell=(8, 8), cells_per_block=(2, 2))
            except Exception as e:
                print("Error : ", e)
        else:
            descriptor = hog(img, orientations=9, pixels_per_cell=(8, 8), cells_per_block=(2, 2))
            
        image_descriptors_list.append(descriptor)

    return image_descriptors_list