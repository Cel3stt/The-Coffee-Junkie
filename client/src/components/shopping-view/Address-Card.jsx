import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from '../ui/label'

function AddressCard({addressInfo}) {
    return (
        <Card className="mb-4">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Address:</span>
                <Label className="text-sm">{addressInfo?.address}</Label>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">City:</span>
                <Label className="text-sm">{addressInfo?.city}</Label>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Postal Code:</span>
                <Label className="text-sm">{addressInfo?.postalCode}</Label>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Phone:</span>
                <Label className="text-sm">{addressInfo?.phone}</Label>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Notes:</span>
                <Label className="text-sm">{addressInfo?.notes}</Label>
              </div>
             
              <div className="flex justify-between mt-4">
                <Button
                  variant="secondary"
                  size="sm"
                //   onClick={() => onEdit(address)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                //   onClick={() => onDelete(address)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )
}

export default AddressCard
