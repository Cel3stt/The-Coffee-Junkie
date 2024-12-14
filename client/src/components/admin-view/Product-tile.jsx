import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  const productStatus = product?.status || 'draft';

  const getStatusStyles = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <TableRow key={product?._id}>
      <TableCell className="hidden w-[100px] sm:table-cell">
        
          <img
            src={product.image}
            alt={product?.title || 'Product'}
            className="h-16 w-16 rounded-md object-cover"
            
          />
       
      </TableCell>
      <TableCell>{product?.title || 'Untitled Product'}</TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded-full text-xs ${getStatusStyles(productStatus)}`}
        >
          {productStatus}
        </span>
      </TableCell>
      <TableCell className="hidden md:table-cell">${product?.price || 0}</TableCell>
      <TableCell className="hidden md:table-cell">
        {product?.salePrice ? `$${product.salePrice}` : "-"}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {product?.totalSales || 0}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {product?.createdAt ? new Date(product.createdAt).toLocaleDateString() : '-'}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                setOpenCreateProductsDialog(true);
                setCurrentEditedId(product?._id);
                setFormData(product);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDelete(product?._id)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
      
    </TableRow>
  );
}

export default AdminProductTile;
