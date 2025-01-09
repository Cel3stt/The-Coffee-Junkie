import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";

import { Badge } from "@/components/ui/badge";
import { Dialog } from "../ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  resetOrderDetails,
} from "@/store/admin/order-slice";
import AdminOrderDetailsView from "./Order-Details";

function AdminOrdersView() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { orderList, orderDetails } = useSelector((state) => state.adminOrder);
  const dispatch = useDispatch();

  function handleFetchOrderDetails(getId) {
    dispatch(getOrderDetailsForAdmin(getId));
  }
  useEffect(() => {
    dispatch(getAllOrdersForAdmin());
  }, [dispatch]);

  console.log(orderDetails, "orderList");

  useEffect(() => {
    if (orderDetails !== null) setOpenDetailsDialog(true);
  }, [orderDetails]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Orders</h1>
          <div className="flex gap-3 items-center justify-end">
            <Input
              type="search"
              placeholder="Search Order..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Newest
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Oldest</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orderList.map((orderItem, index) => (
            <Card
              key={index}
              className="max-w-[450px] relative overflow-hidden border-t-[10px] border-t-black rounded-lg mb-5"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <Badge variant={orderItem?.orderStatus.toLowerCase()}>
                    {orderItem?.orderStatus}
                  </Badge>
                </div>
                <div className="mt-4 space-y-2">
                  {orderItem?.cartItems.map((item, index) => (
                    <p key={index} className="font-medium"></p>
                  ))}
                  <span className="font-semibold">ID: {orderItem?._id}</span>
                  <p className="text-sm text-muted-foreground">
                    {orderItem?.orderDate.split("T")[0]}
                  </p>
                  <p className="font-semibold">₱ {orderItem?.totalAmount}</p>
                </div>
                <div className="mt-4 text-right">
                  <Dialog
                    open={openDetailsDialog}
                    onOpenChange={() => {
                      setOpenDetailsDialog(false);
                      dispatch(resetOrderDetails());
                    }}
                  >
                    <Button
                      variant="outline"
                      className="w-full mt-4 text-gray-800 font-normal"
                      onClick={() => handleFetchOrderDetails(orderItem?._id)}
                    >
                      View Details
                    </Button>
                    <AdminOrderDetailsView orderDetails={orderDetails} />
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AdminOrdersView;
