import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="date-display">
          {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon users">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-info">
            <h3>Total Users</h3>
            <p>1,234</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon stores">
            <i className="fas fa-store"></i>
          </div>
          <div className="stat-info">
            <h3>Active Stores</h3>
            <p>56</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon revenue">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="stat-info">
            <h3>Total Revenue</h3>
            <p>$45,678</p>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h2>Revenue Overview</h2>
          <div className="chart-placeholder">
            Chart will be displayed here
          </div>
        </div>
        <div className="chart-card">
          <h2>User Growth</h2>
          <div className="chart-placeholder">
            Chart will be displayed here
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 