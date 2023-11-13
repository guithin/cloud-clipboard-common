import { ExTypes } from './base';

interface MsgClientFmt {
  bucket: string;
  msg: {
    type: 'text',
    content: string;
  } | {
    type: 'file',
    content: {
      name: string;
      buffer: Buffer;
    }[];
  };
}

interface MsgServerFmt {
  // bucketid - machineidx - idx
  id: `${number}-${number}-${number}`;
  bucket: string;
  msg: {
    type: 'text',
    content: string;
  } | {
    type: 'file',
    content: {
      name: string;
      storagePath: string;
    }[];
  };
}

interface EnterRoomReqB {
  bucket: string;
}

// P, ResB, ReqB, ReqQ, Locs
export declare namespace ClipboardIO {
  type EnterRoom = ExTypes<unknown, MsgServerFmt[], unknown, EnterRoomReqB>;

  interface ClipboardWSL {
    EnterRoom: {
      bucket: string;
    }
    LeaveRoom: void;
    MsgArrive: MsgClientFmt;
  }

  interface ClipboardWSE {

  }
}