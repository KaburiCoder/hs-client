"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import { useQuestionStore } from "@/stores/question-store";

export default function QuestionnaireLayout({ children }: ChildrenProps) {
  const {
    n1,
    n2,
    n3,
    n4,
    n4_1,
    n5,
    n5_1,
    n6,
    n6_1,
    n7,
    n7_1,
    n7_2,
    n8_1,
    n8_2,
    n9_1,
    n9_2,
    n10,
    setN3,
    setN4,
    setN4_1,
    setN5,
    setN5_1,
    setN6,
    setN6_1,
    setN7,
    setN7_1,
    setN7_2,
    setN8_1,
    setN8_2,
    setN9_1,
    setN9_2,
    setN10,
  } = useQuestionStore();
  function handleClick(): void {
  
  }

  function handleConfirm(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    const history = {
      n1,
      n2,
      n3,
    };
    const smoking = {
      n4,
      n4_1: n4 ? n4_1 : undefined,
      n5,
      n5_1,
      n6,
      n6_1,
    };

    const drink = {
      n7,
      n7_1,
      n7_2,
    };

    const activity = {
      n8_1,
      n8_2,
      n9_1,
      n9_2,
      n10,
    };

    const body = JSON.stringify({ history, smoking, drink, activity });
    // fetch("http://localhost:8000/questionnare")
    fetch("http://localhost:8000/questionnare", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
      cache: "no-cache",
    });
  }

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <div>로고</div>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem>
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
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              type="button"
              // as={Link}
              color="primary"
              href="#"
              variant="flat"
              onClick={handleConfirm}
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </>
  );
}
