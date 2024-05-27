"use client";

import { DependencyList, useEffect, useState } from "react";
import { User } from "@/models/user";
import * as UserCookie from "@/server/cookies/user-cookie";

interface Args {
  deps?: DependencyList
}
export const useServerCookie = (args?: Args) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    UserCookie.getUser()
      .then((user) => setUser(user))
      .catch(() => setUser(undefined));
  }, args?.deps ?? []);

  return { user };
};
