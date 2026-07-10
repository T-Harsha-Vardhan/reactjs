const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "₹70000" },
    { id: 2, name: "Laptop", price: "₹110000" },
    { id: 3, name: "Headphone", price: "₹25000" },
  ];
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
