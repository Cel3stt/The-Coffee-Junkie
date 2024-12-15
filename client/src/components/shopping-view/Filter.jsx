import { filterOptions } from "@/config";
import React, { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Accordion,AccordionItem, AccordionTrigger, AccordionContent} from "../ui/accordion";
function ProductFilter() {
  return (
  

<div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-8">
<Accordion type="single" collapsible className="w-full" defaultValue="filters">
  <AccordionItem value="filters">
    <AccordionTrigger className="text-base">Filters</AccordionTrigger>
    <AccordionContent>
      <div className="grid gap-4">
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <div className="grid gap-2">
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox />
              Cozy Blanket
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox />
              Autumn Mug
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox  />
              Fall Fragrance Candle
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox />
              Autumn Leaves Wall Art
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox />
              Fall Harvest Wreath
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox />
              Spiced Apple Cider Syrup
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox/>
              Fall Foliage Table Runner
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox />
              Fall Fashion Hat
            </Label>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div />
        </div>
        <div>
          <h3 className="font-medium mb-2">Sort By</h3>
          <RadioGroup
            value={selectedFilters.sortBy}
            onValueChange={(value) => handleFilterChange("sortBy", value)}
          >
            <div className="grid gap-2">
              <Label className="flex items-center gap-2 font-normal">
                <RadioGroupItem value="featured" />
                Featured
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <RadioGroupItem value="lowToHigh" />
                Price: Low to High
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <RadioGroupItem value="highToLow" />
                Price: High to Low
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
  );
}

export default ProductFilter;
