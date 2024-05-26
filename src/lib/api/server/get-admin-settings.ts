'use server'

import { apiPaths } from "@/paths";
import { axServer } from "../ax-server";

type QueryValueType = "managerCode"

interface AdminSettingsResponseDto {
  managerCode?: string;
}

export async function getAdminSettings(...selectQueryValues: QueryValueType[]): Promise<AdminSettingsResponseDto> {
  const url = apiPaths.adminSettingsFind + (selectQueryValues ? `?selectQuery=${selectQueryValues.join(",")}` : "");
  const response = await axServer().post(url, {
    encKey: process.env.ENC_KEY!,
  });
  return response.data
}