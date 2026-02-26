import { verifyAccess } from "../cloud/auth/jwt";

export interface HandshakePayload {
  token: string;
  publicKey: string;
}

export function verifyHandshake(payload: HandshakePayload) {
  const user = verifyAccess(payload.token);

  if (!user) {
    throw new Error("Invalid handshake");
  }

  return {
    userId: (user as any).userId,
    publicKey: payload.publicKey
  };
}