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
import { useSelectionPatientStore } from "@/stores/selection-patient-store";
import ClickIcon from "../../../images/click-icon";
import { useNavTitle } from "../_hooks/use-nav-title";
import LogoutButton from "./logout-button";
import { Settings } from "lucide-react";
import SettingButton from "./setting-button";

export default function MainHeader() {
  const { isWriteMode, titleComponent } = useNavTitle();

  const patient = useSelectionPatientStore((state) => state.patient);

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand className="gap-2">
        <ClickIcon />
        {titleComponent}
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
      <NavbarContent className="gap-1" justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {isWriteMode && <div>{patient?.name} 님</div>}
        {!isWriteMode && (
          <>
            <NavbarItem>
              <SettingButton />
            </NavbarItem>
            <NavbarItem>
              <LogoutButton />
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
