import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react" // ✅ Import eye icons
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false) // ✅ state for password toggle

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-sm bg-white/80">
          <CardHeader>
            <CardTitle>Login / SignUp</CardTitle>
            <CardDescription className="w-50">
              Enter your Email below to Login
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                className="border-black/70 focus-visible:ring-black my-2"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="flex items-center relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="pr-10 border-black/70 focus-visible:ring-black my-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-600 hover:text-black"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button className="block bg-blue-500 text-white w-full rounded cursor-pointer my-2">
              Login
            </Button>

            <Button
              variant={"link"}
              className="text-blue-500 w-full text-center cursor-pointer"
            >
              Forgot Password?
            </Button>
          </CardContent>

          <CardFooter>
            <div className="flex w-full justify-center">
              <span className="mt-2">Don't have an account? </span>
              <Button
                onClick={() => navigate("/sign-up")}
                variant={"link"}
                className="cursor-pointer text-blue-500 underline"
              >
                Sign-up
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default LoginPage
