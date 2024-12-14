import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import React from "react";

function ShoppingProductTile({ product }) {
  return (
    <Card>
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full object-cover rounded-t-lg"
          />
          {product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-400"></Badge>
          ) : null}
        </div>
        <CardContent>
            <h2>{product?.title}</h2>
            <div className="flex justify-between items-center mb-2">
                <span>{product?.category}</span>
                <span>{product?.brand}</span>
            </div>

            <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-primary">
                ${product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter>
            <Button><ShoppingCart/></Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default ShoppingProductTile;
