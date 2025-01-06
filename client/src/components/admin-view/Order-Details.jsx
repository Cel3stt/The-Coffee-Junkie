import React from 'react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText } from 'lucide-react'
import { useEffect } from 'react'

function AdminOrderDetailsView() {



  return (
    <DialogContent className="sm:max-w-[600px]">
        <div className="grid gap-6">
            <div className="grid gap-2">
                <div className="flex items-center justify-between">
                    <p>Dialog</p>
                </div>
            </div>
        </div>
    </DialogContent>
  )
}

export default AdminOrderDetailsView
