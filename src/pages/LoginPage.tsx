import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if the email and password are correct
    if (email === 'ramdevaba@patanjali.com' && password === 'asd') {
      // Redirect to the dashboard
      navigate('/dashboard');
    } else {
      // Show an error message
      alert('Invalid email or password');
    }
  }


    return(
        <section className="flex justify-center items-center h-screen">
     
       <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <Form onSubmit={handleSubmit}>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
      </CardContent>
      </Form>
      <CardFooter>
        <div className="w-full">
        <Button className="w-full">Sign in</Button>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link to = {'/register'} className="underline">
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