import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/hooks/use-toast";
import { setProductDetails } from "@/store/shop/products-slice";
import StarRatingComponent from "../common/star-rating";
import { addReview, getReviews } from "@/store/shop/review-slice";
import { Avatar, AvatarFallback } from "../ui/avatar";

function ProductDetails({ productDetails }) {
  // Destructure the product details with default values\
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { reviews } = useSelector((state) => state.shopReview);
  const { productList } = useSelector((state) => state.shopProducts);
  const { toast } = useToast();
  const { title, description, price, salePrice, image, brand, category } =
    productDetails?.data || {};

  console.log("Product ID:", productDetails?.data?._id);
  console.log("Total Stock:", productDetails?.totalStock);
  console.log("Product Details:", productDetails);

  const productId = productDetails?.data?._id || "";
  const totalStock = productDetails?.data?.totalStock || 0;

  function handleRatingChange(getRating) {
    setRating(getRating);
  }

  function handleAddToCart(getCurrentProductId) {
    let getCartItems = cartItems.items || [];

    // Check if the product is out of stock
    const getCurrentProductIndex = productList.findIndex(
      (product) => product._id === getCurrentProductId
    );
    const getTotalStock = productList[getCurrentProductIndex]?.totalStock || 0;

    if (getTotalStock === 0) {
      toast({
        title: "This product is out of stock",
        variant: "destructive",
      });
      return;
    }

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );

      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getTotalStock} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }

    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  function handleAddReview() {
    const productId = productDetails?.data?._id;
    console.log("Submitting review for product:", productId);

    dispatch(
      addReview({
        productId: productId,
        userId: user?.id,
        userName: user?.userName,
        reviewMessage: reviewMsg,
        reviewValue: rating,
      })
    ).then((data) => {
      if (data.payload?.success) {
        setRating(0)
        setReviewMsg('')
        dispatch(getReviews(productDetails?.data?._id));
        toast({
          Title: "Reviews added successfully",
        });
      }
      console.log("Review submission response:", data);

    });
  }

  useEffect(() => {
    if (productDetails !== null)
      dispatch(getReviews(productDetails?.data?._id));
  }, [productDetails]);  

  console.log(reviews, "reviews");
  
  const averageReview = reviews && reviews.length > 0 ?
  reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
  reviews.length : 0;

  
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 mt-11">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section: Product Image */}
        <div>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-auto aspect-square object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-600">{description}</p>

          {/* Price Section */}
          <div className="text-4xl font-bold">
            {salePrice ? (
              <>
                <span className="line-through text-gray-400">${price}</span>
                <span className="text-red-500 ml-2">${salePrice}</span>
              </>
            ) : (
              `$${price}`
            )}
          </div>

          {/* Brand & Category */}
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Brand:</span> {brand}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
          </div>

          {/* Options: Color */}
          <div>
            <Label htmlFor="color" className="font-semibold text-lg">
              Color
            </Label>
            <RadioGroup
              id="color"
              defaultValue="black"
              className="flex gap-2 mt-2"
            >
              <Label className="border rounded-md p-2 cursor-pointer [&:has(:checked)]:bg-gray-100">
                <RadioGroupItem value="black" /> Black
              </Label>
              <Label className="border rounded-md p-2 cursor-pointer [&:has(:checked)]:bg-gray-100">
                <RadioGroupItem value="white" /> White
              </Label>
              <Label className="border rounded-md p-2 cursor-pointer [&:has(:checked)]:bg-gray-100">
                <RadioGroupItem value="blue" /> Blue
              </Label>
            </RadioGroup>
          </div>

          {/* Quantity */}
          {/* <div>
            <Label htmlFor="quantity" className="font-semibold text-lg">
              Quantity
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-24 mt-2">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }).map((_, i) => (
                  <SelectItem key={i} value={`${i + 1}`}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}

          {/* Add to Cart Button */}

          {
            <Button
              size="lg"
              className={`w-full ${
                productDetails?.totalStock === 0
                  ? "bg-gray-400 opacity-50 cursor-not-allowed"
                  : "bg-black"
              }`}
              onClick={() => handleAddToCart(productId)}
              disabled={productDetails?.totalStock === 0}
            >
              {productDetails?.totalStock === 0
                ? "Out of Stock"
                : "Add to Cart"}
            </Button>
          }

          <Separator className="my-6" />

          {/* Additional Product Information */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Product Details</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <Separator className="my-12" />

      {/* Additional Product Information */}
      <div className="space-y-8">
        {/* Customer Reviews */}

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
          {/* Grid for Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Customer Reviews */}
            <div>
            <div className="flex gap-2">
            <h2 className="font-bold text-2xl mb-6">Customer Reviews</h2>
            <h2 className="text-2xl">({averageReview.toFixed(2)})</h2>

            </div>

              {
                reviews && reviews.length > 0 ?
                reviews.map(reviewItem =><div className="flex gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center">
                   <Avatar className ='w-12 h-12'>
                   <AvatarFallback>{reviewItem.userName[0].toUpperCase()}</AvatarFallback>
                   </Avatar>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{reviewItem?.userName}</h3>
                      <div className="flex items-center gap-0.5">
                       <StarRatingComponent rating={reviewItem?.reviewValue}/>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm">2 days ago</p>
                    <p className="mt-2 text-gray-700">
                     {reviewItem?.reviewMessage}
                    </p>
                  </div>
                </div>) : <h1>Product No Reviews</h1>
              }
              
          

             
            </div>

            {/* Right Column: Add a Review */}
            <div>
              <h2 className="font-bold text-2xl mb-2">Write a Review</h2>
              <div className="space-y-4">
                {/* Product Title */}
                <div className="flex gap-1">
                  <StarRatingComponent
                    rating={rating}
                    handleRatingChange={handleRatingChange}
                  />
                </div>

                {/* Review Input */}
                <textarea
                  name="reviewMsg"
                  value={reviewMsg}
                  onChange={(event) => setReviewMsg(event.target.value)}
                  placeholder="Write your review..."
                  rows="6"
                  className="w-full border rounded-lg p-3 text-gray-700"
                ></textarea>

                {/* Submit Button */}
                <Button
                  onClick={handleAddReview}
                  disabled={reviewMsg.trim() === ""}
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
