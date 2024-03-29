"use client";

import AuthButton from "@/components/buttons/AuthButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertContext } from "@/providers/alert-provider";
import { User } from "@/types";
import { emailSchema, nameSchema, passwordSchema } from "@/validation/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { z } from "zod";

const defaultUserState = {
  name: "",
  email: "",
  password: "",
};

const SignUpPage = () => {
  const [errors, setErrors] = useState<User>(defaultUserState);
  const [user, setUser] = useState<User>(defaultUserState);

  const [loading, setLoading] = useState(false);
  const { setAlert } = useContext(AlertContext)!;
  const router = useRouter()

  // handlers

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    try {
      setLoading(true);
      const data = await axios.post("/api/auth/signup", {
        ...user,
      });
      setAlert(() => ({
        header: "Success.",
        desc: "User created successfully.",
        variant: "success",
      }));
    } catch (error: any) {
      const desc =
        error?.response?.data?.message ?? "Something went wrong on the server.";
      setAlert({
        header: "Something went wrong.",
        desc,
        variant: "destructive",
      });
    } finally {
      // set everything to default state
      setLoading(false);
      setUser(() => defaultUserState);
      setErrors(() => defaultUserState);
    }
  };

  useEffect(() => {

    async function checkUser() {

      const user = localStorage.getItem('user')
      if(user) {
        const {id} = await JSON.parse(user)
        router.push(`/${id}`)
      }
    }
    checkUser()
  }, [])

  return (
    <main className="my-10 flex flex-col items-center mx-2 sm:mx-auto  px-4">
      <section className="my-10 w-full max-w-96">
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

          <AuthButton
            text={"Sign Up"}
            disabled={
              Object.values(errors).some((error) => error?.length !== 0) ||
              Object.values(user).some((value) => value?.length === 0) ||
              loading
            }
            loading={loading}
            handleSubmit={submit}
          />
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
