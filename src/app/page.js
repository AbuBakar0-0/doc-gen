"use client";

import { SigninForm } from "@/components/signin-form";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-primaryGreen to-secondaryBlue">
      <SigninForm />
    </div>
  );
}
