import React from "react";
import { FaClock, FaCalendarAlt, FaVideo, FaGlobe } from "react-icons/fa";
import eventImg from "../assets/EventO.png"; 
import "../App.css";
import { useNavigate } from "react-router-dom";

const Event2 = () => {

  const navigate = useNavigate();

  return (
    <div className="container my-4">
      <div className="row g-4">
        {/* Event Details */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <div className="d-flex align-items-center gap-3 mb-4">
              <img
                src={eventImg}
                alt="Organizer"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #6A7ADA",
                }}
              />
              <div>
                <div className="fw-medium text-dark">Maria</div>
                <h2 className="fw-bold fs-5 mb-0 text-primary">Event title</h2>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2 mb-2">
              <FaClock />
              <span className="text-muted fst-italic small">
                19:00 - 19:45, Monday, August 19, 2024
              </span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-2">
              <FaCalendarAlt />
              <span className="text-muted fst-italic small">30 min</span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-2">
              <FaVideo />
              <span className="text-muted fst-italic small">
                Web conferencing details provided upon confirmation.
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaGlobe />
              <span className="text-muted fst-italic small">Asia/Yerevan</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="fw-bold fs-5 text-primary mb-3">Fill Your Details here -</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>

              <button type="submit" className="btn btn-primary"
                onClick={() => navigate("/event/confirmation")}
              >Submit</button>

              <p className="mt-3 small text-muted">
                By proceeding, you confirm that you have read and agree to
                <a href="#" className="text-decoration-none ms-1 text-primary">Calendly’s Terms of Use</a> and
                <a href="#" className="text-decoration-none ms-1 text-primary">Privacy Notice</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event2;