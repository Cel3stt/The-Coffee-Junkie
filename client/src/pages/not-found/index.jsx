import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh_-_theme(safeArea))_] text-center space-y-4">
    <div className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        Oops! Page not found.
      </h1>
      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        The page you are looking for does not exist. It might have been moved or
        deleted.
      </p>
    </div>
    <Link
      to='/shop/home'
      className="inline-flex h-10 items-center rounded-md border  border-gray-200
       bg-white px-8 text-sm font-medium shadow-sm transition-colors
        hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1
         focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800
          dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
      
    >
      Go back to home
    </Link>
  </div>;
}

export default NotFound;
