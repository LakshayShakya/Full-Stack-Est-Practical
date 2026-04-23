import React, { useState } from 'react'

function SearchBar({ onSearch }) {
    const [jobCriteria, setJobCriteria] = useState({
        role: "",
        location: "",
        type: "",
        experience: ""
    });

    const handleChange = (e) => {
        setJobCriteria({ ...jobCriteria, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        onSearch(jobCriteria);
    };

    return (
        <div className='flex flex-wrap gap-4 justify-center items-center py-10 px-4'>
            <select 
                name="role" 
                value={jobCriteria.role} 
                onChange={handleChange} 
                className='bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg w-full md:w-64 py-3 px-4 focus:outline-none focus:border-blue-500 transition'
            >
                <option value="" disabled hidden>Job Role</option>
                <option value="">All Roles</option>
                <option value="ios dev">iOS Developer</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Ui/Ux">UI/UX</option>
            </select>

            <select 
                name="location" 
                value={jobCriteria.location} 
                onChange={handleChange} 
                className='bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg w-full md:w-64 py-3 px-4 focus:outline-none focus:border-blue-500 transition'
            >
                <option value="" disabled hidden>Location</option>
                <option value="">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Online">Online</option>
                <option value="Office">Office</option>
            </select>

            <select 
                name="type" 
                value={jobCriteria.type} 
                onChange={handleChange} 
                className='bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg w-full md:w-64 py-3 px-4 focus:outline-none focus:border-blue-500 transition'
            >
                <option value="" disabled hidden>Job Type</option>
                <option value="">All Types</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>

            <select 
                name="experience" 
                value={jobCriteria.experience} 
                onChange={handleChange} 
                className='bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg w-full md:w-64 py-3 px-4 focus:outline-none focus:border-blue-500 transition'
            >
                <option value="" disabled hidden>Experience</option>
                <option value="">Any Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
            </select>

            <button 
                onClick={handleSearch}
                className='w-full md:w-64 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg py-3 px-8 transition shadow-lg transform hover:scale-105 active:scale-95'
            >
                Search Jobs
            </button>
        </div>
    )
}

export default SearchBar