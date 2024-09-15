"use server";

export async function getEnv() {
  return {
    NEXT_ENV: process.env.NEXT_ENV!,
    DOMAIN: process.env.NEXT_PUBLIC_CLIENT_DOMAIN!,
    CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL!,
    SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL!,
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL!,
    KAKAO_JS_KEY: process.env.NEXT_PUBLIC_KAKAO_JS_KEY!,
  };
}
