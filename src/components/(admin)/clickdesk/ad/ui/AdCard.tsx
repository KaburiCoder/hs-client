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
    // 이미지 로드 시작 시
    const img = new Image();
    img.src = `http://localhost:4020/api/images/${fileName}`;

    img.onload = () => { 
      setImageSrc(img.src); // 이미지 로드 완료 후 실제 이미지 설정
    };
  }, [fileName]);
  
  return (
    <Card className="relative min-h-[5rem] max-h-[20rem] max-w-[20rem] flex-grow">
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
