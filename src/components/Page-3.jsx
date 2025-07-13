export default function Schedule(){
    return (
        <div className="container py-5 text-center schedule-container">
            {/* Profile Image */}
            <div className="profile-image mb-4">
                <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Profile" 
                    className="rounded-circle img-thumbnail"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
            </div>

            {/* Scheduled Text */}
            <div className="status-message mb-4">
                <p className="text-primary fw-bold fs-5">✅ You are scheduled</p>
                <p className="text-muted">A calendar invitation has been sent to your email address.</p>
            </div>

            {/* Event Details */}
            <div className="card mx-auto shadow event-card" style={{ maxWidth: "800px", height: "48vh", marginTop: "6rem"}}>
                <div className="card-body text-start">
                    <h5 className="card-title mb-3">Schedule eClosing</h5>
                    <p className="card-text"><strong>👤</strong> Khatchadur Israyelyan</p>
                    <p className="card-text"><strong>🕒</strong> 19:00 – 19:45, Monday, August 19, 2024</p>
                    <p className="card-text"><strong>🌐</strong> Asia/Yerevan</p>
                    <p className="card-text"><strong>📹</strong> Web conferencing details to follow.</p>
                </div>
            </div>
        </div>
    )
}