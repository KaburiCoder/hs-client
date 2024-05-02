"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";
import { paths } from "@/paths";
import { signout } from "@/lib/api/signout";
import { usePathname, useRouter } from "next/navigation";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";

export default function MainHeader() {
  const pathname = usePathname();
  const isQuestionnairePath = pathname.startsWith(paths.questionnaire);

  const { replace } = useRouter();
  const patient = useSelectionPatientStore((state) => state.patient);
  function handleSignout(): void {
    signout().then(() => replace(paths.login));
  }

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {!isQuestionnairePath && <p className="font-bold text-inherit">클릭소프트</p>}
        {isQuestionnairePath && (
          <p className="font-bold text-inherit">건강검진 문진표</p>
        )}
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {isQuestionnairePath && <div>{patient?.name} 님</div>}
        {!isQuestionnairePath && (
          <NavbarItem>
            <Button
              type="button"
              as={Link}
              color="primary"
              // href={paths.root}
              variant="flat"
              onClick={handleSignout}
            >
              로그아웃
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
