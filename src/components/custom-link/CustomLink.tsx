import { cn } from "@/lib/utils";
import Link from "next/link";

interface CustomLinkProps {
  linkPath: LinkPath;
  isActive: boolean;
}

export interface LinkPath {
  href: string;
  text: string;
}

export function CustomLink({ linkPath, isActive }: CustomLinkProps) {
  return (
    <li className="h-fit overflow-hidden">
      <Link
        href={linkPath.href}
        className={cn(
          "m-2 my-0.5 block rounded p-2",
          "hover:bg-slate-300",
          isActive ? "border border-slate-400 bg-slate-200" : "",
        )}
      >
        {linkPath.text}
      </Link>
    </li>
  );
}
