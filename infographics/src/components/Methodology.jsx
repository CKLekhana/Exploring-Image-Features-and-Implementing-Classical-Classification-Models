import React from "react"

const Methodology = () => {

    return (
        <div  id="methodology" className="p-4 pt-12 min-h-screen ">
            <div className="mt-1 w-full h-full">
                <div className="p-1 flex-column content-center justify-center">
                    <div className="flex content-center mb-2 justify-center underline font-extrabold text-[25px] flex-column justify-center content-center">
                        Methodology
                    </div>
                    <div className="flex-column justify-center content-center p-2 mt-2 h-[550px]">
                        <div className="p-2 h-[420px] mb-2 flex justify-center content-center">
                            <div className="shadow-[0_0_15px_1px_rgba(20,52,164,0.1)]">
                                <img className="h-[400px]" src="images\methodology_gif.gif" alt="method_gif"/>
                            </div>
                        </div>
                        <div className="p-2 h-[100px] flex justify-center content-center">
                            <div className="p-1 rounded-md flex items-center justify-center content-center shadow-[0_0_15px_4px_rgba(20,52,164,0.4)]">
                                <img src="images/numpy.png" alt="Numpy" className="rounded-2xl w-[60px] h-[60px] mr-2 ml-2" />
                                <img src="images/pandas.png" alt="Pandas" className="p-2 bg-white rounded-2xl w-[60px] h-[60px] mr-2"/>
                                <img src="images/matplotlib.png" alt="Matplotlib" className="p-2 bg-white rounded-2xl w-[60px] h-[60px] mr-2" />
                                <img src="images/opencv.jpg" alt="OpenCV" className="rounded-2xl w-[60px] h-[60px] mr-2"/>
                                <img src="images/sklearn.png" alt="Scikit-Learn" className="rounded-2xl w-[60px] h-[60px] mr-2"/>
                                <img src="images/pytorch.png" alt="PyTorch" className="rounded-2xl w-[60px] h-[60px] mr-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Methodology