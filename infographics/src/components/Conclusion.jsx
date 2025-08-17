import React from "react"

const Conclusion = () => {

    return (
        <div id="conclusion" className="p-4 pt-12 min-h-screen">
            <div className="mt-2">

                <div className="underline font-extrabold text-[25px] flex-column justify-center content-center text-center">
                    Conclusion
                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-5 gap-3">
                                <div className="bg-[#3F00FF] p-4 w-[280px] h-[380px] flex-column justify-center content-center rounded-md bg-[#5D3FD3] p-2 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                                    <div className="font-bold font-italic text-center text-[22px]">Baseline Performance & The Trade-off</div>
                                    <div className="flex justify-center items-center"><hr className="w-48 border-t-2 border-gray-300 mx-auto"/></div>
                                    <div className="text-center text-[18px] mt-3">Simple, pixel-based methods excel on clean, pristine data. However, this high performance is fragile, and more complex feature descriptors like SIFT trade a small amount of baseline accuracy for greater resilience.</div>
                                </div>
                                <div className="bg-[#1F51FF] p-4 w-[280px] h-[380px] flex-column justify-center content-center rounded-md bg-[#5D3FD3] p-2 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                                    <div className="font-bold font-italic text-center text-[22px]">Rotation Is the Decisive Challenge</div>
                                    <div className="flex justify-center items-center"><hr className="w-48 border-t-2 border-gray-300 mx-auto"/></div>
                                    <div className="text-center text-[18px] mt-3">Models relying on raw pixel data are highly susceptible to rotation, suffering a drastic drop in performance. The SIFT pipeline's theoretical rotational invariance is proven in practice by its ability to maintain high accuracy under these conditions.</div>
                                </div>
                                <div className="bg-[#0F52BA] p-4 w-[280px] h-[380px] flex-column justify-center content-center rounded-md bg-[#5D3FD3] p-2 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                                    <div className="font-bold font-italic text-center text-[22px]">Surprising Resilience of HOG & Pixels</div>
                                    <div className="flex justify-center items-center"><hr className="w-48 border-t-2 border-gray-300 mx-auto"/></div>
                                    <div className="text-center text-[18px] mt-3">While SIFT handles rotation best, the HOG and raw pixel models show remarkable stability against other transformations, particularly scaling and blurring. This highlights that a model's robustness is highly dependent on the type of degradation.</div>
                                </div>
                                <div className="bg-[#1F51FF] p-4 w-[280px] h-[380px] flex-column justify-center content-center rounded-md bg-[#5D3FD3] p-2 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                                    <div className="font-bold font-italic text-center text-[22px]">The Ultimate Test</div>
                                    <div className="flex justify-center items-center"><hr className="w-48 border-t-2 border-gray-300 mx-auto"/></div>
                                    <div className="text-center text-[18px] mt-3">
                                        When faced with a mix of different transformations, the value of robust feature descriptors becomes most apparent. The HOG and SIFT pipelines retain a significant performance advantage, validating their use in unpredictable, real-world environments.
                                    </div>
                                </div>
                                <div className="bg-[#3F00FF] p-4 w-[280px] h-[380px] flex-column justify-center content-center rounded-md bg-[#5D3FD3] p-2 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                                    <div className="font-bold font-italic text-center text-[22px]">No Single "Best" Tool</div>
                                    <div className="flex justify-center items-center"><hr className="w-48 border-t-2 border-gray-300 mx-auto"/></div>
                                    <div className="text-center text-[18px] mt-3">
                                         The research concludes that there is no universal "best" feature description technique. The most effective classification pipeline is one that aligns the chosen feature descriptor with the specific challenges and conditions of the intended application.
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <div className="mt-3 h-[150px] flex-column justify-center content-start items-center">
                <div className="mb-2 underline font-extrabold text-[25px] flex-column justify-center content-center text-center">
                    Contact
                </div>
                <div className="mt-4 flex justify-center content-center ">
                    <div className="w-[500px] p-3 flex-column justify-center content-center shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                        
                            <div className="font-bold italic text-center mb-2">Designed & Developed @ C K Lekhana</div>

                            <div className="flex justify-content content-center items-center">
                                <div className="flex justify-content content-center items-center mr-5">
                                    <img src="images\mail.jpg" alt="mail" className="rounded-[25px] h-[50px] w-[50px] mr-2 " />
                                    <div className="font-medium text-[15px]">lekhanack@gmail.com</div>
                                </div>
                                <div className="flex justify-content content-center items-center mr-5">
                                    <img src="images\github.png" alt="github" className="rounded-[25px] h-[50px] w-[50px] bg-white mr-2" />
                                    <div className="font-medium text-[15px]"><a href="https://github.com/CKLekhana" target="_blank" rel="noopener noreferrer">Github</a></div>
                                </div>
                                <div className="flex justify-content content-center items-center mr-5">
                                    <img src="images\linkedin.png" alt="linkedin" className="rounded-[25px] h-[50px] w-[50px] mr-2" />
                                    <div className="font-medium text-[15px]"><a href="https://www.linkedin.com/in/cklekhana" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                                </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Conclusion