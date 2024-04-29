"use client";
import React from "react";
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
import { useRouter } from "next/navigation";

export default function MainHeader() {
  const { replace } = useRouter();
  function handleSignout(): void {
    signout().then(() => replace(paths.login));
  }

  return (
    <Navbar>
      <NavbarBrand>
        <div>클릭</div>
        <p className="font-bold text-inherit">소프트</p>
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
      </NavbarContent>
    </Navbar>
  );
}
