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
import { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOptions, sortOptions } from "@/config";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
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
import { createSearchParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import ProductDetails from "@/components/shopping-view/Product-Details";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { data } from "autoprefixer";
import { toast } from "@/hooks/use-toast";

function ShoppingListing() {
  const dispatch = useDispatch();
  const { productList, productDetails, isLoading } = useSelector(
    (state) => state.shopProducts
  );
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  // Add debounce to prevent too many API calls
  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(
        fetchAllFilteredProducts({
          filterParams: filters,
          sortParams: sort,
          searchQuery: query,
        })
      );
    }, 300),
    [filters, sort]
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  // Load filters from URL when component mounts
  useEffect(() => {
    const initialFilters = {};
    // Convert URL search params to filters object
    for (const [key, value] of searchParams.entries()) {
      initialFilters[key] = value.split(",");
    }
    if (Object.keys(initialFilters).length > 0) {
      setFilters(initialFilters);
    }
  }, []);

  const handleGetProductDetails = (productId) => {
    navigate(`/shop/product/${productId}`);
  };

  const generateBrandOptions = (products, selectedCategories) => {
    // Filter products by selected categories first if any
    let filteredProducts = products;
    if (selectedCategories && selectedCategories.length > 0) {
      filteredProducts = products.filter((product) =>
        selectedCategories.some(
          (category) =>
            product.category.toLowerCase().replace(/\s+/g, "") ===
            category.toLowerCase().replace(/\s+/g, "")
        )
      );
    }

    // Get unique brands from filtered products
    const uniqueBrands = [
      ...new Set(filteredProducts.map((product) => product.brand)),
    ];

    // Convert to filter option format
    return uniqueBrands
      .filter((brand) => brand) // Remove any null/undefined brands
      .map((brand) => ({
        id: brand.toLowerCase(),
        label: brand,
      }));
  };

  // Update brandFilterOptions when products or category filters change
  const brandFilterOptions = useMemo(
    () => generateBrandOptions(productList, filters.category),
    [productList, filters.category]
  );

  // Combine with other filter options
  const allFilterOptions = {
    ...filterOptions,
    brand: brandFilterOptions,
  };

  function handleSort(value) {
    setSort(value);
  }

  function handleFilter(getSectionId, getCurrentOption) {
    setFilters((prevFilters) => {
      const cpyFilters = { ...prevFilters };

      if (!cpyFilters[getSectionId]) {
        cpyFilters[getSectionId] = [getCurrentOption];
      } else {
        if (cpyFilters[getSectionId].includes(getCurrentOption)) {
          cpyFilters[getSectionId] = cpyFilters[getSectionId].filter(
            (option) => option !== getCurrentOption
          );
          if (cpyFilters[getSectionId].length === 0) {
            delete cpyFilters[getSectionId];
          }
        } else {
          cpyFilters[getSectionId] = [
            ...cpyFilters[getSectionId],
            getCurrentOption,
          ];
        }
      }

      // Save to sessionStorage
      sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
      return cpyFilters;
    });
  }

  function handleAddToCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if(data?.payload?.success){
        dispatch(fetchCartItems(user?.id))
        toast({
          title : 'Product is added to cart'
        })
      }
    });
  }

   // Optional: Function to get current filter value from URL
   function getFilterFromURL(filterKey) {
    const param = searchParams.get(filterKey);
    return param ? param.split(",") : [];
  }

  // Update URL when filters change
  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, values]) => {
        if (Array.isArray(values) && values.length > 0) {
          params.set(key, values.join(","));
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
    dispatch(
      fetchAllFilteredProducts({
        filterParams: filters,
        sortParams: sort,
        searchQuery: searchQuery,
      })
    );
  }, [dispatch, filters, sort]);

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    setSort("price-low-to-high");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    console.log("Current filters:", searchParams, filters);
    // Here you can add logic to filter your products based on the selected filters
  }, [filters]);

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQueryStrings = createSearchParams(filters);
      setSearchParams(new URLSearchParams(createQueryStrings));
    }
  }, [filters]);

 

  return (
    <main className="container mx-auto px-10 md:px-6 py-8 pt-32">
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Sidebar and Main Content Grid */}
        <div className="grid md:grid-cols-[240px_1fr] gap-4 md:gap-6 items-start">
          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <form className="grid gap-4">
              {/* Search Input */}
              <div className="space-y-2">
                <Label htmlFor="search">Search Product</Label>
                <Input
                  id="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              {/* Filter Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="filter">
                  <AccordionTrigger className="text-base">
                    Filter
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-4">
                      {Object.keys(allFilterOptions).map((keyItem) => (
                        <div key={keyItem}>
                          <h3 className="font-bold capitalize">{keyItem}</h3>
                          <div className="grid gap-2 mt-2">
                            {allFilterOptions[keyItem].map((option) => (
                              <Label
                                className="flex items-center gap-2"
                                key={option.id}
                              >
                                <Checkbox
                                  checked={
                                    filters[keyItem]?.includes(option.id) ||
                                    false
                                  }
                                  onCheckedChange={() =>
                                    handleFilter(keyItem, option.id)
                                  }
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

          {/* Main Content Area */}
          <div className="flex flex-col gap-6">
            {/* Header with Sort */}
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
                    <DropdownMenuRadioGroup
                      value={sort}
                      onValueChange={handleSort}
                    >
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <div>Loading...</div>
              ) : productList?.length > 0 ? (
                productList.map((product) => (
                  <ShoppingProductTile
                    key={product.id}
                    product={product}
                    handleGetProductDetails={handleGetProductDetails}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <div>No products found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShoppingListing;
