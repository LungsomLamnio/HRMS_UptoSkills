import React from 'react';
import '../App.css'; 

function EventPage() {
  return (
    <div className="main-content">
      <div className="event-wrapper">
        <div className="event-header">
          <img
            src="client.jpg"
            alt="User"
            className="event-profile"
          />
          <h2 className="event-heading">You are scheduled</h2>
          <p className="event-subtext">A calendar invitation has been sent to your email address.</p>
        </div>

        <div className="event-card-box">
          <h4 className="event-title">Schedule eClosing</h4>
          <p><i className="bi bi-person-fill me-2"></i>Khatchadour Israelayn</p>
          <p><i className="bi bi-calendar-event me-2"></i>19:00 - 19:45, Monday, August 19, 2024</p>
          <p><i className="bi bi-globe me-2"></i>Asia/Yerevan</p>
          <p><i className="bi bi-camera-video-fill me-2"></i>Web conferencing details to follow.</p>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
