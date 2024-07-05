"use client";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { paths } from "@/paths";
import { usePathname } from "next/navigation";

export const ClickdeskNav = () => {
  const pathname = usePathname();
  const defaultValue = pathname.split("/")?.[2];

  return (
    <nav>
      <Accordion
        defaultValue={defaultValue}
        type="single"
        collapsible
        className="w-full"
      >
        <AccItem value="1" trigger="사용자 관리"></AccItem>
        <AccItem value="reception" trigger="접수 앱 관리">
          <ul>
            <AccLi href={paths.clickdesk.reception("doctor")}>
              진료의사 설정
            </AccLi>
            <AccLi href={paths.clickdesk.reception("reason")}>
              내원사유 설정
            </AccLi>
          </ul>
        </AccItem>
      </Accordion>
    </nav>
  );
};

interface AccItemProps extends ChildrenProps {
  value: string;
  trigger: React.ReactNode;
}

const AccItem = ({ value, trigger, children }: AccItemProps) => {
  return (
    <AccordionItem value={value} className="border-b-slate-300">
      <AccordionTrigger>{trigger}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};

interface AccLiProps extends ChildrenProps {
  href: string;
}

const AccLi = ({ href, children }: AccLiProps) => {
  const pathname = usePathname();
  const active = pathname.startsWith(href);
  
  return (
    <li>
      <Link
        href={href}
        className={cn("flex items-center gap-2 p-2", "hover:bg-slate-100",
        active? "bg-amber-50 text-amber-600 font-bold" :""
        )}
      >
        <CircleChevronRight className="h-2 w-2 text-gray-500" />
        <div className="text-base">{children}</div>
      </Link>
    </li>
  );
};
