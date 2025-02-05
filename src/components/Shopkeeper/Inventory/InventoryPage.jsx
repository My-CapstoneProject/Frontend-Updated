import "./Inventory.css";

const InventoryPage = () => {
  return (
    <div className="inventory-page">
      <div className="inventory-header">
        <h1>Inventory Management</h1>
        <button className="add-btn">
          <i className="fas fa-plus"></i> Add Item
        </button>
      </div>

      <div className="inventory-grid">
        <div className="inventory-card">
          <div className="item-info">
            <h3>Product Name</h3>
            <p>Quantity: 50</p>
            <p>Price: $19.99</p>
          </div>
          <div className="item-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>

        <div className="inventory-card">
          <div className="item-info">
            <h3>Product Name</h3>
            <p>Quantity: 30</p>
            <p>Price: $29.99</p>
          </div>
          <div className="item-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage; 