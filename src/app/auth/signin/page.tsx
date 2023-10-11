"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();

    console.log("handleSignIn");

    signIn("credentials", { email: email, password: password });
  };

  return (
    <div className="container mx-auto">
      <div className="text-2xl font-bold text-center">Login Page</div>
      <form onSubmit={handleSignIn}>
        <div>
          <Input
            type="text"
            label="Email"
            full
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            label="Password"
            full
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button className="bg-green-600 mt-3" type="submit" full>
            SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
