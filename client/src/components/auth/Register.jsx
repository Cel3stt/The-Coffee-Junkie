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



function AuthRegister() {
    return (
        <form>
      <div className="client/src/app/Login.jsx flex h-screen w-full items-center justify-center px-4 border-0">
        <Card className="mx-auto max-w-sm border-0 shadow-none">
          <CardHeader>
            <CardTitle className=" text-left text-2xl">Sign Up</CardTitle>
            <CardDescription>
            Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
                 {/* Fullname Field */}
              <div className="text-left grid gap-2">
                <Label htmlFor="email">Fullname</Label>
                <Input
                  id="fullname"
                  type="fullname"
                  placeholder="Juan Dela Cruz"
                 
                  
                  
                />
               
              </div>

              {/* Email Field */}
              <div className="text-left grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                 
                  
                  
                />
               
              </div>

                {/* Password Field */}
                <div className="grid gap-2 relative">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div className="relative">
    <Input
      id="password"
      // type={showPassword ? "text" : "password"} // Toggle input type
      // value={values.password}
      // onChange={(e) => {
      //   const newPassword = e.target.value;
      //   setValues({ ...values, password: newPassword });

      //   // Clear error if user starts typing
      //   if (errors.server) {
      //     setErrors((prev) => ({ ...prev, password: false, server: "" }));
      //   }
      // }}
      // className={`${
      //   errors.password ? "border-red-600" : "border-gray-300"
      // } mt-1 block w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-indigo-200`}
      // style={{ height: "40px" }} // Explicitly set height for input
      // required
    />
    <button
      type="button"
      // onClick={() => setShowPassword(!showPassword)}
      className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
    >
      {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
    </button>
  </div>
               


                 {/* Display password error */}
                 {/* {errors.password && (
                    <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                  )} */}

                 {/* Error Message */}
              {/* {errors.server && (
                <div className="flex items-center gap-4 mt-2 p-4 bg-red-500 text-white rounded-lg">
                  
                  <TriangleAlert className="text-sm"/>
                  <span className="text-sm">{errors.server}</span>
                </div>
              )} */}
                </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Create an Account
              </Button>
              {/* Google Login Button */}
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
              
            </div>

           

            <div className="mt-4 text-center text-sm">
               Already have an account?{" "}
              <Link to="/auth/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
      )
}

export default AuthRegister

