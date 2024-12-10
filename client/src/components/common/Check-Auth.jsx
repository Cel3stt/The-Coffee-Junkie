import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
    const location = useLocation();
  
    const isAuthPage = location.pathname.includes("/login") || location.pathname.includes("/register");
    const isAdminPage = location.pathname.includes("admin");
    const isShopPage = location.pathname.includes("shop");
  
    // Allow unauthenticated users to access login/register
    if (!isAuthenticated && isAuthPage) {
      return <>{children}</>;
    }
  
    // Redirect authenticated users away from auth pages
    if (isAuthenticated && isAuthPage) {
      return user?.role === "admin" ? <Navigate to="/admin/dashboard" /> : <Navigate to="/shop/home" />;
    }
  
    // Redirect unauthenticated users from admin/shop pages
    if (!isAuthenticated && (isAdminPage || isShopPage)) {
      return <Navigate to="/auth/login" />;
    }
  
    // Redirect non-admins from admin pages
    if (isAuthenticated && user?.role !== "admin" && isAdminPage) {
      return <Navigate to="/*" />;
    }
  
    // Redirect admins from shop pages
    if (isAuthenticated && user?.role === "admin" && isShopPage) {
      return <Navigate to="/admin/dashboard" />;
    }
  
    // Allow access if no conditions are met
    return <>{children}</>;
  }
  

export default CheckAuth;
