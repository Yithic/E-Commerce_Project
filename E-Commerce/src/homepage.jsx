function Homepage(){
    const products = [
  {
    name: "Sneakers",
    price: 9999,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
  },
  {
    name: "Phone",
    price: 56999,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"
  },
  {
    name: "Coffee",
    price: 569,
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636"
  },
  {
    name: "Cycle",
    price: 87990,
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde"
  }
];
    return (
        <div div className="page">
        <div className="nav">
            <h2>Vish</h2>
        </div>
        <div className="banner">
            <h1>Welcome to the Vish Store</h1>
            <p>Worst products at even worse prices!</p>
        </div>
        <div className="products">

  {products.map((product, index) => (
    <div className="product" key={index}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button>Buy</button>
    </div>
  ))}

</div>
<div className="footer">
  <p>© 2026 Vish</p>
</div>
        </div>
    );
}

export default Homepage