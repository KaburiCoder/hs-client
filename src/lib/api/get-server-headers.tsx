import { headers } from "next/headers";

export function getServerHeaders() {
  const headersList = headers();
  const copyHeaders: { [key: string]: string } = {};
  const headersArray = Array.from(headersList.entries());
  for (const [key, value] of headersArray) {
    copyHeaders[key] = value;
  }
  return copyHeaders;
}
