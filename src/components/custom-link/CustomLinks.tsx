import { usePathname } from "next/navigation";
import React from "react";
import { CustomLink, LinkPath } from "./CustomLink";
import { CustomLinkHeader } from "./CustomLinkHeader";

interface CustomLinksProps {
  links: { header: string; links: LinkPath[] }[];
}

export const CustomLinks = ({ links }: CustomLinksProps) => {
  const pathname = usePathname();

  return (
    <ul>
      {links.map(({ header, links }) => (
        <React.Fragment key={header}>
          <CustomLinkHeader>{header}</CustomLinkHeader>
          {links.map((link) => (
            <CustomLink
              key={link.href}
              linkPath={link}
              isActive={pathname.startsWith(link.href)}
            />
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
};
