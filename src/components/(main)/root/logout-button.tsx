import { signout } from "@/lib/api/signout";
import { paths } from "@/paths";
import { Button, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton() {
  const { replace } = useRouter();

  function handleSignout(): void {
    signout().then(() => replace(paths.login));
  }

  return (
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
  );
}
