import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState, Fragment } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  deleteProduct,
  editProduct,
  addNewProduct,
} from "@/store/admin/products-slice";
import CommonForm from "@/components/common/Form";
import ProductImageUpload from "@/components/admin-view/Image-upload";
import AdminProductTile from "@/components/admin-view/Product-tile";
import { useToast } from "@/hooks/use-toast";
import { addProductFormControls } from "@/config";



  import { AlertDialog,  AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle, } from "@/components/ui/alert-dialog";

    
const initialFormData = {
  image: "",
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  sku: "",
  color: "",
  salePrice: "",
  totalStock: "",
  features: [],
  warrantyPeriod: "",
  status: "draft",
  averageReview: 0,
};

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();


  
  function onSubmit(event) {
    event.preventDefault();

    currentEditedId !== null
      ? dispatch(
          editProduct({
            id: currentEditedId,
            formData,
          })
        ).then((data) => {
          console.log(data, "edit");

          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            setFormData(initialFormData);
            setOpenCreateProductsDialog(false);
            setCurrentEditedId(null);
          }
        })
      : dispatch(
          addNewProduct({
            ...formData,
            image: uploadedImageUrl,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            setOpenCreateProductsDialog(false);
            setImageFile(null);
            setFormData(initialFormData);
            toast({
              title: "Product add successfully",
            });
          }
        });
  }


  // function isFormValid() {
  //   return Object.keys(formData)
  //     .filter((currentKey) => currentKey !== "averageReview")
  //     .map((key) => formData[key] !== "")
  //     .every((item) => item);
  // }

  function handleDelete(getCurrentProductId) {
    setProductToDelete(getCurrentProductId);
    setShowDeleteAlert(true);
  }

  function confirmDelete() {
    dispatch(deleteProduct(productToDelete)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        toast({
          title: "Product deleted successfully",
       
        });
      }
    });
    setShowDeleteAlert(false);
    setProductToDelete(null);
  }

  // function isFormValid() {
  //   return Object.keys(formData)
  //     .map((key) => formData[key] !== "") 
  //     .every((item) => item);
  // }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

 console.log(formData, 'productList')

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Products</h1>
          <Button onClick={() => setOpenCreateProductsDialog(true)}>
            Add New Product
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Sale Price</TableHead>
                  <TableHead>Total Sales</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productList && productList.length > 0
                  ? productList.map((productItem) => (
                      <AdminProductTile
                        key={productItem._id}
                        setFormData={setFormData}
                        setOpenCreateProductsDialog={
                          setOpenCreateProductsDialog
                        }
                        setCurrentEditedId={setCurrentEditedId}
                        product={productItem}
                        handleDelete={handleDelete}
                      />
                    ))
                  : null}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </main>

      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          setCurrentEditedId(null)
          setFormData(initialFormData)

        }}
        
      >
        <SheetContent 
          className="w-full sm:max-w-[600px] overflow-y-auto"
          aria-describedby="sheet-description"
        >
          <SheetHeader>
            <SheetTitle>
              {
                currentEditedId!== null ?
                "Edit Product" : 'Add Product'
              }
            </SheetTitle>
            <SheetDescription id="sheet-description">
              Fill in the details to {currentEditedId ? 'edit' : 'add'} a product.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6">
            {/* Product Image Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product Image</h3>
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                imageLoadingState={imageLoadingState}
                currentEditedId={currentEditedId}
                isEditMode={currentEditedId !== null}
              />
              <div className="py-6">
                <CommonForm
                  onSubmit={onSubmit}
                  formData={formData}
                  setFormData={setFormData}
                  buttonText={currentEditedId !== null ? "Edit" : "Add"}
                  formControls={addProductFormControls}
                  // isBtnDisabled={!isFormValid()}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert} c>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this product?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AdminProducts;
