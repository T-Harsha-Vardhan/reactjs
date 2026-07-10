const ProductInfo = () => {
  const product = {
    name: "Macbook Air M5",
    price: "₹108900",
    availability: "In stock",
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.availability}</p>
    </div>
  );
};

export default ProductInfo;
