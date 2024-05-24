import ManagerCodeForm from "@/components/(admin)/common/manager-code-form";
import { axServer } from "@/lib/api/ax-server";
import { apiPaths } from "@/paths";
import React from "react";

export default async function SettingsCommonPage() {
  const response = await axServer().get(apiPaths.adminSettings);

  return (
    <div className="mx-auto grid w-full sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      <ManagerCodeForm managerCode={response.data.managerCode} />
    </div>
  );
}
