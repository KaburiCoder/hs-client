import AdminUsersBody from "@/components/(admin)/users/admin-users-body";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

export default function AdminSettingsUsersPage() {
  noStore();
  return <AdminUsersBody />;
}
