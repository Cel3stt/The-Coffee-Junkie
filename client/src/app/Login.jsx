import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from "axios"
import React from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/auth/adminlogin', values)
    .then(res => 
    {
      navigate('/dashboard')
    }
    )
    .catch(err => console.log(err))
  }
  return (
    <form onSubmit={handleSubmit}>
  <div className="client/src/app/Login.jsx flex h-screen w-full items-center justify-center px-4 border-0">
    <Card className="mx-auto max-w-sm border-0 shadow-none">
    <CardHeader>
      <CardTitle className=" text-left text-2xl">Login</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className=" text-left grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" 
          type="email" 
          placeholder="m@example.com" 
          onChange = {(e) => setValues({...values, email: e.target.value})}
          required />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link to="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" 
          type="password"
          onChange = {(e) => setValues({...values, password: e.target.value})}
          required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="#" className="underline">
          Sign up
        </Link>
      </div>
    </CardContent>
  </Card>
  </div>
  </form>
  )
}

export default Login

