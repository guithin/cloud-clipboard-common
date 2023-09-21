import { ExTypes } from './base';

interface ExampleReqQ {
  id: string;
}

// P, ResB, ReqB, ReqQ, Locs
export declare namespace ExampleIO {
  type ExampleaApi = ExTypes<{}, {}, {}, ExampleReqQ>;
}
