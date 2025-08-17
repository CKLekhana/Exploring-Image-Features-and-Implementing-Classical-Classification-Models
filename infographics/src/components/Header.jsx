import React, { useState } from "react"

const Header = () => {

    return (
        <div className="z-50 fixed w-full top-0 left-0 p-3 flex justify-center content-center">
            <nav className="w-[700px] p-2 pl-5 pr-5 rounded-xl bg-white text-[15px] text-[#00001A] font-medium">
                <ul className="flex justify-between">
                    <li><a href="#main">Main</a></li>
                    <li><a  href="#problemStmt">Problem Statement</a></li>
                    <li><a  href="#methodology">Methodology</a></li>
                    <li><a href="#results">Results</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                    <li><a href="#conclusion">Contact</a></li>
                    <li><a href="https://github.com/CKLekhana/Exploring-Image-Features-and-Implementing-Classical-Classification-Models" 
                    target="_blank" rel="noopener noreferrer"
                    >Code</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header