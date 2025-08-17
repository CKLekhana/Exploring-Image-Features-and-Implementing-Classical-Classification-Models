import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data for rotation comparison
const LRrotationData = [
  { name: '15°', 'Raw Pixels': 0.79, 'HOG': 0.89, 'SIFT': 0.91 },
  { name: '30°', 'Raw Pixels': 0.73, 'HOG': 0.81, 'SIFT': 0.88 },
  { name: '45°', 'Raw Pixels': 0.67, 'HOG': 0.72, 'SIFT': 0.89 },
  { name: '60°', 'Raw Pixels': 0.65, 'HOG': 0.69, 'SIFT': 0.88 },
];

// Data for scaling comparison
const LRscalingData = [
  { name: '80%', 'Raw Pixels': 0.98, 'HOG': 0.98, 'SIFT': 0.92 },
  { name: '60%', 'Raw Pixels': 0.98, 'HOG': 0.96, 'SIFT': 0.91 },
  { name: '40%', 'Raw Pixels': 0.97, 'HOG': 0.93, 'SIFT': 0.87 },
];

// Data for rotation comparison
const NBrotationData = [
  { name: '15°', 'Raw Pixels': 0.69, 'HOG': 0.72, 'SIFT': 0.81 },
  { name: '30°', 'Raw Pixels': 0.68, 'HOG': 0.71, 'SIFT': 0.82 },
  { name: '45°', 'Raw Pixels': 0.69, 'HOG': 0.70, 'SIFT': 0.81 },
  { name: '60°', 'Raw Pixels': 0.68, 'HOG': 0.71, 'SIFT': 0.79 },
];

// Data for scaling comparison
const NBscalingData = [
  { name: '80%', 'Raw Pixels': 0.69, 'HOG': 0.74, 'SIFT': 0.84 },
  { name: '60%', 'Raw Pixels': 0.68, 'HOG': 0.74, 'SIFT': 0.84 },
  { name: '40%', 'Raw Pixels': 0.67, 'HOG': 0.73, 'SIFT': 0.80 },
];

// Data for rotation comparison
const SVCrotationData = [
  { name: '15°', 'Raw Pixels': 0.78, 'HOG': 0.72, 'SIFT': 0.89 },
  { name: '30°', 'Raw Pixels': 0.71, 'HOG': 0.71, 'SIFT': 0.85 },
  { name: '45°', 'Raw Pixels': 0.64, 'HOG': 0.70, 'SIFT': 0.88 },
  { name: '60°', 'Raw Pixels': 0.63, 'HOG': 0.71, 'SIFT': 0.87 },
];

// Data for scaling comparison
const SVCscalingData = [
  { name: '80%', 'Raw Pixels': 0.98, 'HOG': 0.74, 'SIFT': 0.89 },
  { name: '60%', 'Raw Pixels': 0.98, 'HOG': 0.74, 'SIFT': 0.90 },
  { name: '40%', 'Raw Pixels': 0.97, 'HOG': 0.73, 'SIFT': 0.85 },
];

const Rotation_Scaling_Performance = () => {
    return (
        <div className='mt-3 w-full flex-column items-center justify-center content-center'>
            <p className='text-center italic text-[20px] text-[#A7C7E7]'>Challenging the trained models by introducing varying transformations like rotation and scaling. Flatter line, Better Model.</p>
            <div className="grid md:grid-cols-3 gap-2">
                <div className='h-[400px] p-2 flex-column justify-center content-center'>
                    <div className='text-center font-semibold text-[20px]'>Logistic Regression</div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="">
                          <div className="text-[18px] font-medium mb-4 text-center">Rotation</div>
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={LRrotationData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis domain={[0.6, 1]} />
                              <Tooltip />
                              <Legend />
                              <Line type="monotone" dataKey="Raw Pixels" stroke="#EF4444" />
                              <Line type="monotone" dataKey="HOG" stroke="#F97316" />
                              <Line type="monotone" dataKey="SIFT" stroke="#3B82F6" />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="">
                          <h3 className="text-[20px] font-semibold mb-4 text-center">Scaling</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={LRscalingData}>
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
                <div className='h-[400px] p-2 flex-column justify-center content-center '>
                    <div className='text-center font-bold text-[22px]'>Naive Bayes</div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="">
                          <h3 className="text-[20px] font-semibold mb-4 text-center">Rotation</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={NBrotationData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis domain={[0.6, 1]} />
                              <Tooltip />
                              <Legend />
                              <Line type="monotone" dataKey="Raw Pixels" stroke="#EF4444" />
                              <Line type="monotone" dataKey="HOG" stroke="#F97316" />
                              <Line type="monotone" dataKey="SIFT" stroke="#3B82F6" />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="">
                          <h3 className="text-[20px] font-semibold mb-4 text-center">Scaling</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={NBscalingData}>
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
                <div className='h-[400px] p-2 flex-column justify-center content-center'>
                    <div className='text-center font-bold text-[22px]'>Support Vector Classifier</div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="">
                          <h3 className="text-[20px] font-semibold mb-4 text-center">Rotation</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={SVCrotationData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis domain={[0.6, 1]} />
                              <Tooltip />
                              <Legend />
                              <Line type="monotone" dataKey="Raw Pixels" stroke="#EF4444" />
                              <Line type="monotone" dataKey="HOG" stroke="#F97316" />
                              <Line type="monotone" dataKey="SIFT" stroke="#3B82F6" />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="">
                          <h3 className="text-[20px] font-semibold mb-4 text-center">Scaling</h3>
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={SVCscalingData}>
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
            
        </div>
    )
}

export default Rotation_Scaling_Performance