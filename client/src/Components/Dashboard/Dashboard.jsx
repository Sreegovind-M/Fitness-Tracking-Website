import React from 'react'
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navi = useNavigate();
    const toFt = () => {
        navi("/fitnessTracking")
    }

  return (
    <div>
      <div className="dashboard-section">
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard-body">
                <div className="dashboard-boxes-section">
                    <div className="dashboard-card">
                        <h1>Activity Summary</h1>
                    </div>
                    <div className="dashboard-card">
                        <h1>Challenge Management</h1>
                    </div>
                    <div className="dashboard-card" onClick={toFt}>
                        <h1>Fitness Tracker</h1>
                    </div>
                    <div className="dashboard-card">
                        <h1>Personal Health Metrics</h1>
                    </div>
                    <div className="dashboard-card">
                        <h1>Educational content</h1>
                    </div>
                    <div className="dashboard-card">
                        <h1>user feedbacks</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
