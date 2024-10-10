import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/shared/paths";

export async function deleteImage({ fileName }: { fileName: string }) {
  const response = await axClient.delete(apiPaths.images.file(fileName));
  return response.data;
}