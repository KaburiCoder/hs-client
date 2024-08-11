import { apiPaths } from '@/paths';
import { deleteAdFile } from '@/services/clickdesk/ad/delete-ad-file';
import { deleteImage } from '@/services/clickdesk/images/delete-image';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAdDelete = () => {
  const queryClient = useQueryClient();
  const { mutate: delImgMutate, isPending: delImgPending } = useMutation({
    mutationFn: deleteImage
  });

  const { mutateAsync: delAdMutate, isPending: delAdPending } = useMutation({
    mutationFn: deleteAdFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [apiPaths.adFile.root] });
    }
  });

  async function deleteFileAndImage(id: string, fileName: string) {
    delImgMutate({ fileName });
    delAdMutate({ id })
  };

  return {
    deleteFileAndImage,
    isPending: delImgPending || delAdPending,
  };
}
