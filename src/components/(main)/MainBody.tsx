"use client";
import { useServerCookie } from "@/lib/hooks/use-server-cookie";
import { cn } from "@/lib/utils";
import { paths } from "@/shared/paths";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

export const MainBody = () => {
  const { user } = useServerCookie();
  const sortedMenus = useMemo(() => {
    const menus = [
      {
        title: "웹 문진표",
        description: "문진표를 웹에서 직접 작성할 수 있어요!",
        to: paths.qn.root,
        use: user?.settings?.questionnaire?.use,
      },

      {
        title: "dClick",
        description: "접수실에서 초진, 재진 접수를 쉽게할 수 있는 어플이에요!",
        to: paths.clickdesk.reception("hospinfo"),
        use: user?.settings?.clickDesk?.use,
      },
      {
        title: "클릭 웹 앱",
        description: "태블릿을 들고 회진할 때 환자정보를 확인하세요!",
        to: paths.webApp("users"),
        // to: "https://app.click-soft.co.kr",
        use: user?.settings?.webApp?.use,
      },
    ];

    return menus.sort((a, b) => {
      if (a.use === b.use) return 0;
      return a.use ? -1 : 1;
    });
  }, [user?.settings]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="py-2 text-2xl font-bold">클릭소프트 웹 부가서비스</h2>
        {user?.admin && (
          <Button
            className="text-base"
            variant="flat"
            color="warning"
            as={Link}
            href={paths.adminSettings("common")}
          >
            관리자 페이지
          </Button>
        )}
      </div>
      {sortedMenus.map((menu) => (
        <CustomBox
          key={menu.title}
          to={menu.to}
          title={menu.title}
          description={menu.description}
          use={menu.use}
        />
      ))}
    </div>
  );
};

interface Props {
  title: React.ReactNode;
  description: React.ReactNode;
  to: string;
  use?: boolean;
}
const CustomBox = ({ title, description, to, use }: Props) => {
  const { push } = useRouter();

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    if (!use) {
      return alert(
        `${title} 서비스를 사용하고 있지 않습니다. 관리자에게 문의하세요!`,
      );
    }
    push(to);
  }

  return (
    <button
      className={cn(
        "flex w-full flex-col gap-2 rounded-lg border border-primary/50 p-4 text-start",
        "hover:bg-slate-50",
      )}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <h3 className="min-w-28 text-xl font-bold text-primary">{title}</h3>
        <span
          className={cn(
            "flex min-w-28 items-center justify-center rounded-xl px-2 py-1 text-sm text-white",
            use ? "bg-green-500" : "bg-gray-200 text-gray-500",
          )}
        >
          {use ? "In Service" : "Out of Service"}
        </span>
      </div>
      <p className="text-gray-500 ">{description}</p>
    </button>
  );
};
