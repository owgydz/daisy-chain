import { verifyHandshake } from "./handshake";

export class DaisyChain {
  async connect(payload: any) {
    const verified = verifyHandshake(payload);

    console.log("Connected peer:", verified.userId);

    return true;
  }
}