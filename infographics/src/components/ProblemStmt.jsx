import React from "react"

const ProblemStmt = () => {

    return (
        <div  id="problemStmt" className="p-4 pt-12 min-h-screen ">
            <div className="mt-1 w-full h-full">
                <div className="p-1 flex-column content-center justify-center">
                    <div className="flex content-center mb-2 justify-center underline font-extrabold text-[25px] flex-column justify-center content-center">
                        Problem Statement
                    </div>
                    <div className="flex justify-center items-center p-2 h-[600px] w-full">
                        <div className="p-2 grid grid-cols-3 gap-4 w-[1000px]">
                        <div className="rounded-md bg-[#5D3FD3] p-2 pt-1 sm:h-[500px] h-[400px] shadow-[0_0_15px_2px_rgba(20,52,164,0.5)] flex-column justify-center content-center">
                            <div className="italic font-bold text-center sm:text-[22px] text-[14px] mb-2">Objective</div>
                            <div className="flex content-center justify-center"><hr className="border-t-2 w-[70px] "/></div>
                            <div className="mt-2 text-[12px] sm:text-[18px] text-center">
                                    <p>
                                    To evaluate the effectiveness of Raw Pixels, HOG, and SIFT features when used with a traditional classifier. We aim to understand their core strengths beyond simple accuracy on pristine data.
                                    </p>
                                
                            </div>
                        </div>
                        <div className="rounded-md bg-[#5D3FD3] p-2 pt-1 sm:h-[500px] h-[400px] sm:h-[500px] shadow-[0_0_15px_2px_rgba(20,52,164,0.5)] flex-column justify-center content-center">
                            <div className="italic font-bold text-center sm:text-[22px] text-[14px] mb-2">The Challenge</div>
                            <div className="flex content-center justify-center"><hr className="border-t-2 w-[70px] "/></div>
                            <div className="mt-2  text-[12px] sm:text-[18px] text-center">
                                <p>
                                    Real-world image data is often degraded by transformations. This project tests each technique's robustness by measuring performance on images subjected to four common degradations: scaling, rotation, Gaussian blur, and Gaussian noise.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md bg-[#5D3FD3] p-2 pt-1 sm:h-[500px] h-[400px] shadow-[0_0_15px_2px_rgba(20,52,164,0.5)] flex-column justify-center content-center">
                            <div className="italic font-bold text-center sm:text-[22px] text-[14px] mb-2">Comparative Analysis</div>
                            <div className="flex content-center justify-center"><hr className="border-t-2 w-[70px] "/></div>
                            <div className="mt-2 text-[12px] sm:text-[18px] text-center">
                                <p>
                                    We conduct a direct comparison of three complete classification pipelines to reveal the trade-offs between simplicity and resilience. The findings provide a practical guide for choosing the right feature extraction method based on expected image conditions.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProblemStmt 
