import * as jspb from "google-protobuf"

import * as Timestamp_pb from './Timestamp_pb';
import * as BasicTypes_pb from './BasicTypes_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseHeader_pb from './ResponseHeader_pb';

export class FileGetInfoQuery extends jspb.Message {
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getFileid(): BasicTypes_pb.FileID | undefined;
  setFileid(value?: BasicTypes_pb.FileID): void;
  hasFileid(): boolean;
  clearFileid(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileGetInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: FileGetInfoQuery): FileGetInfoQuery.AsObject;
  static serializeBinaryToWriter(message: FileGetInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileGetInfoQuery;
  static deserializeBinaryFromReader(message: FileGetInfoQuery, reader: jspb.BinaryReader): FileGetInfoQuery;
}

export namespace FileGetInfoQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    fileid?: BasicTypes_pb.FileID.AsObject,
  }
}

export class FileGetInfoResponse extends jspb.Message {
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getFileinfo(): FileGetInfoResponse.FileInfo | undefined;
  setFileinfo(value?: FileGetInfoResponse.FileInfo): void;
  hasFileinfo(): boolean;
  clearFileinfo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileGetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileGetInfoResponse): FileGetInfoResponse.AsObject;
  static serializeBinaryToWriter(message: FileGetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileGetInfoResponse;
  static deserializeBinaryFromReader(message: FileGetInfoResponse, reader: jspb.BinaryReader): FileGetInfoResponse;
}

export namespace FileGetInfoResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    fileinfo?: FileGetInfoResponse.FileInfo.AsObject,
  }

  export class FileInfo extends jspb.Message {
    getFileid(): BasicTypes_pb.FileID | undefined;
    setFileid(value?: BasicTypes_pb.FileID): void;
    hasFileid(): boolean;
    clearFileid(): void;

    getSize(): number;
    setSize(value: number): void;

    getExpirationtime(): Timestamp_pb.Timestamp | undefined;
    setExpirationtime(value?: Timestamp_pb.Timestamp): void;
    hasExpirationtime(): boolean;
    clearExpirationtime(): void;

    getDeleted(): boolean;
    setDeleted(value: boolean): void;

    getKeys(): BasicTypes_pb.KeyList | undefined;
    setKeys(value?: BasicTypes_pb.KeyList): void;
    hasKeys(): boolean;
    clearKeys(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
    static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfo;
    static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
  }

  export namespace FileInfo {
    export type AsObject = {
      fileid?: BasicTypes_pb.FileID.AsObject,
      size: number,
      expirationtime?: Timestamp_pb.Timestamp.AsObject,
      deleted: boolean,
      keys?: BasicTypes_pb.KeyList.AsObject,
    }
  }

}

