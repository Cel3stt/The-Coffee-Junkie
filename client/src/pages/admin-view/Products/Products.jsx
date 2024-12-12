import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Image, MoreHorizontal  } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Badge } from '@/components/ui/badge'
  import {
    File,
    Home,
    LineChart,
    ListFilter,
  
   
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
  } from "lucide-react"


  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
 
  import { Input } from "@/components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

const Products = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      //---------replace with the actual API----------------
      const response = await fetch ('/api/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProduct()
  }, [])

const addNewProduct = (newProduct) => {
  setProducts([...products, newProduct])
}

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>

         {/*==========================HEADING============================= */}
        <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>

        {/*==========================SEARCH && FILTER ============================= */}
        <div className="flex gap-3 items-center justify-end">
   
            
   <Input
     type="search"
     placeholder="Search Products..."
     className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
   />

    <DropdownMenu>
        
         <DropdownMenuContent align="end">
           <DropdownMenuLabel>Filter by</DropdownMenuLabel>
           <DropdownMenuSeparator />
           <DropdownMenuCheckboxItem checked>
             Newest
           </DropdownMenuCheckboxItem>
           <DropdownMenuCheckboxItem>
             Oldest
           </DropdownMenuCheckboxItem>
         </DropdownMenuContent>
   </DropdownMenu>
 
</div>


        </div>



      <Tabs defaultValue="all">

                  <div className="flex items-center">
                
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="draft">Draft</TabsTrigger>
                      <TabsTrigger value="archived" className="hidden sm:flex">
                        Archived
                      </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
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
                            Active
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            Archived
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button size="sm" variant="outline" className="h-8 gap-1">
                        <File className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Export
                        </span>
                      </Button>

                    

                      <Link to='/admin/addProducts'>
                      <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Add Product
                        </span>
                      </Button>
                      </Link>

                    </div>
                  </div>
                  <TabsContent value="all">
                    <Card x-chunk="dashboard-06-chunk-0" className='pt-3'>
                      
                      <CardContent className='pt-2'>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                              </TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead className="hidden md:table-cell">
                                Price
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Total Sales
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Created at
                              </TableHead>
                              <TableHead>
                                <span className="sr-only">Actions</span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          {product.image && (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              width="64"
                            />
                          )}
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>{product.stock_quantity}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                        </Table>
                      </CardContent>
                      <CardFooter>
                        <div className="text-xs text-muted-foreground">
                          Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                          products
                        </div>
                      </CardFooter>
                    </Card>
                  </TabsContent>
      </Tabs>
      </main>
    </div>
  )
}

export default Products
