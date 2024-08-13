import { cn } from "@/lib/utils";
import { paths } from "@/paths";
import { Card } from "@nextui-org/react";
import { useState } from "react";
import { useAdDelete } from "../_hooks/use-ad-delete";

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
        isLoaded ? "" : "h-[20rem] w-[20rem]",
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
          className={cn("object-cover")}
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
