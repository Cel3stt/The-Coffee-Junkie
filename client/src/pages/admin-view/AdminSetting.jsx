import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Avatar,AvatarImage,AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'

function NavLink({ children, active, onClick }) {
    return (
      <button
        onClick={onClick}
        className={`block w-full text-left px-2 py-1 text-sm rounded-md hover:bg-accent ${
          active ? "text-primary font-medium" : "text-muted-foreground"
        }`}
      >
        {children}
      </button>
    )
  }
  
  
const AdminAccountSettings = () => {
    const [activeTab, setActiveTab] = useState('basic-info')
    const [fullName, setFullName] = useState('John Doe')
    const [email, setEmail] = useState('john.doe@example.com')
    const [phone, setPhone] = useState('+1 (555) 123-4567')
    const [username, setUsername] = useState('johndoe')
    const [twoFAEnabled, setTwoFAEnabled] = useState(false)
    const [emailNotifications, setEmailNotifications] = useState(true)
    const [smsNotifications, setSmsNotifications] = useState(false)

    

    const renderContent = () => {
        switch(activeTab) {
          case 'basic-info':
            return (
              <section className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold">Basic Information</h2>
                  <p className="text-sm text-muted-foreground">Manage your personal information</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="Owner" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button>Change Picture</Button>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid gap-1.5">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="max-w-xl"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="max-w-xl"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="max-w-xl"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="max-w-xl"
                      />
                    </div>
                  </div>
                </div>
                <Button>Save Changes</Button>
              </section>
            )
          case 'security':
            return (
              <section className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold">Account Status & Security</h2>
                  <p className="text-sm text-muted-foreground">Manage your account security and access</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Account Status</p>
                      <p className="text-sm text-muted-foreground">Current status of your account</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div>
                    <p className="font-semibold">Last Login</p>
                    <p className="text-sm text-muted-foreground">2023-06-15 14:30:00 UTC</p>
                  </div>
                  <div>
                    <p className="font-semibold">Login History</p>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>2023-06-15 14:30:00 UTC - 192.168.1.1 - New York, USA</li>
                      <li>2023-06-14 09:15:00 UTC - 192.168.1.2 - New York, USA</li>
                      <li>2023-06-13 18:45:00 UTC - 192.168.1.3 - New York, USA</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-1.5">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="max-w-xl" />
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="max-w-xl" />
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" className="max-w-xl" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="2fa"
                      checked={twoFAEnabled}
                      onCheckedChange={setTwoFAEnabled}
                    />
                    <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                  </div>
                </div>
                <Button>Update Security Settings</Button>
              </section>
            )
          case 'roles':
            return (
              <section className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold">Roles & Permissions</h2>
                  <p className="text-sm text-muted-foreground">Manage your access and notification preferences</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Access Level</p>
                    <p className="text-sm text-muted-foreground">Full Admin Access</p>
                  </div>
                  <div>
                    <p className="font-semibold">Permissions</p>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>Manage Employees</li>
                      <li>View All Logs</li>
                      <li>Access Order Details</li>
                      <li>Modify Platform Settings</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Notification Preferences</p>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="email-notifications"
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                      />
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="sms-notifications"
                        checked={smsNotifications}
                        onCheckedChange={setSmsNotifications}
                      />
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    </div>
                  </div>
                </div>
                <Button>Save Preferences</Button>
              </section>
            )
          default:
            return null
        }
      }
  return (
    <div className="flex min-h-screen bg-background">
    {/* Sidebar */}
    <div className="w-64 p-6 border-r border-border">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <nav className="space-y-2">
        <NavLink active={activeTab === 'basic-info'} onClick={() => setActiveTab('basic-info')}>Basic Information</NavLink>
        <NavLink active={activeTab === 'security'} onClick={() => setActiveTab('security')}>Account & Security</NavLink>
        <NavLink active={activeTab === 'roles'} onClick={() => setActiveTab('roles')}>Roles & Permissions</NavLink>
      </nav>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-6">
      <div className="max-w-3xl space-y-6">
        {renderContent()}
      </div>
    </div>
  </div>
  )
}

export default AdminAccountSettings
