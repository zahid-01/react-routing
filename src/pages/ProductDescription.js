import { useParams } from "react-router-dom";

const ProductDesription = () => {
  const params = useParams();

  return <div>This is products page of {params.productId}</div>;
};

export default ProductDesription;
