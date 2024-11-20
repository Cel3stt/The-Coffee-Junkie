import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Bell } from 'lucide-react'

const notifications = [
    {
        id: 1,
        message: 'Gemilai CRM3145 is nearly out of stock',
        time: '1 hour ago',
        type: 'out-of-stock'
    },
    {
        id: 2,
        message: "New Order: 3 units, Espresso Machine CRM3005G",
        time: "1 hour ago",
        type: "new-order"
      },
      {
        id: 3,
        message: "Order Received: Gemilai CRM3145 successfully delivered.",
        time: "2 hours ago",
        type: "received"
      }
]

const Notifications = () => {
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8 relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-destructive text-xs text-destructive-foreground flex items-center justify-center">
                {notifications.length}
            </span>
            </Button>
        </PopoverTrigger>
        <PopoverContent className='w-80 p-0 mr-6 align-end'>
            <Card className ='border-0 px-5'>
            <CardHeader className="flex  gap-4 px-2 flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-xl font-semibold">Notifications</CardTitle>
            <Button variant="ghost" className="h-auto p-0 text-xs text-muted-foreground hover:text-primary">
              Mark all as read
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 px-2">
            <div className="text-sm text-muted-foreground pb-4">
              You have {notifications.length} unread messages.
            </div>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="grid grid-cols-[25px_1fr] items-start pb-2 last:mb-0 last:pb-0"
              >
                <span
                  className={`flex h-2 w-2 translate-y-1.5 rounded-full  ${
                    notification.type === "out-of-stock"
                      ? "bg-destructive"
                      : notification.type === "new-order"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                />
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.message}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
            </Card>
        </PopoverContent>
    </Popover>
  )
}

export default Notifications
