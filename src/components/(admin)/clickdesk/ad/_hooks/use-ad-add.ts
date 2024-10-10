import { useDragDrop } from '@/lib/hooks/use-drag-drop';
import { useIsLoading } from '@/lib/hooks/use-is-loading';
import { apiPaths } from '@/shared/paths';
import { deleteAdFile } from '@/services/clickdesk/ad/delete-ad-file';
import { saveAdFile } from '@/services/clickdesk/ad/save-ad-file';
import { deleteImage } from '@/services/clickdesk/images/delete-image';
import { uploadImage } from '@/services/clickdesk/images/upload-image';
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react'

export const useAdAdd = () => {
  const { isLoading, error, loadingFn } = useIsLoading();
  const [curIndex, setCurIndex] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const stopRef = useRef(false);

  const queryClient = useQueryClient();
  const { isHover, ...dragDrop } = useDragDrop<HTMLDivElement>({
    onImagesDrop: async (files) => {
      if (isLoading) {
        return alert("이미지가 업로드 중입니다.")
      }
      setMaxCount(files.length);
      loadingFn(async () => {
        for (let i = 0; i < files.length; i++) {
          if (stopRef.current) return;
          setCurIndex(i);
          const file = files[i];
          const formData = new FormData();
          formData.append("image", file);
          const uploadImageResult = await uploadImage({ formData });

          let adFileId;
          try {
            const adFile = await saveAdFile({
              fileName: uploadImageResult.fileName,
              fileType: "image",
            });
            adFileId = adFile.id;
          } catch (err) {
            await deleteImage({ fileName: uploadImageResult.fileName })
            await deleteAdFile({ id: adFileId });
            throw err;
          }
        }

        queryClient.invalidateQueries({ queryKey: [apiPaths.adFile.root] })
      });
    },
  });

  useEffect(() => {
    stopRef.current = false;
    return () => {
      stopRef.current = true;
    }
  }, [])

  return { isHover, dragDrop, isLoading, error, curIndex, maxCount };
}


