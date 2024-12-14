import ProductFilter from '@/components/shopping-view/Filter'
import { DropdownMenu,DropdownMenuRadioGroup, DropdownMenuTrigger,DropdownMenuRadioItem,DropdownMenuContent} from '@/components/ui/dropdown-menu'
import { ArrowUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sortOptions } from '@/config'

function ShoppingListing() {

  const dispatch = useDispatch()

  //fetching list of products

  return (
    <div className='container mx-auto pt-24 px-4'>
      <div className='grid grid-cols-12 gap-4'>
        {/* Sidebar Filter - 3 columns on desktop, full width on mobile */}
        <div className='col-span-12 lg:col-span-3'>
          <ProductFilter/>

          <div className="bg-background w-full rounded-lg shadow-sm">
          <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <div className="flex items-center gap-3">
          <span className="text-muted-foreground">
              {productList?.length} Products
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
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
          <div className='col-span-12 lg:col-span-9'>
          {/* Product grid will go here */}
        </div>
          </div>
          </div>
          
        </div>
        
        
        
      </div>
  )
}

export default ShoppingListing
