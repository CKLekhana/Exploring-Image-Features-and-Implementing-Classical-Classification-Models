// src/App.jsx
import React from 'react';
// Only import RouterProvider. The other imports (BrowserRouter, Routes, Route, Outlet) are no longer needed here.
import { RouterProvider } from "react-router-dom"; 
import router from './Router'; // Import your configured router

function App() {
  return (
    // Simply render the RouterProvider with your router configuration
    <RouterProvider router={router} />
  );
}

export default App;