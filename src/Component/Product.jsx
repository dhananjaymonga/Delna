import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/Data/Product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto p-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/* Category Buttons */}
      <div className="flex gap-2 mb-4">
        {["All", "Lights", "Wires", "Pumps", "Fans"].map((cat) => (
          <button
            key={cat}
            className={`p-2 border rounded ${category === cat ? "bg-blue-500 text-white" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
