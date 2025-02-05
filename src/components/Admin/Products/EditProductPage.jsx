import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Products.css";

const EditProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productBrand: "",
    productCategory: "",
    productUserId: "",
    productImageUrl: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:8060/api/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8060/api/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        navigate('/admin/products'); // Navigate back to the products page
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="edit-product-page">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="number"
            name="productPrice"
            value={product.productPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Brand</label>
          <input
            type="text"
            name="productBrand"
            value={product.productBrand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Category</label>
          <input
            type="text"
            name="productCategory"
            value={product.productCategory}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product User ID</label>
          <input
            type="number"
            name="productUserId"
            value={product.productUserId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Image URL</label>
          <input
            type="text"
            name="productImageUrl"
            value={product.productImageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Edit Product</button>
      </form>
    </div>
  );
};

export default EditProductPage;