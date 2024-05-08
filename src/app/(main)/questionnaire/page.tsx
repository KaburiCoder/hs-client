import * as UserCookie from "@/server/cookies/user-cookie";
import React from "react";
import QuestionaireBody from "@/components/(main)/questionnaire/questionnaire-body";
 
export default async function QuestionairePage() {
  const user = await UserCookie.getUser();
  return <QuestionaireBody />;
}
