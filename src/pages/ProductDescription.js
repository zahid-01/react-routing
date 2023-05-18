import { Link, useParams } from "react-router-dom";

const ProductDesription = () => {
  const params = useParams();

  return (
    <div>
      This is products page of {params.productId}
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
};

export default ProductDesription;
