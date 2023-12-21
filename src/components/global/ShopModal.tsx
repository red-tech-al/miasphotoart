const ShopItemModal = (product: any, show: Boolean) => {
  return (
    <div style={{ display: show ? "block" : "none", height: "100vh", width: "100vw" }}>
      <div>
        <text>{product.title}</text>
      </div>
      <div>
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.basePrice}</p>
      </div>
      <div>
        <button onClick={() => { show = false }}>Close</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShopItemModal;