import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { toast } from "@/hooks/use-toast";
import { setProductDetails } from "@/store/shop/products-slice";


function ProductDetails({ productDetails}) {
  // Destructure the product details with default values\
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  
  const {
    title,
    description,
    price,
    salePrice,
    image,
    brand,
    category
  } = productDetails?.data || {};

  console.log("Product ID:", productDetails?._id);
  console.log("Total Stock:", productDetails?.totalStock);
  console.log("Product Details:", productDetails);

  const productId = productDetails?.data?._id || "defaultId";
  const totalStock = productDetails?.data?.totalStock || 0;

  function handleAddToCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
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
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
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
            <p><span className="font-semibold">Brand:</span> {brand}</p>
            <p><span className="font-semibold">Category:</span> {category}</p>
          </div>

          {/* Options: Color */}
          <div>
            <Label htmlFor="color" className="font-semibold text-lg">
              Color
            </Label>
            <RadioGroup id="color" defaultValue="black" className="flex gap-2 mt-2">
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
          <div>
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
          </div>

          {/* Add to Cart Button */}
          <Button
            size="lg"
            className="w-full"
            onClick={() =>
              handleAddToCart(productDetails?.data?._id, productDetails?.data?.totalStock)
            }
          >
            Add to Cart
          </Button>

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
      <h2 className="font-bold text-2xl mb-6">Customer Reviews</h2>

      {/* Review 1 */}
      <div className="flex gap-4 mb-8">
        <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <span>👤</span>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Sarah Johnson</h3>
            <div className="flex items-center gap-0.5">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
              {[...Array(2)].map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm">2 days ago</p>
          <p className="mt-2 text-gray-700">
            I've been experimenting with my Acme Circles T-Shirt for a few weeks now, and it's been a
            great addition to my wardrobe. The fabric is soft and comfortable, and the unique design really
            stands out.
          </p>
        </div>
      </div>

      {/* Review 2 */}
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <span>👤</span>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Alex Smith</h3>
            <div className="flex items-center gap-0.5">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
              {[...Array(2)].map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm">3 weeks ago</p>
          <p className="mt-2 text-gray-700">
            The Acme Circles T-Shirt is a great quality product. The fabric is soft and durable, and the
            design is really unique and eye-catching. I've received a lot of compliments when wearing it.
          </p>
        </div>
      </div>
    </div>

    {/* Right Column: Add a Review */}
    <div>
      <h2 className="font-bold text-2xl mb-6">Write a Review</h2>
      <div className="space-y-4">
        {/* Product Title */}
        <h3 className="text-lg font-bold">Acme Prism T-Shirt: The Cozy Chromatic Blend</h3>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-xl">★</span>
          ))}
          {[...Array(2)].map((_, i) => (
            <span key={i} className="text-gray-300 text-xl">★</span>
          ))}
        </div>

        {/* Review Input */}
        <textarea
          placeholder="Write your review..."
          rows="6"
          className="w-full border rounded-lg p-3 text-gray-700"
        ></textarea>

        {/* Submit Button */}
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  );
}

export default ProductDetails;

