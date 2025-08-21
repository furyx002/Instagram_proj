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
import { Eye, EyeOff } from "lucide-react" // ✅ import icons

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm bg-white/80 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Sign Up Form</CardTitle>
          <CardDescription>Enter your details below to create an account</CardDescription>
        </CardHeader>

        <CardContent>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              name="username"
              className="border-black/70 focus-visible:ring-black my-2"
            />
          </div>

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

          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded mt-4">
            Create Account
          </Button>
        </CardContent>

        <CardFooter className="text-sm text-gray-600">
          Already have an account? <span className="ml-1 text-blue-500 cursor-pointer">Login</span>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignUpPage
