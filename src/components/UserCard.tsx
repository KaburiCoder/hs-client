"use client";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { paths } from "@/paths";
import { User } from "@nextui-org/react";
import React from "react";

export const UserCard = () => {
  const { user } = useServerCookie();
  return (
    <User
      className="m-2 my-4"
      name={user?.userId}
      description={user?.orgName}
      avatarProps={{
        src: paths.images.eClickIco,
        className: "p-2",
      }}
    />
  );
};
