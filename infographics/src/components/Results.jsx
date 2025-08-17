import React from "react"
import Baseline_Performance from "./charts/Baseline_Performance"
import Rotation_Scaling_Performance from "./charts/Rotation_Scaling"
import BlurNoiseCombined from "./charts/BlurNoiseMixed"

const Results = () => {

    return (
        <div  id="results" className="p-4 pt-12 h-[2060px]">
            <div className="mt-1 w-full h-full">
                <div className="flex-column content-center justify-center">
                    <div className="underline font-extrabold text-[25px] flex-column justify-center content-center text-center">
                        Results
                    </div>
                    <div className="flex justify-center content-center p-3">
                        
                            <Baseline_Performance/>
                        <div className="ml-4 w-[430px] rounded-md bg-[#5D3FD3] p-2 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                            <p className="text-center underline italic">Baseline Outcomes</p>
                            <li>HOG features perform best with LR & SVC with 98% accuracy.</li>
                            <li>Highest Precision is seen in the SVC model trained with HOG features.</li>
                            <li>Raw pixel & HOG features show 97% recall of tumor images in LR & SVC models.</li>
                            <li>SIFT features seem to perform poorly compared to other features on the basline dataset.</li>
                            <li>NB model performs poorly out of the other two classification models.</li>
                        </div>
                    </div>
                    <div className="p-3 flex justify-center content-center">
                        <div className="mt-5 h-[400px] w-[350px] rounded-md bg-[#5D3FD3] p-2 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                            <p className="text-center underline italic">Rotation & Scaling Outcomes</p>
                            <li>SIFT features perform the best with Rotation Transformations with highest accuracy observed at 91% with LR model.</li>
                            <li>SIFT performed the best with both rotation and scaling with Naive Bayes model. But Naive Bayes was seen performing the worst among all with the transformations.</li>
                            <li>SIFT does not have perform well with scaling which is contradictory to its purpose. On deeper analysis, this behaviour could be due to the use of BoVW that could eliminate essential features during its process.</li>
                        </div>
                        <Rotation_Scaling_Performance/>
                    </div>
                    <div className="p-3 flex justify-center content-center">
                        <BlurNoiseCombined/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results