import ErrorBox from "@/components/ErrorBox";
import { isNumber } from "@/stores/utils/check-util";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { useLockpw } from "../../_hooks/use-lock-pw";

export function LockPwInputs() {
  const { isLoading, lockPw, mutate } = useLockpw();
  const [pw, setPw] = useState<string[]>([]);
  const [error, setError] = useState<string>();
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const keyRef = useRef<string>("");

  // 입력란에 대한 ref 설정
  const setInputRef = (index: number) => (element: HTMLInputElement | null) => {
    inputRefs.current[index] = element;
  };

  // 다음 입력란으로 포커스 이동
  const focusNextInput = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < inputRefs.current.length) {
      inputRefs.current[nextIndex]?.focus();
    } else {
      buttonRef.current?.focus();
    }
  };

  function handleSave(): void {
    if (!pw.every((p) => isNumber(p))) {
      setError("잠금 코드를 모두 입력해주세요.");
      return;
    }
    setError(undefined);
    mutate(pw.join(""));
  }

  useEffect(() => {
    if (!lockPw) return;

    setPw([
      lockPw.slice(0, 1),
      lockPw.slice(1, 2),
      lockPw.slice(2, 3),
      lockPw.slice(3, 4),
    ]);
  }, [lockPw]);

  function handleChangeKey(index: number, key: string): void {
    if (isNumber(key)) {
      setPw((prev) => {
        prev[index] = key;
        return [...prev];
      });
      focusNextInput(index);
    }
  }

  return (
    <div>
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((n) => (
          <Input
            key={n}
            className="max-w-14 text-base"
            classNames={{ input: "text-center" }}
            variant="bordered"
            type="number"
            min={0}
            max={9}
            value={pw[n] ?? ""}
            onFocus={(e) => (e.target as HTMLInputElement).select()}
            onBeforeInput={(e) => {
              keyRef.current = (e.target as HTMLInputElement).value;
            }}
            onInput={(e) => {
              e.preventDefault();
              const newValue = (e.target as HTMLInputElement).value;
              const key = newValue.replace(keyRef.current, "");
              handleChangeKey(n, key);
            }}
            ref={setInputRef(n)} // ref 설정
          />
        ))}
        <Button
          ref={buttonRef}
          className="text-white"
          isLoading={isLoading}
          color="success"
          onClick={handleSave}
        >
          저장
        </Button>
      </div>
      <ErrorBox errorMessage={error} />
    </div>
  );
}
