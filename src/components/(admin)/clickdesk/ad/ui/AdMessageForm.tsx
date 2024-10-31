import { Button, Input } from "@nextui-org/react";
import { FormEvent } from "react";
import { useAdMessage } from "../hooks/useAdMessage";

export const AdMessageForm = () => {
  const {
    message,
    setMessage,
    animationSeconds,
    setAnimationSeconds,
    mutate,
    isPending,
  } = useAdMessage();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    mutate({ message, animationSeconds });
  }

  return (
    <div className="flex flex-col">
      <h2 className="pb-4 text-xl font-bold">광고 하단 메세지 설정</h2>
      <form className="flex flex-wrap gap-2" onSubmit={handleSubmit}>
        <Input
          className="min-w-56 flex-1"
          label="메세지"
          value={message}
          variant="faded"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Input
          className="w-28 min-w-28"
          label="출력 시간(초)"
          type="number"
          variant="faded"
          min={5}
          max={60}
          value={String(animationSeconds)}
          onChange={(e) => setAnimationSeconds(Number(e.target.value))}
        />
        <Button
          className="h-auto min-h-10 min-w-10"
          type="submit"
          size="lg"
          color="primary"
          isLoading={isPending}
        >
          저장
        </Button>
      </form>
    </div>
  );
};
