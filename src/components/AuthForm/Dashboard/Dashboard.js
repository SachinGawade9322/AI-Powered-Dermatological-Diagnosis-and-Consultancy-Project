import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const userReport = {
    id: 1,
    patientName: "John Doe",
    diagnosis: "Eczema",
    date: "2024-12-01",
    status: "Reviewed",
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Menu</h2>
        <a href="#overview" className="active">Overview</a>
        <a href="#reports">Reports</a>
        <a href="#history">History</a>
        <a href="#settings">Settings</a>
        <a href="#logout">Logout</a>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Dashboard Header */}
        <header className="dashboard-header">
          <h1>Welcome, John Doe</h1>
        </header>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-card">
            <h2>10</h2>
            <p>Total Reports</p>
          </div>
          <div className="stat-card">
            <h2>3</h2>
            <p>Pending Reviews</p>
          </div>
          <div className="stat-card">
            <h2>7</h2>
            <p>Reviewed</p>
          </div>
        </section>

        {/* Latest Report Section */}
        <section className="report-section">
          <h2>Latest Report</h2>
          <div className="report-card">
            <p><strong>Patient Name:</strong> {userReport.patientName}</p>
            <p><strong>Diagnosis:</strong> {userReport.diagnosis}</p>
            <p><strong>Date:</strong> {userReport.date}</p>
            <p><strong>Status:</strong> <span className={`status ${userReport.status.toLowerCase()}`}>{userReport.status}</span></p>
          </div>
        </section>

        {/* History Section */}
        <section className="history-section">
          <h2>Report History</h2>
          <table className="history-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Diagnosis</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2024-11-20</td>
                <td>Psoriasis</td>
                <td className="status reviewed">Reviewed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2024-11-10</td>
                <td>Acne</td>
                <td className="status pending">Pending</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Action Panel */}
        <section className="action-panel">
          <button className="btn">Download Report</button>
          <button className="btn">Request Review</button>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
