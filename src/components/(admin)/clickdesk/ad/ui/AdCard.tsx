import { paths } from "@/paths";
import { Card, Image as NextImage } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAdDelete } from "../_hooks/use-ad-delete";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  fileName: string;
}
export const AdCard = ({ id, fileName }: Props) => {
  const { deleteFileAndImage, isPending } = useAdDelete();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card
      className={cn(
        "relative max-h-[20rem] min-h-[5rem] max-w-[20rem] flex-grow",
        isLoaded ? "" : "min-h-[20rem] min-w-[20rem]",
      )}
    >
      <div>
        {!isLoaded && (
          <img
            className="object-cover "
            alt=".."
            src={paths.images.loadingQute}
            loading="lazy"
          />
        )}
        <img
          className={cn("object-cover", isLoaded ? "" : "hidden")}
          alt=".."
          src={`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/images/${fileName}`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
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
