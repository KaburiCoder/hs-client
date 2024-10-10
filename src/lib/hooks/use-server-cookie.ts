"use client";

import { User } from "@/models/user";
import { apiPaths } from "@/shared/paths";
import { useQuery } from "@tanstack/react-query";
import { axClient } from "../api/ax-client";

async function fetchCurrentUser(): Promise<User> {
  const response = await axClient.post("/currentuser");
  return response.data.currentUser;
};

export const useServerCookie = () => {
  const { data, refetch } = useQuery({
    queryFn: fetchCurrentUser,
    queryKey: [apiPaths.currentUser]
  })

  return { user: data, refetch };
};
