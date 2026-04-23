/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard"
import PostJobModal from "./components/PostJobModal"
import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchJobs = async (filters = {}) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();
      if (filters.role) queryParams.append("role", filters.role);
      if (filters.location) queryParams.append("location", filters.location);
      if (filters.type) queryParams.append("type", filters.type);
      if (filters.experience) queryParams.append("experience", filters.experience);

      const url = `/api/jobs${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      setJobs(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Could not connect to backend. Please make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
      <Navbar onPostJob={() => setIsModalOpen(true)} />
      <Header />
      <SearchBar onSearch={fetchJobs} />
      
      <PostJobModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onJobPosted={fetchJobs} 
      />

      <div className="container mx-auto px-4 pb-12 max-w-5xl">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 text-xl font-medium">{error}</p>
            <button 
              onClick={fetchJobs}
              className="mt-6 px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg font-semibold"
            >
              Retry Connection
            </button>
          </div>
        )}

        {!loading && !error && jobs.length === 0 && (
          <div className="text-center py-20 bg-slate-800 rounded-xl border border-slate-700 mx-4">
            <p className="text-gray-400 text-xl">No jobs found. Be the first to post one!</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-4 text-blue-500 hover:underline"
            >
              Post a Job now
            </button>
          </div>
        )}

        <div className="space-y-4">
          {!loading && !error && jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
