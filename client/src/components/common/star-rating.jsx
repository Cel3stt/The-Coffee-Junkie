import React from "react";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";

function StarRatingComponent({ rating, handleRatingChange}) {
  return [1, 2, 3, 4, 5].map((star) => (
    <Button
      className={`p-2 rounded-full transition-colors ${
        star <= rating
          ? "text-yellow-500: bg-none"
          : "hover:text-yellow-500"
      }`}
      variant="outline"
      size="icon"
      onClick={ handleRatingChange ? () => handleRatingChange(star) : null}
    >
      <StarIcon
        className={`${star <= rating ? "fill-yellow-500" : "fill-none"}`}
      />
    </Button>
  ));
}

export default StarRatingComponent;
