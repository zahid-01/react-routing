import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Samsung" },
  { id: 2, name: "Nokia" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Xiaomi" },
  { id: 5, name: "Oppo" },
  { id: 6, name: "Zen" },
];

const Product = () => {
  return (
    <>
      <h1>This is Products</h1>
      <ul>
        {products.map((el) => (
          <li key={el.id}>
            <Link to={`/products/${el.id}`}>Product-{el.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Product;
