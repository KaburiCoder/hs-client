import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/shared/paths";

export async function saveAdFile({
  fileName,
  fileType,
}: {
  fileName: string;
  fileType: string;
}) {
  const response = await axClient.post(apiPaths.adFile.root, { fileName, fileType });
  return response.data;
}


