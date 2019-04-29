import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as TransactionRecord_pb from './TransactionRecord_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseHeader_pb from './ResponseHeader_pb';

export class CryptoGetAccountRecordsQuery extends jspb.Message {
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetAccountRecordsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetAccountRecordsQuery): CryptoGetAccountRecordsQuery.AsObject;
  static serializeBinaryToWriter(message: CryptoGetAccountRecordsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetAccountRecordsQuery;
  static deserializeBinaryFromReader(message: CryptoGetAccountRecordsQuery, reader: jspb.BinaryReader): CryptoGetAccountRecordsQuery;
}

export namespace CryptoGetAccountRecordsQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    accountid?: BasicTypes_pb.AccountID.AsObject,
  }
}

export class CryptoGetAccountRecordsResponse extends jspb.Message {
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  getRecordsList(): Array<TransactionRecord_pb.TransactionRecord>;
  setRecordsList(value: Array<TransactionRecord_pb.TransactionRecord>): void;
  clearRecordsList(): void;
  addRecords(value?: TransactionRecord_pb.TransactionRecord, index?: number): TransactionRecord_pb.TransactionRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetAccountRecordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetAccountRecordsResponse): CryptoGetAccountRecordsResponse.AsObject;
  static serializeBinaryToWriter(message: CryptoGetAccountRecordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetAccountRecordsResponse;
  static deserializeBinaryFromReader(message: CryptoGetAccountRecordsResponse, reader: jspb.BinaryReader): CryptoGetAccountRecordsResponse;
}

export namespace CryptoGetAccountRecordsResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    accountid?: BasicTypes_pb.AccountID.AsObject,
    recordsList: Array<TransactionRecord_pb.TransactionRecord.AsObject>,
  }
}

