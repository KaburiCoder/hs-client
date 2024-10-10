'use server'

import { apiPaths } from "@/shared/paths";
import { axServer } from "../ax-server";

type TokenType = "changePw";
interface ValidateTokenDto {
  tokenType: TokenType;
  token: string;
}

interface ResponseValidateTokenDto {
  userId: string;
  token: string;
  tokenType: TokenType;
  expiredAt: Date;
}

export async function validateToken({ token, tokenType }: ValidateTokenDto): Promise<ResponseValidateTokenDto | undefined> {
  try {
    const url = apiPaths.token.validate(token);
    const response = await axServer().post(url, {
      tokenType,
    });
    return response.data
  } catch (error) {
    console.log(error);
  }
}