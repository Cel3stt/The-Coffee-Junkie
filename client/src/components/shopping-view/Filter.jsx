import { filterOptions } from "@/config";
import React, { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter() {
  return (
    <div className="bg-white">
      <div className="p-4 border-b">
        <h2 className="text-lg text-red-300">Filters</h2>
      </div>
      <div className="py-4">
        {Object.keys(filterOptions).map((keyItem) => (
          <div key={keyItem}>
            <h3>{keyItem}</h3>
            <div className="grid gap-2 mt-2">
              {filterOptions[keyItem].map((option) => (
                <Label className="flex items-center gap-2" key={option}>
                  <Checkbox />
                  {option.label}
                </Label>
              ))}
            </div>
            <Separator className='my-4'/>
          </div>
        ))}
      
      </div>
    </div>
  );
}

export default ProductFilter;
