import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { LockPwInputs } from "./body-components/lock-pw-inputs";
import { ChangePwForm } from "../../../ChangePwInputs";
import { ChangeEmailInputs } from "./body-components/change-email-inputs";
import ChangePwInputs from "./body-components/change-pw-inputs";

export default function SettingBody() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Accordion>
          <AccordionItem key="1" title="잠금 비밀번호 설정">
            <LockPwInputs />
          </AccordionItem>
          <AccordionItem key="2" title="비밀번호 변경">
            <ChangePwInputs />
          </AccordionItem>
          <AccordionItem key="3" title="Email 변경">
            <ChangeEmailInputs />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
