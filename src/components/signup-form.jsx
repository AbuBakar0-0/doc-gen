"use client";

import { Signup } from "@/app/actions/(auth)/signup/action";
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
import md5 from "md5";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export function SignupForm({ className, ...props }) {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Please Wait");
    // Encrypt password with md5
    const encryptedPassword = md5(formData.password);
    const payload = {
      email: formData.email,
      password: encryptedPassword,
    };
    const response = await Signup(payload);
    console.log();
    toast.dismiss();
    if (response.error == undefined) {
      const emailPayload = {
        id: response.user.id,
        email: formData.email, // Include the email in the payload
      };
      await axios.post('/api/sendEmail', emailPayload); // Send email and userId to the verify API
      toast.success("Email Sent!");
      // router.push("/");
    }
    else {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className={cn("flex flex-col w-1/3", className)} {...props}>
      <Card className="py-10">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Register</CardTitle>
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
              </div>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/" className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
