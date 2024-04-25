'use client'
import {
  EDrinkingFreqType,
  IDrinkingFrequency,
  IDrinkingKind,
} from "@/lib/interfaces/drink";
import { ISmokingResult } from "@/lib/interfaces/smoking";
import { useQuestionStore } from "@/stores/question-store";
import { Button, Input } from "@nextui-org/react";
import React from "react";

export default function Confirms() {
  const {
    n1,
    n2,
    n3,
    n4,
    n4_1,
    n5,
    n5_1,
    n6,
    n6_1,
    n7,
    n7_1,
    n7_2,
    n8_1,
    n8_2,
    n9_1,
    n9_2,
    n10,
  } = useQuestionStore();

  function validQs() {
    /* n3 */
    if (n3 === undefined) {
      alert("n3 누락");
      return;
    }

    /* n4 */
    if (!valid4or5(n4, n4_1)) {
      return;
    }

    /* n5 */
    if (!valid4or5(n5, n5_1)) {
      return;
    }

    /* n6 */
    if (n6 === undefined) {
      alert("n6 누락");
      return;
    }

    /* n7 */
    const doDrink = n7?.type !== 'doNot';
    if (n7?.type === undefined) {
      alert("n7 type 누락");
      return;
    } else if (doDrink) {
      if (!n7.frequency) {
        alert("n7 frequency 누락");
        return;
      }
    }

    if (doDrink) {
      if (!checkNumbersGtZero(n7_1)) {
        alert("n7_1 누락");
        return;
      }

      if (!checkNumbersGtZero(n7_2)) {
        alert("n7_2 누락");
        return;
      }
    }

    /* n8 */
    if (!n8_1) {
      alert("n8_1 누락");
      return;
    }
    if (!n8_2?.hours) {
      alert("n8_2 hours 누락");
      return;
    }

    if (!n8_2?.minutes) {
      alert("n8_2 minutes 누락");
      return;
    }

    /* n9 */
    if (!n9_1) {
      alert("n9_1 누락");
      return;
    }
    if (!n9_2?.hours) {
      alert("n9_2 hours 누락");
      return;
    }

    if (!n9_2?.minutes) {
      alert("n9_2 minutes 누락");
      return;
    }

    /* n10 */
    if (!n10) {
      alert("n10");
      return;
    }
  }

  function handleConfirm(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    const history = {
      n1,
      n2,
      n3,
    };
    const smoking = {
      n4,
      n4_1: n4 ? n4_1 : undefined,
      n5,
      n5_1,
      n6,
      n6_1,
    };

    const drink = {
      n7,
      n7_1,
      n7_2,
    };

    const activity = {
      n8_1,
      n8_2,
      n9_1,
      n9_2,
      n10,
    };

    const body = JSON.stringify({ history, smoking, drink, activity });
    // fetch("http://localhost:8000/questionnare")
    fetch("http://localhost:8000/questionnare", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
      cache: "no-cache",
    });
    // validQs();
  }

  return (
    <div className="p-4">
      <Input
        color="primary"
        classNames={{
          inputWrapper: "ring-2 hover:bg-red-300 bg-red-200 ring-red-500",
        }}
        errorMessage="adas"
      />
      <Button className="w-full" color="primary" onClick={handleConfirm}>
        작성 완료
      </Button>
    </div>
  );
}

function valid4or5(
  smoking: boolean | undefined,
  smokingResult: ISmokingResult | undefined,
) {
  if (smoking === undefined) {
    alert("n5 누락");
    return false;
  }
  if (smoking) {
    if (smokingResult?.smoking === undefined) {
      alert("n5_1 누락");
      return false;
    }
    if (!smokingResult.term?.totalYears) {
      alert("n5_1 총 년수 누락");
      return false;
    }
    if (!smokingResult.term?.cigarettes) {
      alert("n5_1 개비 수 누락");
      return false;
    }
    if (!smokingResult.smoking && !smokingResult.term?.quitYears) {
      alert("끊은 년수 누락");
      return false;
    }
  }
  return true;
}

function checkNumbersGtZero(obj: any) {
  for (const key in obj) {
    const myObj = obj[key];
    if (typeof myObj === "number") {
      if (myObj > 0) {
        return true;
      }
    }

    if (typeof myObj === "object") {
      if (checkNumbersGtZero(myObj)) {
        return true;
      }
    }
  }
  return false;
}
