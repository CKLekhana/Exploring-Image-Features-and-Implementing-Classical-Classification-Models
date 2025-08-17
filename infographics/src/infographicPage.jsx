import React from "react"
import  {useNavigate} from "react-router-dom"
import Header from "./components/Header.jsx"
import Landing from "./components/Landing.jsx"
import Results from "./components/Results.jsx"
import Conclusion from "./components/Conclusion.jsx"
import ProblemStmt from "./components/ProblemStmt.jsx"
import Methodology from "./components/Methodology.jsx"

const InfographicPage = () => {
    

    return (
        <div className="p-2 bg-[#00001A] text-white font-sans min-h-screen">
            <Header />
            <Landing />
            <ProblemStmt />
            <Methodology/>
            <Results />
            <Conclusion />
        </div>
    )
}

export default InfographicPage