import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>This is Home</h1>
      <p>
        <Link to="/products"> Go to Products</Link>
      </p>
      <button onClick={navigateHandler}>Go to Proucts</button>
    </>
  );
};

export default Home;
