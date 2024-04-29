"use client";

import { useEffect, useState } from "react";
import { User } from "@/models/user";
import * as UserCookie from "@/server/cookies/user-cookie";

export const useServerCookie = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    UserCookie.getUser()
      .then((user) => setUser(user))
      .catch(() => setUser(undefined));
  }, []);

  return { user };
};
