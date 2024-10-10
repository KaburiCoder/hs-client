import { axClient } from "@/lib/api/ax-client";
import { DoctorState } from "@/models/doctor-state";
import { apiPaths } from "@/shared/paths"

export async function getAllDoctors(): Promise<DoctorState[]> {
  const res = await axClient.get(apiPaths.clickdesk.doctor);
  return res.data;
}