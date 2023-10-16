import { ExTypes } from './base';

interface LoginReqB {
  userId: string;
  password: string;
}

interface LoginResB {
  token: string;
  name: string;
}

// P, ResB, ReqB, ReqQ, Locs
export declare namespace AuthIO {
  type Login = ExTypes<unknown, LoginResB, LoginReqB>;
}
