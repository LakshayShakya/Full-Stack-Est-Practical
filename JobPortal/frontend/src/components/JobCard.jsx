/* eslint-disable react-hooks/purity */
import React from 'react'
import dayjs from 'dayjs'

function JobCard( props) {
    const date1=dayjs(Date.now())
    const diffInDays= date1.diff(props.postedOn,'day')
    return (
    <div className='mx-auto mb-4 max-w-4xl'>
        <div className='flex flex-wrap justify-between items-center px-6 py-4 bg-slate-800 rounded-lg border border-slate-700 shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1'>
            <div className='flex flex-col items-start gap-2'>
                <h1 className='text-xl font-bold text-white'>{props.title} - {props.company}</h1>
                <p className='text-gray-400'>{props.jobType} &bull; {props.location} &bull; {props.expeience}</p>
                <div className='flex flex-wrap items-center gap-2 mt-2'>
                    {props.skill.map((skills)=>(
                        <p key={skills} className='text-blue-400 text-sm py-1 px-3 rounded-full bg-blue-900/30 border border-blue-500/30'>{skills}</p>
                    ))}
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0'>
                <p className='text-gray-500 text-sm'>Posted {diffInDays > 0 ? `${diffInDays} days ago` : 'Today'}</p>
                <a href={props.jobLink} target="_blank" rel="noopener noreferrer">
                    <button className='text-white bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-lg font-semibold transition'>Apply</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default JobCard