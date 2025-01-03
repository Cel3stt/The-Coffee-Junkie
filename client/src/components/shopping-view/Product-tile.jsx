import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { HeartIcon } from "lucide-react";


function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddToCart,
}) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/shop/product/${product._id}`);
  };

  return (
    <Card className="w-full max-w-[350px] group relative space-y-4 rounded-lg">
      <div onClick={handleProductClick} className="product-card">
        <figure className="group-hover:opacity-90 bg-[#FAFAFA] p-4">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[200px] object-contain rounded-lg"
          />
          {product?.salePrice > 0 ? (
            <Badge
              variant="sale"
              className="absolute top-2 left-2 bg-red-400"
            ></Badge>
          ) : null}
        </figure>

        <CardContent className="bg-white rounded-lg">
          <div>
            <h2>{product?.title}</h2>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              {product?.category}
            </span>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ₱{product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-primary">
                ₱{product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>

       
      </div>

      <CardFooter className="flex gap-4 bg-white">
          <span className="text-sm text-muted-foreground">
            {product?.brand}
          </span>

          <Button
            variant="outline"
            size="icon"
            className="flex-shrink-0 ml-auto"
          >
            <HeartIcon className="size-4" />
          </Button>

          <Button
            onClick={() => handleAddToCart(product?._id)}
            variant="outline"
            className=""
          >
            <ShoppingCart className="size-4 " />
          </Button>
        </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
