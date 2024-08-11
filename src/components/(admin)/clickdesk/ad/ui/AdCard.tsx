import { paths } from "@/paths";
import { Card, Image as NextImage } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAdDelete } from "../_hooks/use-ad-delete";

interface Props {
  id: string;
  fileName: string;
}
export const AdCard = ({ id, fileName }: Props) => {
  const [imageSrc, setImageSrc] = useState(paths.images.loadingQute);
  const { deleteFileAndImage, isPending } = useAdDelete();

  useEffect(() => {
    let isMounted = true;
    // 이미지 로드 시작 시
    const img = new Image();
    img.src = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/images/${fileName}`;

    img.onload = () => {
      if (isMounted) setImageSrc(img.src); // 이미지 로드 완료 후 실제 이미지 설정
    };

    return () => {
      isMounted = false;
    };
  }, [fileName]);

  return (
    <Card className="relative max-h-[20rem] min-h-[5rem] max-w-[20rem] flex-grow">
      <img alt=".." className="object-bottom" src={imageSrc} />
      <button
        disabled={isPending}
        className="absolute right-1 top-1 z-10 text-xl"
        onClick={() => deleteFileAndImage(id, fileName)}
      >
        ❎
      </button>
    </Card>
  );
};
