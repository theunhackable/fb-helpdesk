import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex flex-col items-center my-10 px-4">
      <section className="my-10 w-full max-w-96">
        <div className="py-8 px-5 border flex flex-col gap-5 rounded-lg">
          <h1 className=" text-center mb-5 text-xl font-bold">
            Create your Account
          </h1>

          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-xs font-bold">
              Name:
            </Label>
            <Input
              id="name"
              name="name"
              className="w-full"
              type="name"
              placeholder="Jhon Wick"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-xs font-bold">
              Email:
            </Label>
            <Input
              id="email"
              name="email"
              className="w-full"
              type="email"
              placeholder="jhonwick@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-xs font-bold">
              Password:
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="************"
            />
          </div>
          <div className="text-xs font-medium">
            <span>Already have an account? Log In</span> <Link className="underline font-bold text-primary-accent" href='/login'>here.</Link>
          </div>
          <Button className="hover:bg-primary-accent/90 active:bg-primary-accent bg-primary-accent">
            Sign Up
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
