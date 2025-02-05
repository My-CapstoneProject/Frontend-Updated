import "./Billing.css";

const BillingPage = () => {
  return (
    <div className="billing-page">
      <div className="page-header">
        <h1>Billing</h1>
      </div>

      <div className="billing-container">
        <div className="products-section">
          <div className="search-bar">
            <i className="material-icons">search</i>
            <input 
              type="text"
              placeholder="Search products..."
            />
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-info">
                <h3>Product Name</h3>
                <p className="price">$19.99</p>
                <p className="stock">In Stock: 50</p>
              </div>
              <button className="btn-primary">Add to Cart</button>
            </div>

            <div className="product-card">
              <div className="product-info">
                <h3>Product Name</h3>
                <p className="price">$29.99</p>
                <p className="stock">In Stock: 30</p>
              </div>
              <button className="btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="cart-section">
          <div className="cart-header">
            <h2>Current Bill</h2>
            <button className="btn-secondary clear-cart">
              <i className="material-icons">delete</i>
              Clear
            </button>
          </div>

          <div className="cart-items">
            <div className="cart-item">
              <div className="item-info">
                <h4>Product Name</h4>
                <p>$19.99</p>
              </div>
              <div className="item-quantity">
                <button className="qty-btn">-</button>
                <span>1</span>
                <button className="qty-btn">+</button>
              </div>
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>$19.99</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%)</span>
              <span>$2.00</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>$21.99</span>
            </div>

            <button className="btn-primary checkout-btn">
              <i className="material-icons">receipt</i>
              Generate Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage; 