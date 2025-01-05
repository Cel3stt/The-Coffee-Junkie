import Address from "@/components/shopping-view/address";
import React from "react";
import AddressCard from "@/components/shopping-view/Address-Card";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping-view/Cart-items-content";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreditCardIcon } from "lucide-react";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const totalCartAmount =
    cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 mt-11">
        <div className="mb-6 mt-5">
          <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Verify Items and Proceed to Payment
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Address Form Section */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <Address />
            </CardContent>
          </Card>

          {/* Cart Summary Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-4">Order Summary</h2>
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-4">
                  {cartItems &&
                  cartItems.items &&
                  cartItems.items.length > 0 ? (
                    cartItems.items.map((item) => (
                      <UserCartItemsContent key={item.id} cartItem={item} />
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      Your cart is empty
                    </p>
                  )}
                </div>
              </ScrollArea>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">₱{totalCartAmount}</span>
                </div>
              </div>
              <div>
                <Button size="lg" className="w-full mt-4">
                  <CreditCardIcon className="w-6 h-6 mr-2" />
                  Checkout with Paypal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
