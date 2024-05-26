import SignupBody from "@/components/(account)/signup/signup-body";
import { getAdminSettings } from "@/lib/api/server/get-admin-settings";

export default async function SignupPage() {
  const { managerCode } = await getAdminSettings("managerCode");
  return <SignupBody managerCode={managerCode} />;
}
