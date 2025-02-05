import "./Stores.css";

const StoresPage = () => {
  return (
    <div className="stores-page">
      <div className="page-header">
        <h1>Stores Management</h1>
        <button className="action-button">
          <i className="fas fa-plus"></i> Add Store
        </button>
      </div>

      <div className="stores-grid">
        <div className="store-card">
          <div className="store-header">
            <h3>Store Name</h3>
            <span className="status active">Active</span>
          </div>
          <div className="store-info">
            <p><i className="fas fa-map-marker-alt"></i> New York, USA</p>
            <p><i className="fas fa-user"></i> John Doe</p>
          </div>
          <div className="store-actions">
            <button className="edit-btn">Edit</button>
          </div>
        </div>

        <div className="store-card">
          <div className="store-header">
            <h3>Store Name</h3>
            <span className="status inactive">Inactive</span>
          </div>
          <div className="store-info">
            <p><i className="fas fa-map-marker-alt"></i> Los Angeles, USA</p>
            <p><i className="fas fa-user"></i> Jane Smith</p>
          </div>
          <div className="store-actions">
            <button className="edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresPage; 