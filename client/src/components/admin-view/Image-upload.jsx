import React, { useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
}) {
  const inputRef = useRef(null);
  function handleImageFileChange(event) {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  console.log(imageFile);

  async function uploadImageToCloudinary() {
    setImageLoadingState(true)
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:3000/api/admin/addProducts/upload-image",
      data
    );
    console.log(response, "response");
    if (response?.data?.success) {
        setUploadedImageUrl(response.data.result.url);
        setImageLoadingState(false)
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);


  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="mb-2 text-lg font-semibold">Product Image</h2>
      <p className="mb-4 text-sm text-gray-500">
        Drag & drop or click to upload image
      </p>

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8"
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />

        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2"></UploadCloudIcon>
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : (
          <div className="flex items-center justify-between w-full gap-4 px-4">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 text-primary mr-2" />
              <p className="text-sm font-medium">{imageFile.name}</p>
            </div>

            <Button variant="ghost" size="icon" onClick={handleRemoveImage}>
              <XIcon className="w-5 h-5" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
      <p className="mt-3 text-sm text-gray-500">Supported formats: JPEG, PNG</p>
    </div>
  );
}

export default ProductImageUpload;
