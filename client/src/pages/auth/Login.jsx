import { Link } from "react-router-dom";
import { loginFormControls } from "@/config";
import CommonForm from "@/components/common/Form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const {toast} = useToast()

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if(data?.payload?.success){
        toast({
          title : data?.payload?.message
        })
      } else{
        toast({
          title : data?.payload?.message,
          variant : 'destructive'
        })
      }
    });
    
  }
 

  return (
    <div className="flex h-screen w-full items-center justify-center px-4 border-0">
      <Card className="mx-auto max-w-sm border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-left text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CommonForm
            formControls={loginFormControls}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            buttonText="Login"
          />

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/auth/register" className="underline">
              Create an Account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AuthLogin;
