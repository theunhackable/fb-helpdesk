"use client";
import { userContext } from "@/providers/user-provider";

import React, { useContext } from "react";

const UserPage = ({ params: { userId } }: { params: { userId: string } }) => {
  const { user, loading } = useContext(userContext)!;

  if (loading) return <p> loading .... </p>;

  if (!user) return <p>Something went wrong</p>;

  return (
    <>
      <h1 className="text-2xl font-bold">Your Profile details</h1>
      <p>Name: {user.name}</p>
      <p>email: {user.email}</p>
      <p>Name: {user.name}</p>
      <p>Signed In to FB? {user.code ? "Yes" : "No"}</p>
      <div className="w-96 h-96 bg-red-50"></div>
      <div className="w-96 h-96 bg-red-50"></div>
      <div className="w-96 h-96 bg-red-50"></div>
    </>
  );
};

export default UserPage;
