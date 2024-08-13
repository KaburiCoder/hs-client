"use client";
import { useSelectionPatientStore } from "@/stores/selection-patient-store";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import ClickIcon from "../../../images/ClickIcon";
import { useNavTitle } from "../_hooks/use-nav-title";
import LogoutButton from "./logout-button";
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
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      ></NavbarContent>
      <NavbarContent className="gap-1" justify="end">
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
