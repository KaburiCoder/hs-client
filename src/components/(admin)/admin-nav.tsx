"use client";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { cn } from "@/lib/utils";
import { paths } from "@/paths";
import { User } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminNav() {
  const { user } = useServerCookie();
  const pathname = usePathname();

  return (
    <div className="h-full bg-slate-100">
      <User
        className="m-2 my-4"
        name={user?.userId}
        description="클릭소프트 관리자"
        avatarProps={{
          src: paths.images.eClickIco,
          className: "p-2",
        }}
      />
      <ul>
        {linkPaths.map((link) => (
          <CustomLink
            key={link.href}
            linkPath={link}
            isActive={pathname.startsWith(link.href)}
          />
        ))}
      </ul>
    </div>
  );
}

interface CustomLinkProps {
  linkPath: LinkPath;
  isActive: boolean;
}

function CustomLink({ linkPath, isActive }: CustomLinkProps) {
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

interface LinkPath {
  href: string;
  text: string;
}

const linkPaths: LinkPath[] = [
  { href: paths.adminSettings("common"), text: "공통 설정" },
  { href: paths.adminSettings("registuser"), text: "사용자 등록" },
];
