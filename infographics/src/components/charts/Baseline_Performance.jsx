import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const baselineData = [
  { name: 'Raw Pixels (LR)', Accuracy: 0.97, Precision: 0.97, Recall: 0.97 },
  { name: 'HOG (LR)', Accuracy: 0.98, Precision: 0.98, Recall: 0.97 },
  { name: 'SIFT (LR)', Accuracy: 0.92, Precision: 0.93, Recall: 0.92 },
  { name: 'Raw Pixels (NB)', Accuracy: 0.68, Precision: 0.73, Recall: 0.56 },
  { name: 'HOG (NB)', Accuracy: 0.74, Precision: 0.70, Recall: 0.85 },
  { name: 'SIFT (NB)', Accuracy: 0.83, Precision: 0.79, Recall: 0.91 },
  { name: 'Raw Pixels (SVC)', Accuracy: 0.97, Precision: 0.97, Recall: 0.97 },
  { name: 'HOG (SVC)', Accuracy: 0.98, Precision: 0.99, Recall: 0.97 },
  { name: 'SIFT (SVC)', Accuracy: 0.90, Precision: 0.90, Recall: 0.90 },
];

const Baseline_Performance = () => {
    return (
        <div className='w-[1000px] flex-column items-center justify-center content-center'>
            <p className='text-center italic text-[20px] text-[#A7C7E7]'>Initial Tests on the Clean Dataset to show performance[Accuracy] with untransformed image data.</p>
            <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={baselineData}>
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
    )
}

export default Baseline_Performance