"use client";
import AuthButton from "@/components/buttons/AuthButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertContext } from "@/providers/alert-provider";
import { emailSchema, passwordSchema } from "@/validation/user";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useLayoutEffect, useState } from "react";
import { z } from "zod";

const defaultUserState = {
  email: "",
  password: "",
};

type SignInUser = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const [errors, setErrors] = useState<SignInUser>(defaultUserState);
  const [user, setUser] = useState<SignInUser>(defaultUserState);

  const [loading, setLoading] = useState(false);

  const { setAlert } = useContext(AlertContext)!;

  const router = useRouter()

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

  const submit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/signin", {
        email: user.email,
        password: user.password,
      });
      console.log(data);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data?.id,
          email: data?.email,
          name: data?.name,
          token: data?.token,
        })
      );
      setAlert(() => ({
        header: "Success.",
        desc: "User logged in successfully.",
        variant: "success",
      }));
      router.push(`/${data?.id}`)
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



  return (
    <main className="flex flex-col items-center my-10 mx-auto px-5">
      <section className="my-10 w-96">
        <div className="py-8 px-5 border flex flex-col gap-5 rounded-lg">
          <h1 className=" text-center mb-5 text-xl font-bold">
            Log In to your Account
          </h1>
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
            <span>Don&apos;t have an account? Sign Up </span>{" "}
            <Link
              className="underline font-bold text-primary-accent"
              href="/signup"
            >
              here.
            </Link>
          </div>
          <AuthButton
            text="Sign In"
            handleSubmit={submit}
            disabled={
              Object.values(errors).some((error) => error?.length !== 0) ||
              Object.values(user).some((value) => value?.length === 0) ||
              loading
            }
            loading={loading}
          />
          <a href='https://www.facebook.com/v19.0/dialog/oauth?client_id=2657638891061414&redirect_uri=http://localhost:3000/api/auth&state="{st=state123abc,ds=123456789}"}'>
            Hellooooooooooo
          </a>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
