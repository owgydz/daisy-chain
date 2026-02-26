export class Peer {
  constructor(private userId: string) {}

  send(data: any) {
    // encrypted channel send
  }

  receive(data: any) {
    // decrypt + validate
  }
}