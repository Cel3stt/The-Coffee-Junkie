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

          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              Out of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 ">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge
              variant="sale"
              className="absolute top-2 left-2 bg-red-400 text-white"
            >
              Sale
            </Badge>
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

          <div className="flex items-baseline gap-2 mb-2">
          {product?.salePrice > 0 ? (
            <>
              <span className="text-sm text-muted-foreground line-through">
                ₱{product?.price.toLocaleString()}
              </span>
              <span className="text-xl font-bold text-red-600">
                ₱{product?.salePrice.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-primary">
              ₱{product?.price.toLocaleString()}
            </span>
          )}
        </div>
        </CardContent>
      </div>

      <CardFooter className="flex gap-4 bg-white">
        <span className="text-sm text-muted-foreground">{product?.brand}</span>

        <Button variant="outline" size="icon" className="flex-shrink-0 ml-auto">
          <HeartIcon className="size-4" />
        </Button>
        {
          product?.totalStock === 0 ? <Button
         
          variant="outline"
          className="opacity-60 cursor-not-allowed"
        >
          <ShoppingCart className="size-4 opacity-60" />
        </Button> :   <Button
          onClick={() => handleAddToCart(product?._id, product?.totalStock)}
          variant="outline"
          className=""
        >
          <ShoppingCart className="size-4 " />
        </Button>
        }

      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
