import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8060/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductAdded = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8060/api/products/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProducts((prevProducts) => prevProducts.filter(product => product.productId !== productId));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (loading) {
    return (
      <div className="products-page">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Products</h1>
        <button className="btn btn-primary" onClick={() => navigate('/admin/products/add')}>
          Add Product
        </button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.productId} className="product-card">
            {product.productImageUrl && (
              <img 
                src={product.productImageUrl} 
                alt={product.productName} 
                className="product-image" 
              />
            )}
            <div className="product-info">
              <h3>{product.productName}</h3>
              <p className="product-id">ID: {product.productId}</p>
              <p className="product-price">${product.productPrice}</p>
              <p className="product-brand">Brand: {product.productBrand}</p>
              <p className="product-category">Category: {product.productCategory}</p>
            </div>
            <div className="product-actions">
              <button className="btn btn-secondary" onClick={() => navigate(`/admin/products/edit/${product.productId}`)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.productId)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;