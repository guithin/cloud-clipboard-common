import { WSTypes, ExTypes } from './base';

interface ExampleReqQ {
  id: string;
}

// P, ResB, ReqB, ReqQ, Locs
export declare namespace ExampleIO {
  type ExampleaApi = ExTypes<unknown, unknown, unknown, ExampleReqQ>;

  interface ExampleWSListen {
    ExampleWSL: { id: number };
    EnterRoom: { roomId: string };
  }

  interface ExampleWSEmit {
    ExampleWSE: WSTypes<{ ids: number[] }>;
  }
}
