import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartQuantity } from "@/store/shop/cart-slice";
import { useSelector } from "react-redux";
import { toast, useToast } from "@/hooks/use-toast";


function UserCartItemsContent({ cartItem }) {


  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { productList } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function handleUpdateQuantity(getCartItem, typeOfAction) {
    if (typeOfAction == "plus") {
      let getCartItems = cartItems.items || [];

      if (getCartItems.length) {
        const indexOfCurrentCartItem = getCartItems.findIndex(
          (item) => item.productId === getCartItem?.productId
        );

        const getCurrentProductIndex = productList.findIndex(
          (product) => product._id === getCartItem?.productId
        );
        const getTotalStock = productList[getCurrentProductIndex].totalStock;

        console.log(getCurrentProductIndex, getTotalStock, "getTotalStock");

        if (indexOfCurrentCartItem > -1) {   
          const getQuantity = getCartItems[indexOfCurrentCartItem].quantity;
          if (getQuantity + 1 > getTotalStock) {
            toast({
              title: `Only ${getQuantity} quantity can be added for this item`,
              variant: "destructive",
            });

            return;
          }
        }
      }
    }

    dispatch(
      updateCartQuantity({
        userId: user?.id,
        productId: getCartItem?.productId,
        quantity:
          typeOfAction === "plus"
            ? getCartItem?.quantity + 1
            : getCartItem?.quantity - 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item is updated successfully",
        });
      }
    });
  }


  function handleCartItemDelete(getCartItem) {
    dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item is deleted successfully",
        });
      }
    });
  }

  
  return (
    <div className="flex items-center space-x-4">
      <img src={cartItem?.image} 
      alt={cartItem?.title} 
      className="w-20 h-20 object-cover rounded"
      />

      <div className="flex-1">
        <h4 className="font-medium">{cartItem?.title}</h4>

        <div className="flex items-center mt-3 gap-6">
        <Button
            variant="outline"
            className="h-6 w-6 "
            size="icon"
            disabled={cartItem?.quantity === 1}
            onClick={() => handleUpdateQuantity(cartItem, "minus")}
          >
            <Minus className="w-2 h-2" />
            <span className="sr-only">Decrease</span>
          </Button>

          <span>{cartItem?.quantity}</span>
          <Button
            variant="outline"
            className="h-6 w-6 "
            size="icon"
            
            onClick={() => handleUpdateQuantity(cartItem, "plus")}
          >
            <Plus className="w-2 h-2" />
            <span className="sr-only">Increase</span>
          </Button>


        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="font-semibold">
        ₱ {((cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) * cartItem?.quantity).toFixed(2)}
        </p>

        <Trash onClick={() => handleCartItemDelete(cartItem)} className="text-destructive cursor-pointer mt-1 " size={15}></Trash>
      </div>
    </div>
    
  );
}

export default UserCartItemsContent;
