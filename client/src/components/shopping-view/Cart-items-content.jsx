import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "@/store/shop/cart-slice";

function UserCartItemsContent({ cartItem }) {


  const user = useSelector(state => state.auth)
  const dispatch = useDispatch()
  function handleCartItemDelete(getCartItem){}

  dispatch(deleteCartItem({userId: user?.id, productId: getCartItem?.productId }))

  
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
            // onClick={() => handleUpdateQuantity(cartItem, "minus")}
          >
            <Minus className="w-2 h-2" />
            <span className="sr-only">Decrease</span>
          </Button>

          <span>{cartItem?.quantity}</span>
          <Button
            variant="outline"
            className="h-6 w-6 "
            size="icon"
            disabled={cartItem?.quantity === 1}
            // onClick={() => handleUpdateQuantity(cartItem, "minus")}
          >
            <Plus className="w-2 h-2" />
            <span className="sr-only">Increase</span>
          </Button>


        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="font-semibold">
          ${((cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) * cartItem?.quantity).toFixed(2)}
        </p>

        <Trash onClick={() => handleCartItemDelete(cartItem)} className="text-destructive cursor-pointer mt-1 " size={15}></Trash>
      </div>
    </div>
    
  );
}

export default UserCartItemsContent;
