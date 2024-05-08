import { fetchCurrentUser } from "@/lib/api/fetch-server";
import { paths } from "@/paths";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user";
import * as UserCookie from "@/server/cookies/user-cookie";

export async function withAuth(req: NextRequest) {
  try {
    const user = await UserCookie.getUser(req);

    const res: NextResponse = user
      ? NextResponse.next()
      : NextResponse.redirect(new URL(paths.login, req.nextUrl));

    return res;
  } catch (error) {
    // throw new Error(`Couldn't check authentication`);
  }
}

export async function withoutAuth(req: NextRequest) {
  try {
    const user = await UserCookie.getUser(req);

    if (user) return NextResponse.redirect(new URL(paths.root, req.nextUrl));
    if (!user) return NextResponse.next();
  } catch (error) {
    // throw new Error(`Couldn't check authentication`);
  }
}
