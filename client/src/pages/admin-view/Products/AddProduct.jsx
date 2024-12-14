import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlaskRound, Image } from "lucide-react";

import { ArrowLeft, Upload } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";
import axios from "axios";
import ProductImageUpload from "@/components/admin-view/Image-upload";
import { addProductFormControls } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, fetchAllProducts } from "@/store/admin/products-slice";
import { useToast } from "@/hooks/use-toast";

const initialFormData = {
  image: '',
  title: '',
  description: '',
  category: '',
  brand: '',
  price: '',
  sku: '',
  color: '',
  lowStockThreshold: '',
  salePrice: '',
  totalStock: '',
  features: [],
  warrantyPeriod: '',
  status: 'draft',
  averageReview: 0
};

function AddProduct() {
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);

  const {productList} = useSelector(state => state.adminProducts)
  const dispatch = useDispatch()
  const {toast} = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function onSubmit(event) {
    event.preventDefault()
    const processedFormData = {
      ...formData,
      features: Array.isArray(formData.features) ? formData.features : [],
    };
    dispatch(addNewProduct(processedFormData)).then((data) => {
      console.log(data);
      if(data?.payload?.success){
        dispatch(fetchAllProducts())
        setImageFile(null) 
        setFormData(initialFormData)
        toast({
          title: "Product Added Successfully!"
        })
      }
    }) 
  }
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(productList, uploadedImageUrl, 'productList');

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mb-6 flex items-center gap-2">
          <Link to="/admin/products">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <h1 className="text-2xl font-bold">Create New Products</h1>
        </div>
  

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Product Details */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Product Details</h2>
              <div className="space-y-4">
                {addProductFormControls.map((controlItem) => (
                  <div key={controlItem.name}>
                    <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
                    {controlItem.componentType === 'input' && (
                      <Input
                        type={controlItem.type}
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        value={formData[controlItem.name]}
                        onChange={handleChange}
                      />
                    )}
                    {controlItem.componentType === 'select' && (
                      <Select
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, [controlItem.name]: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={controlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {controlItem.options.map((opt) => (
                            <SelectItem key={opt.id} value={opt.id}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    {controlItem.componentType === 'textarea' && (
                      <Textarea
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        value={formData[controlItem.name]}
                        onChange={handleChange}
                        className="min-h-[100px]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Product Image */}
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoadingState={setImageLoadingState}
              imageLoadingState = {imageLoadingState}
            />

            {/* Features */}
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Features</h2>
              <div className="space-y-4">
                {/* {formData.features.map((feature, index) => (
              <Input
                key={index}
                placeholder={`Feature ${index + 1}`}
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
              />
            ))} */}
                {/* <Button variant="outline" onClick={addFeature}>
              Add Feature
            </Button> */}
                <Button variant="outline">Add Feature</Button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">
                Additional Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="warranty">Warranty Period</Label>
                  <Input
                    id="warranty"
                    placeholder="Enter Warranty Details"
                    value={formData.warrantyPeriod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        warrantyPeriod: e.target.value,
                      })
                    }
                  />
                  {/* {errors.warrantyPeriod && <p className='text-red-500 text-sm mt-1'>{errors.warrantyPeriod}</p>} */}
                </div>
                <div>
                  <Label htmlFor="brand">Brand/Manufacturer</Label>
                  <Input
                    id="brand"
                    placeholder="Enter the Brand"
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                  />
                  {/* {errors.brand && <p className='text-red-500 text-sm mt-1'>{errors.brand}</p>} */}
                </div>
              </div>
            </div>

            <div className="mt-2 flex justify-end gap-4">
              <Button variant="outline">Discard</Button>
              <Button onClick={onSubmit}>Save Product</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddProduct;
