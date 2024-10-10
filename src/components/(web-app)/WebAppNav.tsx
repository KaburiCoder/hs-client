"use client";
import { paths } from "@/shared/paths";
import { LinkPath } from "../custom-link/CustomLink";
import { CustomLinks } from "../custom-link/CustomLinks";
import { SignoutButton } from "../SignoutButton";
import { UserCard } from "../UserCard";
import { webAppPathNames } from "@/shared";

export default function WebAppNav() {
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
      {
        href: paths.webApp("users"),
        text: webAppPathNames[paths.webApp("users")],
      },
      {
        href: paths.webApp("reading"),
        text: webAppPathNames[paths.webApp("reading")],
      },
    ],
  },
];
