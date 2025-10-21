import React, { useState, useRef, useEffect } from "react";
import "../Styles/Careers.css";
import emailjs from "@emailjs/browser";

const jobs = [
  { title: "Full Stack Developer", category: "Development", location: "Nagercoil, TamilNadu", datePosted: "03-Oct-2025" },
//   { title: "Backend Developer", category: "Development", location: "Nagercoil, TamilNadu", datePosted: "30-Sep-2025" },
//   { title: "Frontend Developer", category: "Development", location: "Nagercoil, TamilNadu", datePosted: "20-Sep-2025" },
//   { title: "UI/UX Designer", category: "Design", location: "Nagercoil, TamilNadu", datePosted: "15-Sep-2025" },
//   { title: "Django Developer", category: "Development", location: "Nagercoil, TamilNadu", datePosted: "10-Sep-2025" },
//   { title: "React Developer", category: "Development", location: "Nagercoil, TamilNadu", datePosted: "05-Sep-2025" },
//   { title: "Flutter App Developer", category: "Mobile", location: "Nagercoil, TamilNadu", datePosted: "01-Sep-2025" },
//   { title: "Project Coordinator", category: "Management", location: "Nagercoil, TamilNadu", datePosted: "25-Aug-2025" },
//   { title: "HR Executive", category: "Human Resource", location: "Nagercoil, TamilNadu", datePosted: "20-Aug-2025" },
//   { title: "Business Analyst", category: "Business", location: "Nagercoil, TamilNadu", datePosted: "15-Aug-2025" },
];

const JOBS_PER_PAGE = 3;

const ApplicationForm = ({ job, onBack }) => {
  const [status, setStatus] = useState("");
  const [time, setTime] = useState(""); // Store apply click time
  const formRef = useRef();

  useEffect(() => {
    // Set current time when form loads
    setTime(new Date().toLocaleString());
  }, [job]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1j2t9l",   // EmailJS service ID
        "template_gnvbcs2",  // EmailJS template ID
        formRef.current,
        "uxCZ6WGvKJaBi87p0"  // Public key
      )
      .then(
        () => {
          setStatus("Application submitted successfully!");
          formRef.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          setStatus("Failed to submit. Please try again.");
          console.error("EmailJS Error:", error.text);
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <div className="application-form">
      <h2>Apply for {job.title}</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="applicant_name" required />
        </label>

        <label>
          Email:
          <input type="email" name="applicant_email" required />
        </label>

        <label>
          Cover Letter:
          <textarea name="cover_letter" required />
        </label>

        {/* Hidden inputs for job title and apply time */}
        <input type="hidden" name="job_title" value={job.title} />
        <input type="hidden" name="time" value={time} />

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {status && (
        <p className={`status-message ${status.includes("successfully") ? "success" : "error"}`}>
          {status}
        </p>
      )}

      <button onClick={onBack} className="back-btn">Back to Job List</button>
    </div>
  );
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.category.toLowerCase().includes(keyword.toLowerCase()) ||
      job.location.toLowerCase().includes(keyword.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleReset = () => {
    setKeyword("");
    setCurrentPage(1);
  };

  if (selectedJob) {
    return (
      <div className="careers-root">
        <div className="header-bg">
          <h1 className="header-title">Smarter Takes You</h1>
        </div>
        <ApplicationForm job={selectedJob} onBack={() => setSelectedJob(null)} />
      </div>
    );
  }

  return (
    <div className="careers-root">
      <div className="header-bg">
        <h1 className="header-title">Smarter Takes You</h1>
      </div>

      <div className="filters-section">
        <form className="filters-row" onSubmit={handleSearch}>
          <input
            className="keyword-input"
            placeholder="Search by keyword, title, or location..."
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit" className="search-btn">Search</button>
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </form>
      </div>

      <div className="results-section">
        <div className="results-header">
          <span>
            Showing {filteredJobs.length > 0 ? indexOfFirstJob + 1 : 0}-
            {Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} jobs
          </span>
        </div>

        {currentJobs.length > 0 ? (
          currentJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-info">
                <div className="job-title">{job.title}</div>
                <div className="job-category">{job.category}</div>
                <div className="job-location">{job.location}</div>
                <div className="job-date">Posted {job.datePosted}</div>
              </div>
              <div className="job-actions">
                <button className="apply-btn" onClick={() => setSelectedJob(job)}>APPLY</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#555", marginTop: "40px" }}>
            No jobs found. Try another keyword.
          </p>
        )}

        {filteredJobs.length > 0 && (
          <div className="pagination-container">
            <button className="pagination-btn" disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>← Prev</button>
            {[...Array(totalPages)].map((_, i) => (
              <span key={i} className={`page-number ${currentPage === i + 1 ? "active-page" : ""}`} onClick={() => goToPage(i + 1)}>{i + 1}</span>
            ))}
            <button className="pagination-btn" disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
