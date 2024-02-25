"use client";

import FBAlert from "@/components/alerts/Alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@/types";
import {
  emailSchema,
  nameSchema,
  passwordSchema,
  userSchema,
} from "@/validation/user";
import axios from "axios";
import { Terminal } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

const SignUpPage = () => {
  const [errors, setErrors] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const handleName =  (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, name: e.target.value }));
    try {
      const validateName = nameSchema.parse(e.target.value);
      setErrors((prev) => ({ ...prev, name: "" }));
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const validationError = error.errors[0].message;
        setErrors((prev) => ({ ...prev, name: validationError }));
        // Handle invalid name
      }
    }
  };

  const handleEmail =  (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, email: e.target.value }));
    try {
      const validateEmail = emailSchema.parse(e.target.value);
      setErrors((prev) => ({ ...prev, email: "" }));
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const validationError = error.errors[0].message;
        setErrors((prev) => ({ ...prev, email: validationError }));
      }
    }
  };

  const handlePassword =  (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, password: e.target.value }));
    try {
      const validatePassword = passwordSchema.parse(e.target.value);
      setErrors((prev) => ({ ...prev, password: "" }));
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const validationError = error.errors[0].message;
        setErrors((prev) => ({ ...prev, password: validationError }));
      }
    }
  };

  const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data = await axios.post('/api/auth', {
      body: user
    })
  };

  return (
    <main className="my-10 mx-auto px-4">
      <FBAlert />
      <section className="my-10 w-96">
        <div className="w-full py-8 px-5 border flex flex-col gap-5 rounded-lg">
          <h1 className=" text-center mb-5 text-xl font-bold">
            Create your Account
          </h1>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-xs font-bold">
              Name:
            </Label>
            <Input
              value={user.name}
              onChange={handleName}
              id="name"
              name="name"
              className="w-full"
              type="name"
              placeholder="Jhon Wick"
            />
            {errors.name && (
              <p className="text-xs text-red-700">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-xs font-bold">
              Email:
            </Label>
            <Input
              value={user.email}
              onChange={handleEmail}
              id="email"
              name="email"
              className="w-full"
              type="email"
              placeholder="jhonwick@gmail.com"
            />
            {errors.email && (
              <p className="text-xs text-red-700">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-xs font-bold">
              Password:
            </Label>
            <Input
              value={user.password}
              onChange={handlePassword}
              id="password"
              name="password"
              type="password"
              placeholder="************"
            />
            {errors.password && (
              <p className="text-xs text-red-700">{errors.password}</p>
            )}
          </div>
          <div className="text-xs font-medium">
            <span>Already have an account? Log In</span>{" "}
            <Link
              className="underline font-bold text-primary-accent"
              href="/login"
            >
              here.
            </Link>
          </div>
          <Button
            disabled={
              Object.values(errors).some((error) => error.length !== 0) ||
              Object.values(user).some((value) => value.length === 0)
            }
            onClick={submit}
            className="hover:bg-primary-accent/90 active:bg-primary-accent hover:disabled:cursor-not-allowed bg-primary-accent"
          >
            Sign Up
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
