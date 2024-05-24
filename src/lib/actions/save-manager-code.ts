'use server'
import { axClient } from "@/lib/api/ax-client";
import { apiPaths, paths } from "@/paths";
import { flattenJoiError } from "health-screening-shared/joi";
import Joi from "joi";
import { ActionResultBase } from "./common/action-result-base";
import { catchActionApi } from "./common/catch-action-api";
import { axServer } from "../api/ax-server";
import { revalidateTag } from "next/cache";

interface SaveManagerCodeDto {
  managerCode: string;
}

const schema = Joi.object<SaveManagerCodeDto>({
  managerCode: Joi.string().required().messages({ "string.empty": "코드를 입력하세요." }),
})

export interface SaveManagerCodeResult extends ActionResultBase<boolean, Partial<SaveManagerCodeDto>> { }

export async function saveManagerCode(_: SaveManagerCodeResult, formData: FormData): Promise<SaveManagerCodeResult> {
  const { error, value } = schema.validate(Object.fromEntries(formData));
  const result = await catchActionApi(error, () => axServer().post(apiPaths.adminSettings, {
    managerCode: value.managerCode
  }));

  if (result.status === 'error') return result;

  revalidateTag(paths.adminSettings("common"))
  return { status: 'success' }
}

