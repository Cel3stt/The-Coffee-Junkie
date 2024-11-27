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
import { TriangleAlert, Eye, EyeOff} from "lucide-react"

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({ email: "", password: "", server: "" });
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility


  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  // Validation function moved outside handleSubmit
  const validateInputs = () => {
    const newErrors = {};

  
    if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear previous server errors
    setErrors({ email: false, password: false, server: "" });

    // Validate inputs before making API call
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    axios
      .post("http://localhost:3000/auth/adminLogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/");
        } else {
          setErrors({
            email: true,
            password: true,
            server: "Invalid email or password.",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setErrors({ ...errors, server: "An error occurred. Please try again." });
      });
  };

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
              {/* Email Field */}
              <div className="text-left grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => {
                    const newEmail = e.target.value;
                    setValues({ ...values, email: newEmail });

                    // Clear error if user starts typing
                    if (errors.server) {
                      setErrors((prev) => ({ ...prev, email: false, server: "" }));
                    }
                  }}
                  className={`${
                    errors.email ? "border-red-600" : "border-gray-300"
                  } mt-1 block w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-indigo-200`}
                  required
                  
                  
                />
                {/* Display email error */}
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
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
      type={showPassword ? "text" : "password"} // Toggle input type
      value={values.password}
      onChange={(e) => {
        const newPassword = e.target.value;
        setValues({ ...values, password: newPassword });

        // Clear error if user starts typing
        if (errors.server) {
          setErrors((prev) => ({ ...prev, password: false, server: "" }));
        }
      }}
      className={`${
        errors.password ? "border-red-600" : "border-gray-300"
      } mt-1 block w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-indigo-200`}
      style={{ height: "40px" }} // Explicitly set height for input
      required
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  </div>
               


                 {/* Display password error */}
                 {errors.password && (
                    <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                  )}

                 {/* Error Message */}
              {errors.server && (
                <div className="flex items-center gap-4 mt-2 p-4 bg-red-500 text-white rounded-lg">
                  
                  <TriangleAlert className="text-sm"/>
                  <span className="text-sm">{errors.server}</span>
                </div>
              )}
                </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Login
              </Button>
              {/* Google Login Button */}
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
  );
};

export default Login;
