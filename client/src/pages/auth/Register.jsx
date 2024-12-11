import { Link, useNavigate } from "react-router-dom"
import { registerFormControls } from "@/config"
import CommonForm from "@/components/common/Form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "@/store/auth-slice"
import { toast, useToast } from "@/hooks/use-toast"
import { Toast } from "@/components/ui/toast"

const initialState = {
  username: '',
  email: '',
  password: ''
}

function AuthRegister() {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const navigate =useNavigate()
  const {toast} = useToast()

  function onSubmit(event){
    event.preventDefault()
    dispatch(registerUser(formData)).then((data)=> {
      if(data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          
        })
        navigate('/auth/login')
      } else{
        toast({
          title: data?.payload?.message,
          variant: 'destructive',
          
        })
      }
    })
    // Handle form submission
    
  }
  console.log('Form submitted:', formData)

  return (
    <div className="flex h-screen w-full items-center justify-center px-4 border-0">
      <Card className="mx-auto max-w-sm border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-left text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CommonForm 
            formControls={registerFormControls}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            buttonText="Create Account"
          />
          
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthRegister

