import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Address from '@/components/shopping-view/address';
import ShoppingOrders from '@/components/shopping-view/orders';

function ShoppingAccount() {
  return (
    <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        {/* Tabs */}
        <div className="w-full">
          <h1 className="text-xl font-bold mb-2">Settings</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Manage your account settings and view orders.
          </p>

          <Tabs defaultValue="account" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <Address />
            </TabsContent>

            <TabsContent value="orders">
              <ShoppingOrders/>
              
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ShoppingAccount;
