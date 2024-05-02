"use server";
import { User } from "@/models/user";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const key: string = "user";

export async function getUser(): Promise<User | undefined>;
export async function getUser(req: NextRequest): Promise<User | undefined>;
export async function getUser(req?: NextRequest): Promise<User | undefined> {
  let userCookie: RequestCookie | undefined;
  if (req) {
    userCookie = req.cookies.get(key);
  } else {
    userCookie = cookies().get(key);
  }

  if (userCookie) {
    return JSON.parse(userCookie.value) as User;
  }
}

export async function deleteUser(): Promise<void>;
export async function deleteUser(res: NextResponse): Promise<void>;
export async function deleteUser(res?: NextResponse): Promise<void> {
  if (res) {
    res.cookies.delete(key);
  } else {
    cookies().delete(key);
  }
}

export async function setUser(res: NextResponse, user: User) {
  const expDate = new Date((user?.exp ?? 0) * 1000);
  res.cookies.set(key, JSON.stringify(user), {
    expires: expDate,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
