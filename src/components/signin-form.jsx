"use client";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SigninForm({ className, ...props }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create payload to send to endpoint
    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post(
        "/api/signin",
        payload
      );
      console.log("Signin Successfull:", response.data);

      alert("Signin Successfull!");
      router.push('/HeaderFooter');
    } catch (error) {
      console.error("Signin failed:", error);
      alert("Signin failed. Please try again.");
    }
  };

  return (
    <div className={cn("flex flex-col w-1/3", className)} {...props}>
      <Card className="py-10">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a> */}
              </div>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full" >
              Login
            </Button>
          </form>
          {/* <Button
            variant="outline"
            className="w-full"
            type="button"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </Button> */}
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/Signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
