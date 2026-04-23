import React, { useState } from 'react';

function PostJobModal({ isOpen, onClose, onJobPosted }) {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    jobType: 'Full time',
    expeience: '',
    location: '',
    skills: '',
    jobLink: ''
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedJob = {
      ...jobData,
      postedOn: new Date().toISOString().split('T')[0],
      skill: jobData.skills.split(',').map(s => s.trim())
    };
    delete formattedJob.skills;

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedJob),
      });

      if (response.ok) {
        onJobPosted();
        onClose();
        setJobData({
          title: '',
          company: '',
          jobType: 'Full time',
          expeience: '',
          location: '',
          skills: '',
          jobLink: ''
        });
      }
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-slate-800 p-8 rounded-lg w-full max-w-md border border-slate-700 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Post a New Job</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Job Title</label>
            <input required name="title" value={jobData.title} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="e.g. Frontend Developer" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
            <input required name="company" value={jobData.company} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="e.g. Google" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Job Type</label>
              <select name="jobType" value={jobData.jobType} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500">
                <option>Full time</option>
                <option>Part time</option>
                <option>Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Experience</label>
              <input required name="expeience" value={jobData.expeience} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="e.g. 2 Year" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
            <input required name="location" value={jobData.location} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="e.g. Remote" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Skills (comma separated)</label>
            <input required name="skills" value={jobData.skills} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="e.g. React, Node, Java" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Job Link</label>
            <input required name="jobLink" value={jobData.jobLink} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="https://..." />
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition mt-4">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJobModal;
