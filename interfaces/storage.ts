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

interface BucketLstResB {
  buckets: {
    name: string;
    type: 'OS' | 'S3' | 'FTP' | 'EP';
    ownerName: string;
  }[];
}

interface UploadReqB {
  bucket: string;
  path: string;
  filename: string;
}

interface MvDirentReqB {
  bucket: string;
  srcPath: string;
  destPath: string;
}

// P, ResB, ReqB, ReqQ, Locs
export declare namespace StorageIO {
  type ReadDir = ExTypes<unknown, ReadDirResB, ReadDirReqB>;
  type Mkdir = ExTypes<unknown, unknown, MkdirReqB>;
  type RmDirent = ExTypes<unknown, unknown, RmDirentReqB>;
  type Download = ExTypes<unknown, unknown, unknown, DownloadReqQ>;
  type BucketLst = ExTypes<unknown, BucketLstResB>;
  // eslint-disable-next-line
  type Upload = ExTypes<{}, unknown, UploadReqB, {}>;
  type MvDirent = ExTypes<unknown, unknown, MvDirentReqB>;
}
