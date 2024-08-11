"use client";
import { apiPaths } from "@/paths";
import { getAdFiles } from "@/services/clickdesk/ad/get-ad-files";
import { Card, cn } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useAdAdd } from "../_hooks/use-ad-add";
import { AdCard } from "./AdCard";

export const ClickDeskAdBody = () => {
  const { isHover, dragDrop, isLoading, curIndex, maxCount } = useAdAdd();

  const { data, isPending } = useQuery({
    queryFn: getAdFiles,
    queryKey: [apiPaths.adFile.root],
  });

  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="pb-4 text-2xl font-bold">광고 파일 업로드</h2>
          <h2 className="text-base text-gray-500">
            이미지를 드래그해서 올리세요.
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {isLoading && (
            <div className="p-4 text-base font-bold text-blue-500">
              파일 업로드 중.. {`${curIndex + 1} / ${maxCount}`}
            </div>
          )}
          {isPending && (
            <div className="p-4 text-base font-bold text-blue-500">
              이미지 로딩 중...
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(
          "relative h-full border border-slate-200 bg-slate-50 p-2",
          // data.length === 0 ? "h-screen" : "",
          isHover ? "border-2 border-dashed !border-blue-500" : "",
        )}
        {...dragDrop}
      >
        <div className="flex flex-wrap gap-2">
          {data?.map((d: any) => (
            <AdCard key={d.id} id={d.id} fileName={d.fileName} />
          ))}
        </div>
      </div>
    </div>
  );
};
