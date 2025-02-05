import "./Approvals.css";

const ApprovalsPage = () => {
  return (
    <div className="approvals-page">
      <div className="page-header">
        <h1>Store Approvals</h1>
        <div className="header-actions">
          <div className="filter-group">
            <select className="filter-select">
              <option value="all">All Requests</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <div className="approvals-grid">
        <div className="approval-card">
          <div className="approval-header">
            <h3>Store Name</h3>
            <span className="status pending">Pending Review</span>
          </div>
          
          <div className="approval-content">
            <div className="info-group">
              <label>Owner Name</label>
              <p>John Doe</p>
            </div>
            <div className="info-group">
              <label>Email</label>
              <p>john.doe@example.com</p>
            </div>
            <div className="info-group">
              <label>Location</label>
              <p>123 Main St, New York, NY 10001</p>
            </div>
            <div className="info-group">
              <label>Store Type</label>
              <p>Retail</p>
            </div>
            <div className="info-group">
              <label>Submitted On</label>
              <p>March 20, 2024</p>
            </div>
          </div>

          <div className="approval-actions">
            <button className="btn-primary approve-btn">
              <i className="material-icons">check</i>
              Approve
            </button>
            <button className="btn-secondary reject-btn">
              <i className="material-icons">close</i>
              Reject
            </button>
          </div>
        </div>

        <div className="approval-card">
          <div className="approval-header">
            <h3>Store Name</h3>
            <span className="status approved">Approved</span>
          </div>
          
          <div className="approval-content">
            <div className="info-group">
              <label>Owner Name</label>
              <p>Jane Smith</p>
            </div>
            <div className="info-group">
              <label>Email</label>
              <p>jane.smith@example.com</p>
            </div>
            <div className="info-group">
              <label>Location</label>
              <p>456 Oak Ave, Los Angeles, CA 90001</p>
            </div>
            <div className="info-group">
              <label>Store Type</label>
              <p>Wholesale</p>
            </div>
            <div className="info-group">
              <label>Submitted On</label>
              <p>March 19, 2024</p>
            </div>
          </div>

          <div className="approval-actions">
            <button className="btn-secondary view-details-btn">
              <i className="material-icons">visibility</i>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalsPage; 