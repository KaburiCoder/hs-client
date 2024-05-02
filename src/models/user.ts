export interface User {
  userId: string;
  roomKey: string;
  iat: number;
  exp?: number;
}
