import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        processing:
        "border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
        shipped:
        "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-100",
        delivered:
        "border-transparent bg-green-100 text-green-800 hover:bg-green-100",
        active:
        "border-transparent bg-green-50 text-green-700 hover:bg-green-50",
        draft:
        "border-transparent bg-gray-100 text-gray-800 hover:bg-gray-100",
        archive:
        "border-transparent bg-orange-50 text-orange-700 hover:bg-orange-50",
        pending:
        "border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
        approved:
        "border-transparent bg-green-100 text-green-800 hover:bg-green-100",
        rejected:
        "border-transparent bg-red-100 text-red-800 hover:bg-red-100",
        completed:
        "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-100",

      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const badgeLabels = {
  default: "Default",
  secondary: "Secondary",
  destructive: "Destructive",
  outline: "Outline",
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  active: "Active",
  draft: "Draft",
  archive: "Archive",
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
  completed: "Completed",
};


function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {badgeLabels[variant] || "Unknown"}
    </div>
  );
}
export { Badge, badgeVariants }
