import React from "react"
import  {useNavigate} from "react-router-dom"
import Header from "./components/Header"
import Landing from "./components/Landing"
import Results from "./components/Results"
import Conclusion from "./components/Conclusion"
import ProblemStmt from "./components/ProblemStmt"
import Methodology from "./components/Methodology"

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
