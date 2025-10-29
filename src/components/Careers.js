import React, { useState, useRef, useEffect } from "react";
import "../Styles/Careers.css";
import emailjs from "@emailjs/browser";

const jobs = [
  {
    title: "Business Development Executive (BDE)",
    category: "Sales / Business Development",
    location: "Nagercoil, TamilNadu",
    datePosted: "23-Oct-2025",
    Qualifications:
      "Bachelor’s degree in Business Administration, Marketing, or a related field.",
    experience:
      "(1–3 years) in sales, business development, or a similar role.",
    skills: "Excellent communication, negotiation, and interpersonal skills."
  },
    {
    title: "Customer Relationship Officer (CRO)",
    category: "Student Services / Customer",
    location: "Nagercoil, TamilNadu",
    datePosted: "23-Oct-2025",
    Qualifications:
      "Bachelor’s degree in Business, Information Technology, Education, or a related field preferred.",
    experience:
      "(1-3 years) in customer service, student relations, or client management, ideally in education or IT training.",
    skills: "Strong communication and interpersonal skills with a friendly and professional demeanor."
  },

      {
    title: "Junior Python Full-Stack Developer",

    category: "Software Development",
    location: "Nagercoil, TamilNadu",
    datePosted: "29-Oct-2025",
    Qualifications:
      "Bachelor’s degree in Computer Science, Information Technology, Software Engineering, or a related field.",
    experience:
      "(1-2 years) ",
    skills: 
"Develop, test, and maintain clean and efficient code using Python  Django, Flask, or FastAPI",

  },
];

const JOBS_PER_PAGE = 3;

const ApplicationForm = ({ job, onBack }) => {
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const formRef = useRef();

  useEffect(() => {
    setTime(new Date().toLocaleString());
  }, [job]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1j2t9l",
        "template_gnvbcs2",
        formRef.current,
        "uxCZ6WGvKJaBi87p0"
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

        <input type="hidden" name="job_title" value={job.title} />
        <input type="hidden" name="time" value={time} />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {status && (
        <p
          className={`status-message ${
            status.includes("successfully") ? "success" : "error"
          }`}
        >
          {status}
        </p>
      )}

      <button onClick={onBack} className="back-btn">
        Back to Job List
      </button>
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
          <button type="submit" className="search-btn">
            Search
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>

      <div className="results-section">
        <div className="results-header">
          <span>
            Showing {filteredJobs.length > 0 ? indexOfFirstJob + 1 : 0}-
            {Math.min(indexOfLastJob, filteredJobs.length)} of{" "}
            {filteredJobs.length} jobs
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

                {job.Qualifications && (
                  <div className="job-Qualifications">
                    <strong>Qualifications:</strong> {job.Qualifications}
                  </div>
                )}

                {job.experience && (
                  <div className="job-experience">
                    <strong>Experience:</strong> {job.experience}
                  </div>
                )}

                {job.skills && (
                  <div className="job-skills">
                    <strong>Skills:</strong> {job.skills}
                  </div>
                )}
              </div>

              <div className="job-actions">
                <button
                  className="apply-btn"
                  onClick={() => setSelectedJob(job)}
                >
                  APPLY
                </button>
              </div>
            </div>
          ))
        ) : (
          <p
            style={{ textAlign: "center", color: "#555", marginTop: "40px" }}
          >
            No jobs found. Try another keyword.
          </p>
        )}

        {filteredJobs.length > 0 && (
          <div className="pagination-container">
            <button
              className="pagination-btn"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              ← Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                className={`page-number ${
                  currentPage === i + 1 ? "active-page" : ""
                }`}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </span>
            ))}
            <button
              className="pagination-btn"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
