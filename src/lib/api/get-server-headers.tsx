import { headers } from "next/headers";

export function getServerHeaders() {
  const headersList = headers();
  const copyHeaders: { [key: string]: string } = {};
  const headersArray = Array.from(headersList.entries());
  // for (const [key, value] of headersArray) {
  //   copyHeaders[key] = value;
  // }

  copyHeaders["cookie"] = headersList.get("cookie") as string;
  copyHeaders["host"] = process.env.NEXT_PUBLIC_DOMAIN!;

  return copyHeaders;
}
