# Robustness Analysis of Computer Vision Pipelines 
This repository contains the code and findings from a research project that investigates the resilience of traditional image feature descriptors and classifiers when confronted with common real-world image transformations. By evaluating three distinct pipelines—Raw Pixels, HOG, and SIFT—on a series of transformed datasets, this project analyzes the critical trade-offs between a model's baseline performance and its robustness.

# Problem Statement
The core of this project is to explore how different image feature description techniques hold up under stress. Our key questions and findings include:

# Baseline Performance vs. Resilience
Simple, pixel-based methods are fast and effective on clean images, but this performance is fragile. More complex descriptors like SIFT trade a small amount of baseline accuracy for much greater resilience to real-world conditions.

# Rotation is the Decisive Challenge
Models using raw pixel data are highly susceptible to rotation. Our experiments show that SIFT's theoretical rotational invariance is proven in practice, as it maintains high accuracy while other models fail.

# Surprising Resilience of HOG & Pixels
While SIFT handles rotation best, the HOG and raw pixel models show remarkable stability against other transformations, particularly scaling and blurring. This shows that a model's robustness is highly dependent on the type of degradation it faces.

# The Ultimate Test
When faced with a mix of different transformations (blur, noise, rotation, and scaling), the value of robust feature descriptors becomes most apparent. Both the HOG and SIFT pipelines retain a significant performance advantage over a simple pixel-based approach. \ 

No Universal "Best" Tool: This research concludes that there is no single "best" feature description technique. The most effective pipeline is the one that aligns its chosen feature descriptor with the specific challenges and conditions of the intended application.

# Experimental Setup \
This project uses three different machine learning pipelines, each with a distinct feature descriptor.

# Feature Descriptors:

Raw Pixels (Image Vectors): A baseline approach using raw image data.

HOG (Histogram of Oriented Gradients): Captures local object appearance and shape.

SIFT (Scale-Invariant Feature Transform): Designed to be robust to image scale and rotation.

# Classifiers:

Logistic Regression (LR)

Support Vector Machine (SVC)

Naive Bayes (nb)

# Transformations
We systematically tested the pipelines against images subjected to rotation, scaling, Gaussian blurring, and Gaussian noise.

# Key Findings
The experimental results highlight the following key insights:
### The Achilles' Heel of Simple Models: Raw pixel-based models perform well on clean images but are highly sensitive to rotation.
### SIFT's Proven Robustness: The SIFT pipeline, especially with an LR classifier, shows remarkable resilience to rotation, outperforming the other methods.
### HOG's Practicality: HOG is a well-balanced choice, proving highly stable against scaling and blurring, even while it struggles with rotation.

# Getting Started
To run this project, you will need to install the required dependencies.

## Clone the repository:

git clone https://github.com/CKLekhana/Exploring-Image-Features-and-Implementing-Classical-Classification-Models.git \
cd Exploring-Image-Features-and-Implementing-Classical-Classification-Models

# Install dependencies:
This project was built with Python. You will need libraries such as scikit-learn, OpenCV (cv2), NumPy, and Matplotlib.

pip install -r requirements.txt

(Note: If a requirements.txt file is not included, please create one based on the dependencies used in your code.)

Conclusion
This research demonstrates that choosing the right feature descriptor is a critical trade-off between simplicity and resilience. The most effective computer vision pipeline is one that aligns the chosen feature descriptor with the specific challenges and conditions of the intended application.
