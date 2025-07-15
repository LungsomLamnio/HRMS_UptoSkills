import React, { useState } from 'react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './Events.css';
import profile1 from "../assets/client.jpg";
import profile2 from "../assets/EventO.png";
import { FaClock, FaCalendarAlt, FaVideo, FaGlobe } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Event1 () {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const events = [
    {
      id: 1,
      name: "John Cena",
      title: "Quarterly Hackathon",
      image: profile1,
    },
    {
      id: 2,
      name: "Maria D'Souza",
      title: "Employee Onboarding Day",
      image: profile2,
    },
  ];

  const times = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  ];

  const handleSchedule = () => {
    const targetDateTime = {
      date: selectedDate.toDateString(),
      time: selectedTime,
    };

    console.log("Scheduled for:", targetDateTime); // or store in localStorage/context/state
    navigate("/event/schedule");
  };

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-4">Event Listings -</h3>
      <div className="row">
        {/* LEFT SIDE */}
        <div className="col-md-5 mx-auto">
          {events.map((event) => (
            <div className="card mb-4 border-0 shadow-sm" key={event.id}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={event.image}
                    alt="avatar"
                    className="me-3"
                    style={{ width: 50, height: 50, borderRadius: "50%" }}
                  />
                  <div>
                    <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                      {event.name}
                    </p>
                    <h5 className="mb-0">{event.title}</h5>
                  </div>
                </div>
                <ul className="list-unstyled small text-muted mb-3">
                  <li><FaClock /> 30 min</li>
                  <li className="my-2"><FaCalendarAlt /> Web conferencing details provided upon confirmation.</li>
                  <li><FaVideo /> 19:00 - 19:45, Monday, August 19, 2024</li>
                  <li><FaGlobe /> Asia/Kolkata</li>
                </ul>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary px-4">Join Event</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-start gap-4 flex-wrap">
            <div style={{ flex: 1 }}>
              <h5 className="mb-3 fw-bold">Select a Date & Time</h5>
              <div
                className="bg-white p-3 rounded shadow-sm border mb-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Calendar onChange={setSelectedDate} value={selectedDate} />
              </div>
              <p className="mt-3 mb-0 fw-semibold">Time zone</p>
              <small className="text-muted">🌍 Asia/Kolkata (Local time)</small>
            </div>

            {/* Time Slots */}
            <div className="text-end" style={{ minWidth: "120px" }}>
              <p className="fw-semibold mb-2">
                {selectedDate.toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </p>
              <div className="d-flex flex-column gap-2">
                {times.map((time) => (
                  <button
                    key={time}
                    className={`btn fw-semibold ${
                      selectedTime === time
                        ? "btn-primary text-white"
                        : "btn-outline-primary"
                    }`}
                    style={{ borderRadius: "8px", borderWidth: "2px" }}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-primary px-4 py-2 fw-bold"
              disabled={!selectedTime}
              onClick={handleSchedule}
            >
              Schedule New Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}