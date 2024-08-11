import { axClient } from "@/lib/api/ax-client";
import { apiPaths } from "@/paths";

export async function uploadImage({ formData }: { formData: FormData }) {
  const response = await axClient.post(apiPaths.images.root, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}