import React from "react";

function Navbar({ onPostJob }) {
    return (
        <div className="h-20 flex items-center justify-between w-full text-white px-10">
            <div className="text-2xl font-bold tracking-wider">
                JOB<span className="text-blue-500">PORTAL</span>
            </div>
            <button 
                onClick={onPostJob}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
                Post a Job
            </button>
        </div>
    );
}

export default Navbar;
