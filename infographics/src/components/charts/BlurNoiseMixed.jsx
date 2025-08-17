import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data for blurring comparison
const LRblurringData = [
    { name: 'Blur 3', 'Raw Pixels': 0.98, 'HOG': 0.97, 'SIFT': 0.93 },
    { name: 'Blur 5', 'Raw Pixels': 0.98, 'HOG': 0.96, 'SIFT': 0.89 },
];

// Data for blurring comparison
const NBblurringData = [
    { name: 'Blur 3', 'Raw Pixels': 0.69, 'HOG': 0.75, 'SIFT': 0.86 },
    { name: 'Blur 5', 'Raw Pixels': 0.68, 'HOG': 0.74, 'SIFT': 0.83 },
];

// Data for blurring comparison
const SVCblurringData = [
    { name: 'Blur 3', 'Raw Pixels': 0.98, 'HOG': 0.75, 'SIFT': 0.89 },
    { name: 'Blur 5', 'Raw Pixels': 0.98, 'HOG': 0.74, 'SIFT': 0.88 },
];

const NoiseData = [
    { name: 'Raw Pixels (LR)', Accuracy: 0.98, Precision: 0.98, Recall: 0.98 },
    { name: 'HOG (LR)', Accuracy: 0.87, Precision: 0.81, Recall: 0.96 },
    { name: 'SIFT (LR)', Accuracy: 0.87, Precision: 0.84, Recall: 0.92 },
    { name: 'Raw Pixels (NB)', Accuracy: 0.68, Precision: 0.71, Recall: 0.62 },
    { name: 'HOG (NB)', Accuracy: 0.72, Precision: 0.72, Recall: 0.74 },
    { name: 'SIFT (NB)', Accuracy: 0.82, Precision: 0.76, Recall: 0.93 },
    { name: 'Raw Pixels (SVC)', Accuracy: 0.98, Precision: 0.98, Recall: 0.98 },
    { name: 'HOG (SVC)', Accuracy: 0.72, Precision: 0.72, Recall: 0.74 },
    { name: 'SIFT (SVC)', Accuracy: 0.86, Precision: 0.84, Recall: 0.90 },
];

const CombinedData = [
    { name: 'Raw Pixels (LR)', Accuracy: 0.66, Precision: 0.63, Recall: 0.79 },
    { name: 'HOG (LR)', Accuracy: 0.63, Precision: 0.81, Recall: 0.96 },
    { name: 'SIFT (LR)', Accuracy: 0.81, Precision: 0.77, Recall: 0.89 },
    { name: 'Raw Pixels (NB)', Accuracy: 0.68, Precision: 0.71, Recall: 0.62 },
    { name: 'HOG (NB)', Accuracy: 0.71, Precision: 0.72, Recall: 0.71 },
    { name: 'SIFT (NB)', Accuracy: 0.79, Precision: 0.74, Recall: 0.88 },
    { name: 'Raw Pixels (SVC)', Accuracy: 0.62, Precision: 0.60, Recall: 0.78 },
    { name: 'HOG (SVC)', Accuracy: 0.71, Precision: 0.72, Recall: 0.71 },
    { name: 'SIFT (SVC)', Accuracy: 0.81, Precision: 0.77, Recall: 0.88 },
];


const BlurNoiseCombined = () => {
    return (
        <div className='w-full flex-column items-center justify-center content-center'>
            <div className='p-3 flex-column justify-center content-center'>
                <div className='p-3 flex justify-center content-center items-center'>
                    <div className='flex-column justify-center content-center'>
                        <p className='mb-2 text-center italic text-[20px] text-[#A7C7E7]'>Evaluating performance of SIFT & HOG on Gaussian Blur with 3x3 & 5x5 kernels. </p>
                        <div className="grid md:grid-cols-3 gap-2">
                            <div className='h-[300px] p-2 flex-column justify-center content-center '>
                                <div className='text-center font-bold text-[22px] mb-1'>Logistic Regression</div>
                                <div className="">

                                    <ResponsiveContainer width="100%" height={250}>
                                        <LineChart data={LRblurringData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis domain={[0.8, 1]} />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="Raw Pixels" stroke="#EF4444" />
                                            <Line type="monotone" dataKey="HOG" stroke="#F97316" />
                                            <Line type="monotone" dataKey="SIFT" stroke="#3B82F6" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                            <div className='h-[300px] p-2 flex-column justify-center content-center '>
                                <div className='text-center font-bold text-[22px] mb-1'>Naive Bayes</div>
                                <div className="">

                                    <ResponsiveContainer width="100%" height={250}>
                                        <LineChart data={NBblurringData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis domain={[0.8, 1]} />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="Raw Pixels" stroke="#EF4444" />
                                            <Line type="monotone" dataKey="HOG" stroke="#F97316" />
                                            <Line type="monotone" dataKey="SIFT" stroke="#3B82F6" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                            <div className='h-[300px] p-2 flex-column justify-center content-center'>
                                <div className='text-center font-bold text-[22px] mb-1'>Support Vector Classifier</div>
                                <div className="">
                                    <ResponsiveContainer width="100%" height={250}>
                                        <LineChart data={SVCblurringData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis domain={[0.8, 1]} />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="Raw Pixels" stroke="#EF4444" />
                                            <Line type="monotone" dataKey="HOG" stroke="#F97316" />
                                            <Line type="monotone" dataKey="SIFT" stroke="#3B82F6" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ml-5 h-[150px] w-[450px] flex-column justify-center content-center rounded-md bg-[#5D3FD3] p-3 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                        <p className="text-center underline italic">Gaussian Blur Outcomes</p>
                        <li>SIFT features performed only in the NB algorithm with respect to gaussian blurring</li>
                        <li>Raw Features was observed to perform the best with LR & SVC</li>
                    </div>
                </div>
                <div className='mt-2 w-full p-3 flex justify-center content-center'>
                    <div className="flex-column justify-center content-center  ">
                        <div className='h-[170px] w-[450px] bg-[#5D3FD3] rounded-md p-3 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]'>
                        <p className="text-center underline italic">Gaussian Noise Outcomes</p>
                        <p className='text-center'>Similar to gaussian blurring</p>
                        <li>SIFT features performed only in the NB algorithm with respect to gaussian noise</li>
                        <li>Raw Features was observed to perform the best with LR & SVC</li>
                        </div>

                    </div>
                    <div className='w-[1000px] flex-column justify-center content-center'>
                        <p className='text-center italic text-[20px] text-[#A7C7E7]'>Evaluating performance of SIFT & HOG on Gaussian Noise.</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={NoiseData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis domain={[0.8, 1]} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Accuracy" fill="#4F46E5" />
                                <Bar dataKey="Precision" fill="#8B5CF6" />
                                <Bar dataKey="Recall" fill="#A855F7" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>


                </div>
                <div className='mt-2 w-full flex items-center justify-center content-center'>
                    <div className='w-[1000px] flex-column justify-center content-center mr-4'>
                        <p className='text-center italic text-[20px] text-[#A7C7E7]'>Transformations in real world are random in nature. Hence, a combined transformation set evaluates the descriptors on real-world like data.</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={CombinedData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis domain={[0.8, 1]} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Accuracy" fill="#4F46E5" />
                                <Bar dataKey="Precision" fill="#8B5CF6" />
                                <Bar dataKey="Recall" fill="#A855F7" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="h-[260px] w-[350px] rounded-md bg-[#5D3FD3] p-2 shadow-[0_0_15px_2px_rgba(20,52,164,0.5)]">
                        <p className="text-center underline italic">Combined Transformation Outcomes</p>
                        <li>SIFT features perform the best with 81% accuracy on LR & SVC algorithms</li>
                        <li>96% recall was recorded with HOG features with LR</li>
                        <li>SIFT features hence is most useful when the image has range of transformations in it</li>
                        <li>SIFT with LR therefore can the best model to consider when working with images with high transformation rate.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlurNoiseCombined