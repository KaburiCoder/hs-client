import { scrollById } from "@/lib/utils/scroll.util";

export const useFocus = () => {
  function focusById(id: string) {
    const item = document.getElementById(id)
    item?.focus()
  }

  function focusDelay(id: string) {
    setTimeout(() => focusById(id), 100)
  }

  const conditions = {
    weekday: (value: number | undefined) => value ? value >= 0 && value <= 7 : false,
    hour: (value: number | undefined) => (value ?? 0) >= 3,
    minute: (value: number | undefined) => (value ?? 0) >= 7,
  }

  function setValue(
    prevValue: any,
    setFunc: (value: any) => void,
    toScrollId: string,
    value: any,
  ) {
    if (prevValue !== value) {
      setFunc(value);
      scrollById(toScrollId);
    }
  }

  function setValueTrg(prevValue: any, setFunc: (value: any) => void, { focus, scroll }: SetValueCdtArgs, value: any) {
    if (prevValue === value) return;

    setFunc(value);
    if (value === scroll.trigger) {
      scrollById(scroll.id);
    } else if (value === focus.trigger) {
      focusDelay(focus.id);
    }
  }

  function setNumValueTrg(
    prevValue: number | undefined,
    setFunc: (value: number | undefined) => void,
    { focus, scroll }: NumConditionArgs,
    value: number | undefined) {
    if (prevValue === value) return;

    setFunc(value);

    if (focus?.condition(value)) {
      focusById(focus.id);
    }

    if (scroll?.condition(value)) {
      scrollById(scroll.id);
    }
  }

  return { conditions, setValue, setValueTrg, setNumValueTrg }
}

interface SetValueCdtArgs {
  focus: {
    id: string;
    trigger: any;
  };
  scroll: {
    id: string;
    trigger: any;
  };
}

interface NumConditionArgs {
  focus?: {
    id: string;
    condition: (value: number | undefined) => boolean;
  };
  scroll?: {
    id: string;
    condition: (value: number | undefined) => boolean;
  };
}