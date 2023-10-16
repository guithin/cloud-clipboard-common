// eslint-disable-next-line
export interface ExTypes<P = unknown, ResB = unknown, ReqB = unknown, ReqQ = unknown, Locs = {}> {
  P: P; // path params
  ResB: ResB; // response body
  ReqB: ReqB; // request body
  ReqQ: ReqQ; // request query
  Locs: Locs; // local (server use)
}

export type WSTypes<Body = unknown> = (p: Body) => void;

export type StringNumber = `${number}`;
