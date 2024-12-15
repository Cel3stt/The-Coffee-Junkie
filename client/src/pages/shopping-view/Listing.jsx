import ProductFilter from "@/components/shopping-view/Filter";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOptions, sortOptions } from "@/config";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/Product-tile";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { createSearchParams } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";

function ShoppingListing() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.shopProducts);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Load filters from URL when component mounts
  useEffect(() => {
    const initialFilters = {};
    // Convert URL search params to filters object
    for (const [key, value] of searchParams.entries()) {
      initialFilters[key] = value.split(',');
    }
    if (Object.keys(initialFilters).length > 0) {
      setFilters(initialFilters);
    }
  }, []);

  // Update URL when filters change
  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, values]) => {
        if (Array.isArray(values) && values.length > 0) {
          params.set(key, values.join(','));
        }
      });
      setSearchParams(params);
    } else {
      // Clear URL params if no filters
      setSearchParams({});
    }
  }, [filters, setSearchParams]);

  //fetching list of products
  useEffect(() => {
    dispatch(fetchAllFilteredProducts());
  }, [dispatch]);

  console.log(productList, "ProductList");

  const generateBrandOptions = (products) => {
    // Get unique brands
    const uniqueBrands = [...new Set(products.map((product) => product.brand))];

    // Convert to filter option format
    return uniqueBrands.map((brand) => ({
      id: brand.toLowerCase(), // lowercase for consistency
      label: brand, // original brand name for display
    }));
  };

  // Use it in your component
  const brandFilterOptions = generateBrandOptions(productList);

  // Add it to filterOptions
  const allFilterOptions = {
    ...filterOptions,
    brand: brandFilterOptions,
  };


  function handleSort(value){
    setSort(value)
  } 

  
  function handleFilter(getSectionId, getCurrentOption) {
    setFilters(prevFilters => {
      const cpyFilters = { ...prevFilters };
      
      if (!cpyFilters[getSectionId]) {
        cpyFilters[getSectionId] = [getCurrentOption];
      } else {
        if (cpyFilters[getSectionId].includes(getCurrentOption)) {
          cpyFilters[getSectionId] = cpyFilters[getSectionId].filter(
            option => option !== getCurrentOption
          );
          if (cpyFilters[getSectionId].length === 0) {
            delete cpyFilters[getSectionId];
          }
        } else {
          cpyFilters[getSectionId] = [...cpyFilters[getSectionId], getCurrentOption];
        }
      }
      
      // Save to sessionStorage
      sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
      return cpyFilters;
    });
  }

  useEffect(() => {
    setSort('price-low-to-high')
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {})
  }, [])

  useEffect(() => {
    console.log('Current filters:', searchParams,filters);
    // Here you can add logic to filter your products based on the selected filters
  }, [filters]);  

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const queryString = createSearchParams(filters);
      setSearchParams(queryString);
    }
  }, [filters]);

  // Optional: Function to get current filter value from URL
  function getFilterFromURL(filterKey) {
    const param = searchParams.get(filterKey);
    return param ? param.split(',') : [];
  }

  
  return (
    <main className="container mx-auto px-10 md:px-6 py-8 pt-32">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="grid md:grid-cols-[240px_1fr] gap-4 md:gap-6 items-start">
          <div className="flex flex-col gap-4">
            <form className="grid gap-4 ">
              <div className="space-y-2">
                <Label htmlFor="search">Search Product</Label>
                <Input id="search" placeholder="Search data..." />
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="filter">
                  <AccordionTrigger className="text-base">
                    Filter
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-4">
                      {Object.keys(allFilterOptions).map((keyItem) => (
                        <div key={keyItem}>
                          <h3 className="font-bold">{keyItem}</h3>
                          <div className="grid gap-2 mt-2">
                            {allFilterOptions[keyItem].map((option) => (
                              <Label
                                className="flex items-center gap-2"
                                key={option.id}
                              >
                                <Checkbox 
                                  checked={
                                    filters[keyItem]?.includes(option.id) || false
                                  }
                                  onCheckedChange={() => handleFilter(keyItem, option.id)} 
                                />
                                {option.label}
                              </Label> 
                            ))}
                          </div>
                          <Separator className="my-4" />
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </form>
          </div>
          <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
              <div className="grid gap-1">
                <h1 className="text-2xl font-bold tracking-tight">
                  Data Table
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Filter, sort, and search the data.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-500 dark:text-gray-400">
                  {productList?.length} Products
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 shrink-0"
                    >
                      <ArrowUpDownIcon className="h-4 w-4" />
                      <span>Sort by</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                      {sortOptions.map((sortItem) => (
                        <DropdownMenuRadioItem
                          value={sortItem.id}
                          key={sortItem.id}
                        >
                          {sortItem.label}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {/* Main Content Area - 9 columns on desktop, full width on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {productList && productList.length > 0
                ? productList.map((productItem) => (
                    <ShoppingProductTile
                      key={productItem.id}
                      // handleGetProductDetails={handleGetProductDetails}
                      product={productItem}
                      // handleAddtoCart={handleAddtoCart}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShoppingListing;
