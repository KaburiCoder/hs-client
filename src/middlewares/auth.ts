import { fetchCurrentUser } from "@/lib/api/fetch-server";
import { paths } from "@/paths";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user";
import * as UserCookie from "@/server/cookies/user-cookie";

export async function withAuth(req: NextRequest) {
  try {
    const url = req.nextUrl.clone();
    url.pathname = paths.login;

    return NextResponse.next();
    // let user: User | undefined;
    // const cookieUser = await UserCookie.getUser(req);
    // user = cookieUser ?? (await fetchCurrentUser());

    // const res: NextResponse = user
    //   ? NextResponse.next()
    //   : NextResponse.redirect(url);

    // if (!cookieUser && user) {
    //   await UserCookie.setUser(res, user);
    // } else if (!user) {
    //   await UserCookie.deleteUser(res);
    // }

    // return res;
  } catch (error) {
    // throw new Error(`Couldn't check authentication`);
  }
}

export async function withoutAuth(req: NextRequest) {
  try {
    const url = req.nextUrl.clone();
    url.pathname = paths.root;

    const user = await fetchCurrentUser();

    if (user) return NextResponse.redirect(url);
    if (!user) return NextResponse.next();
  } catch (error) {
    // throw new Error(`Couldn't check authentication`);
  }
}
