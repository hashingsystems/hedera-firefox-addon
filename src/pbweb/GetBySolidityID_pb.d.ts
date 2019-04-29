import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseHeader_pb from './ResponseHeader_pb';

export class GetBySolidityIDQuery extends jspb.Message {
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getSolidityid(): string;
  setSolidityid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBySolidityIDQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GetBySolidityIDQuery): GetBySolidityIDQuery.AsObject;
  static serializeBinaryToWriter(message: GetBySolidityIDQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBySolidityIDQuery;
  static deserializeBinaryFromReader(message: GetBySolidityIDQuery, reader: jspb.BinaryReader): GetBySolidityIDQuery;
}

export namespace GetBySolidityIDQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    solidityid: string,
  }
}

export class GetBySolidityIDResponse extends jspb.Message {
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  getFileid(): BasicTypes_pb.FileID | undefined;
  setFileid(value?: BasicTypes_pb.FileID): void;
  hasFileid(): boolean;
  clearFileid(): void;

  getContractid(): BasicTypes_pb.ContractID | undefined;
  setContractid(value?: BasicTypes_pb.ContractID): void;
  hasContractid(): boolean;
  clearContractid(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBySolidityIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBySolidityIDResponse): GetBySolidityIDResponse.AsObject;
  static serializeBinaryToWriter(message: GetBySolidityIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBySolidityIDResponse;
  static deserializeBinaryFromReader(message: GetBySolidityIDResponse, reader: jspb.BinaryReader): GetBySolidityIDResponse;
}

export namespace GetBySolidityIDResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    accountid?: BasicTypes_pb.AccountID.AsObject,
    fileid?: BasicTypes_pb.FileID.AsObject,
    contractid?: BasicTypes_pb.ContractID.AsObject,
  }
}

