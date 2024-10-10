"use client";
import React from "react";
import { Grid, GridContent, GridHeader } from "../ui";
import { Button, Input } from "@nextui-org/react";
import { ChildrenClassNameProps } from "kbr-nextjs-shared/props";
import { cn } from "@/lib/utils";
import { useFetchReading } from "./hooks";
import { useUpsertReading } from "./hooks/use-upsert-reading";

export const ReadingBody = () => {
  const {
    commonDays,
    gumsaDays,
    isPending: fetchIsPending,
    setCommonDays,
    setGumsaDays,
    reset,
  } = useFetchReading();
  const { upsert, isPending: upsertIsPending } = useUpsertReading();
  const isPending = fetchIsPending || upsertIsPending;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">※ 열람 설정 사용 시 적용되는 항목입니다.</h3>
      <div className="flex flex-col gap-[1px] bg-slate-500 py-[1px]">
        <Grid gridColumnTemplate="8rem 1fr">
          <GridHeader>열람 기간</GridHeader>
          <GridContent className="flex gap-2">
            <span>현재 일로부터</span>
            <Input
              className="w-16"
              classNames={{ input: "text-center" }}
              type="number"
              min={1}
              max={999}
              value={commonDays}
              onValueChange={setCommonDays}
            />
            <span>일 동안 열람 가능</span>
          </GridContent>
        </Grid>
        <Grid gridColumnTemplate="8rem 1fr">
          <GridHeader>열람 세부 기간</GridHeader>
          <GridContent className="flex flex-col gap-[1px] bg-slate-500 !p-0">
            <InnerGridContent
              header="진료"
              contentClassName="p-0 flex-col gap-[1px] bg-slate-500"
            >
              <InnerGridContent header="검사">
                <Input
                  className="w-16"
                  classNames={{ input: "text-center" }}
                  type="number"
                  min={1}
                  max={999}
                  value={gumsaDays}
                  onValueChange={setGumsaDays}
                />
                <span>일 동안 열람 가능</span>
              </InnerGridContent>
            </InnerGridContent>
          </GridContent>
        </Grid>
      </div>
      <div className="flex justify-end gap-1">
        <Button
          color="danger"
          variant="flat"
          onClick={reset}
          isLoading={isPending}
        >
          취소
        </Button>
        <Button
          color="primary"
          onClick={() => upsert(Number(commonDays), Number(gumsaDays))}
          isLoading={isPending}
        >
          저장
        </Button>
      </div>
    </div>
  );
};

const InnerGridContent = ({
  header,
  children,
  className,
  contentClassName,
}: ChildrenClassNameProps & {
  header: string;
  contentClassName?: string;
}) => {
  return (
    <GridContent
      className={cn(
        "flex w-full flex-col gap-[1px] bg-slate-500 !p-0",
        className,
      )}
    >
      <Grid className="w-full" gridColumnTemplate="3rem 1fr">
        <GridHeader>{header}</GridHeader>
        <GridContent className={cn("flex gap-2", contentClassName)}>
          {children}
        </GridContent>
      </Grid>
    </GridContent>
  );
};
