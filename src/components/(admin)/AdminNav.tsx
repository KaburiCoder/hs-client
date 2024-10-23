"use client";
import { paths } from "@/shared/paths";
import { LinkPath } from "../custom-link/CustomLink";
import { CustomLinks } from "../custom-link/CustomLinks";
import { SignoutButton } from "../SignoutButton";
import { UserCard } from "../UserCard";

export default function AdminNav() {  
  return (
    <div className="flex h-full flex-col justify-between bg-slate-100">
      <div>
        <UserCard />
        <CustomLinks links={links} />
      </div>
      <div className="m-2">
        <SignoutButton />
      </div>
    </div>
  );
}

const links: { header: string; links: LinkPath[] }[] = [
  {
    header: "일반",
    links: [
      { href: paths.adminSettings("common"), text: "공통 설정" },
      { href: paths.adminSettings("users"), text: "사용자 리스트" },
    ],
  },
  {
    header: "dClick",
    links: [{ href: paths.adminClickDesk("ad"), text: "광고 설정" }],
  },
];
