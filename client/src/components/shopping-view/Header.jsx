import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import { LogOut, Menu, ShoppingCart, User, UserCog } from "lucide-react";
import logo from "../../assets/Shop/RectangleLogo.png";
import { shoppingViewMenuItems } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./Cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";

function MenuItems({ isMobile }) {
  return (
    <nav className={`flex ${isMobile ? 'flex-col gap-y-4' : 'flex-row gap-x-8'}`}>
      {shoppingViewMenuItems.map((menuItem) => (
        <Link
          className="font-medium flex items-center text-sm transition-colors hover:underline"
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);

  const [openCartSheet, setOpenCartSheet] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function handleLogout(){
    dispatch(logoutUser())
  }

  useEffect(() => {
    dispatch(fetchCartItems(user?.id))
  }, [dispatch])

  return (
    <div className="flex items-center gap-4">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
      <Button onClick={() => setOpenCartSheet(true)} variant="outline" size="sm">
        <ShoppingCart />
      </Button>

      <UserCartWrapper cartItems={cartItems  && cartItems.items && cartItems.items.length > 0 ? cartItems.items : []} />
      </Sheet>

      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-primary">
            <AvatarFallback className="bg-primary text-white font-medium">
              {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <User className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);
 

  return (
    <header className="fixed inset-x-0 top-0 z-50  px-4 md:px-6 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo */}
          <div>
            <Link to="/shop/home" className="flex items-center">
              <img src={logo} alt="The Cofee Junkie" />
              <span className="px-3 font-medium text-primary">
                The Coffee Junkie
                <p className="text-xs text-gray-500">Brew, Create, Innovate</p>
              </span>
            </Link>
          </div>

          {/* Right side - Menu Items and Buttons */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu Button - Only visible on small screens */}
            <div className="block lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle header menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-xs">
                  <div className="flex flex-col flex-1">
                    <MenuItems isMobile={true} />
                    <div className="mt-auto pt-4">
                      <HeaderRightContent />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <MenuItems isMobile={false} />
            </div>

           <div className="hidden lg:block">
           <HeaderRightContent /> 
           </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
