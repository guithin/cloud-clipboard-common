import { ExTypes } from './base';

interface ReadDirReqB {
  bucket: string;
  path: string;

  sToken?: string;
}

interface DirentInfo {
  name: string;
  size: number;
  atime: Date; // access time
  mtime: Date; // modify time
  ctime: Date; // change time
  birthtime: Date; // create time
  isFile: boolean;
}

interface ReadDirResB {
  result: DirentInfo[];
}

interface MkdirReqB {
  bucket: string;
  path: string;
}

interface RmDirentReqB {
  bucket: string;
  path: string;
}

interface DownloadReqQ {
  bucket: string;
  path: string;

  sToken?: string;
}

// P, ResB, ReqB, ReqQ, Locs
export declare namespace StorageIO {
  type ReadDir = ExTypes<{}, ReadDirResB, ReadDirReqB>;
  type Mkdir = ExTypes<{}, {}, MkdirReqB>;
  type RmDirent = ExTypes<{}, {}, RmDirentReqB>;
  type Download = ExTypes<{}, {}, {}, DownloadReqQ>;
}
