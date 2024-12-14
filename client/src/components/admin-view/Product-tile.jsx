import { Button } from "@/components/ui/button";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Image } from "lucide-react";

function ProductTile({ product, setFormData, setOpenCreateProductsDialog, setCurrentEditedId, handleDelete }) {
  return (
    <TableRow key={product._id}>
      <TableCell className="hidden w-[100px] sm:table-cell">
        {product?.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-16 w-16 rounded-md object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/64x64?text=No+Image';
              console.log('Image failed to load:', product.image);
            }}
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-md border bg-gray-100">
            <Image className="h-8 w-8 text-gray-400" />
          </div>
        )}
      </TableCell>
      <TableCell>{product.title}</TableCell>
      <TableCell>
        <span className={`px-2 py-1 rounded-full text-xs ${
          product.status === 'active' ? 'bg-green-100 text-green-800' : 
          product.status === 'draft' ? 'bg-gray-100 text-gray-800' : 
          'bg-yellow-100 text-yellow-800'
        }`}>
          {product.status}
        </span>
      </TableCell>
      <TableCell className="hidden md:table-cell">${product.price}</TableCell>
      <TableCell className="hidden md:table-cell">
        {product.salePrice ? `$${product.salePrice}` : '-'}
      </TableCell>
      <TableCell className="hidden md:table-cell">{product.totalSales || 0}</TableCell>
      <TableCell className="hidden md:table-cell">
        {new Date(product.createdAt).toLocaleDateString()}
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
            <DropdownMenuItem onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product._id);
              setFormData(product);
            }}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDelete(product._id)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

export default ProductTile;
