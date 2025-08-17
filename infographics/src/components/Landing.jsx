import React from "react"

const Landing = () => {

    return (
        <div id="main" className="p-4 pt-12 min-h-screen flex justify-center content-center">
            <div className="w-full flex justify-center content-center">
                <div className="w-[800px] flex-column items-center content-center justify-center mr-2">
                    <div>
                        <div className="font-extrabold text-[45px] mb-2">Exploring Image Features and Implementing Classical Classification Models using Brain Tumor Classification Data</div>
                        <hr />
                        <div className="italic text-[25px]">Case Study on the effectiveness of SIFT & HOG Feature Descriptors on Logistic Regression, Naive Bayes & Support Vector Classifier Algorithms</div>
                    </div>
                </div>
                <div className="w-[500px]flex items-center content-center justify-center">
                    <div>
                        <img src="images/brain.png"className="border-0  h-[400px] drop-shadow-md"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing