import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  Link } from "react-router-dom";
import { useRef } from "react";

const LoginPage = () => {
const emailRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);

const handleLogin = () => {
  // Using optional chaining to safely access the current value of the refs
  const email = emailRef.current?.value;
  const password = passwordRef.current?.value;

  // Here you would handle the login logic
  console.log("Email:", email);
  console.log("Password:", password);
};


    return(
        <section className="flex justify-center items-center h-screen">
     
       <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
     
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" ref={emailRef}  placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" ref={passwordRef}  required />
        </div>
      </CardContent>
 
      <CardFooter>
        <div className="w-full">
        <Button onClick={handleLogin} className="w-full">Sign in</Button>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link to = {'/auth/register'} className="underline">
            Sign up
          </Link>
        </div>
        </div>
        
      </CardFooter>
    </Card>
    </section>
    )
}

export default LoginPage;

