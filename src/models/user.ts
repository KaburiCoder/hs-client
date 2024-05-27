export interface User {
  userId: string;
  roomKey: string;
  email: string;
  orgName: string;
  iat: number;
  admin?: boolean;
  exp?: number;
}
