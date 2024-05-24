export interface User {
  userId: string;
  roomKey: string;
  iat: number;
  admin?: boolean;
  exp?: number;
}
