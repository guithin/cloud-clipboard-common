import { WSTypes, ExTypes } from './base';

interface ExampleReqQ {
  id: string;
}

// P, ResB, ReqB, ReqQ, Locs
export declare namespace ExampleIO {
  type ExampleaApi = ExTypes<{}, {}, {}, ExampleReqQ>;

  interface ExampleWSListen {
    ExampleWSL: { id: number };
  }

  interface ExampleWSEmit {
    ExampleWSE: WSTypes<{ ids: number[] }>;
  }
}
