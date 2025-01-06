"use client";

import { SignupForm } from "@/components/signup-form";

export default function Signup() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-primaryGreen to-secondaryBlue">
      <SignupForm />
    </div>
  );
}
