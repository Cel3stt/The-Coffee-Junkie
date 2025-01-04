import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddressCard from "./Address-Card";
import CommonForm from "../common/Form";
import { addressFormControls } from "@/config";
import { Eclipse } from "lucide-react";

const initialAddressFormData = {
  address: "",
  city: "",
  postalCode: "",
  phone: "",
  notes: "",
};
function Address() {
  const [formData, setFormData] = useState(initialAddressFormData);

  function handleManageAddress(event) {
    event.preventDefault();
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Address Form */}
      <div className="flex-1 px-6 py-10  bg-gray-50 rounded-lg ">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Add New Address</h2>
          <p className="text-muted-foreground mb-8">
            This is how others will see you on the site.
          </p>

       
         <CommonForm
            className="space-y-8 p-4 bg-white rounded-lg"
            formControls={addressFormControls}
            formData={formData}
            setFormData={setFormData}
            buttonText="Add New Address"
            onSubmit={handleManageAddress}
            isBtnDisabled={!isFormValid()}
            inputClassName="custom-input-class"
            labelClassName="text-sm font-medium"
            buttonClassName="mt-5"
            spanClassName="text-gray-500"
          ></CommonForm>
         </div>
        </div>
   

      {/* Address Cards */}
      <div className="w-full lg:w-1/4">
        <AddressCard />
      </div>
    </div>
  );
}

export default Address;
