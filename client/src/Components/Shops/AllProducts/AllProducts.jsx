import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ShopsHome.css";
import { useNavigate } from "react-router-dom";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Now it's an array to hold multiple products
  const [sortOrder, setSortOrder] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart visibility

  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/shop/",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
  
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart; // return the updated cart
      } else {
        // If the product doesn't exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  
  // Handle removing a product from the cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Handle increasing quantity of a product in the cart
  const handleIncreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle decreasing quantity of a product in the cart
  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle navigating to payment
  const handleBuy = () => {
    if (cart.length > 0) {
      navigate("/payment"); // Navigate to the payment page
    } else {
      alert("Your cart is empty. Please add products before proceeding.");
    }
  };

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev); // Toggle cart overlay visibility
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter and sort products
  const filteredProducts = (products || []).filter(
    (product) =>
      product &&
      product.prodName &&
      product.prodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "lowToHigh":
        return a.prodPrice - b.prodPrice;
      case "highToLow":
        return b.prodPrice - a.prodPrice;
      case "default":
        return a.id - b.id;
      default:
        return 0;
    }
  });

  // Calculate the total price of the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.prodPrice * item.quantity,
    0
  );

  return (
    <div className="shopping-page">
      <header className="shopping-header">
        <div className="header-center">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <section className="filters">
            <h2>Sort By</h2>
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="sort-select"
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </section> 
        </div>
        <div className="header-right">
          <div className="cart-icon" onClick={handleCartToggle}>
            🛒
            {cart.length > 0 && (
              <div className="cart-count">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="products">
          <h2>All Products</h2>
          <ul>
            {sortedProducts.map((product) => (
              <li key={product.id} className="product-item">
                <img
                  src={product.prodImage}
                  alt={product.prodName}
                  className="product-image"
                />
                <div className="product-info">
                  <h3>{product.prodName}</h3>
                  <p>{product.prodDescrip}</p>
                  <p>
                    <strong>${product.prodPrice.toFixed(2)}</strong>
                  </p>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Cart Overlay */}
      {isCartOpen && cart.length > 0 && (
        <div className="cart-overlay">
          <div className="cart-content">
            <h2>Shopping Cart</h2>
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="cart-item-info">
                  <img
                    src={product.prodImage}
                    alt={product.prodName}
                    className="cart-item-image"
                  />
                  <div>
                    <h3>{product.prodName}</h3>
                    <p>Price: ${product.prodPrice.toFixed(2)}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>
                      Total: $
                      {(product.prodPrice * product.quantity).toFixed(2)}
                    </p>
                    <div className="cart-item-actions">
                      <button
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        +
                      </button>
                      <button onClick={() => handleRemoveFromCart(product.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleBuy} className="buy-button">
              Proceed to Buy
            </button>
            <button onClick={handleCartToggle} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopping;
