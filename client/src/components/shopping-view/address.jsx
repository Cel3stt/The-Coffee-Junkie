import React, { useEffect, useState } from "react";

import AddressCard from "./Address-Card";
import CommonForm from "../common/Form";
import { addressFormControls } from "@/config";
import { Eclipse, UserIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addNewAddress,
  deleteAddress,
  editaAddress,
  fetchAllAddress,
} from "@/store/shop/address-slice";
import { useToast } from "@/hooks/use-toast";

const initialAddressFormData = {
  address: "",
  city: "",
  postalCode: "",
  phone: "",
  notes: "",
};
function Address() {
  const [formData, setFormData] = useState(initialAddressFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.shopAddress);
  const {toast} = useToast()

  function handleManageAddress(event) {
    event.preventDefault();

    if (addressList.length >= 3 && currentEditedId === null) {
      setFormData(initialAddressFormData);
      toast({
        title: 'Maximum Address Limit Reached',
        description: 'You can only save up to 3 addresses. Delete an existing address to add a new one.',
        variant: 'destructive'
  
      })
  
      return;
    }
    

    currentEditedId !== null
      ? dispatch(
          editaAddress({
            userId: user?.id,
            addressId: currentEditedId,
            formData,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllAddress(user?.id));
            setCurrentEditedId(null);
            setFormData(initialAddressFormData);
            toast({
              title: 'Address Updated Successfully'
            })
          }
        })
      : dispatch(
          addNewAddress({
            ...formData,
            userId: user?.id,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllAddress(user?.id));
            setFormData(initialAddressFormData);
            toast({
              title: 'Address Added Successfully',
              variant: 'success'
            })
          }
        });
  }

  function handleDeleteAddress(getCurrentAddress) {
   
    dispatch(
      deleteAddress({ userId: user?.id, addressId: getCurrentAddress._id })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllAddress(user?.id));
        toast({
          title: 'Address Deleted Successfully'
        })
      }
    });
  }

  function handleEditAddress(getCurrentAddress) {
    console.log(getCurrentAddress);
    setCurrentEditedId(getCurrentAddress?._id);
    setFormData({
      ...formData,
      address: getCurrentAddress?.address,
      city: getCurrentAddress?.city,
      postalCode: getCurrentAddress?.postalCode,
      phone: getCurrentAddress?.phone,
      notes: getCurrentAddress?.notes,
    });
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }

  useEffect(() => {
    dispatch(fetchAllAddress(user?.id));
  }, [dispatch]);

  console.log(addressList, "addressList");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Address Form */}
      <div className="flex-1 px-6 py-10 border-r border-gray-300">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">
            {currentEditedId !== null ? "Edit Address" : "Add New Address"}
          </h2>
          <p className="text-muted-foreground mb-8">
            This is how others will see you on the site.
          </p>

          <CommonForm
            className="space-y-8 p-4 bg-white rounded-lg"
            formControls={addressFormControls}
            formData={formData}
            setFormData={setFormData}
            buttonText={currentEditedId !== null ? "Save" : "Submit"}
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
      <div className="w-full lg:w-1/4 flex flex-col gap-4">
        {addressList && addressList.length > 0
          ? addressList.map((singleAddressItem) => (
              <AddressCard
                key={singleAddressItem.id}
                addressInfo={singleAddressItem}
                handleDeleteAddress={handleDeleteAddress}
                handleEditAddress={handleEditAddress}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Address;
