import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "@/store/shop/products-slice";
import ProductDetails from "./Product-Details";
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <div className="container mx-auto px-4 py-8 text-red-500">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  )
}

const ProductDetailsContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails, isLoading, error } = useSelector((state) => state.shopProducts);

  useEffect(() => {
    console.log('Fetching product with ID:', id);
    if (id) {
      dispatch(fetchProductDetails(id))
        .unwrap()
        .then((result) => {
          console.log('Fetch successful:', result);
        })
        .catch((error) => {
          console.error('Fetch failed:', error);
        });
    }
  }, [id, dispatch]);

  console.log('Render state:', { productDetails, isLoading, error });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!productDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        Product not found.
      </div>
    );
  }

  return <ProductDetails productDetails={productDetails} />;
};

const ProductDetailsPageWrapper = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ProductDetailsContent />
    </ErrorBoundary>
  );
};

export default ProductDetailsPageWrapper;
