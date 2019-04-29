import * as jspb from "google-protobuf"

import * as TransactionResponse_pb from './TransactionResponse_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseCode_pb from './ResponseCode_pb';

export class ResponseHeader extends jspb.Message {
  getNodetransactionprecheckcode(): ResponseCode_pb.ResponseCodeEnum;
  setNodetransactionprecheckcode(value: ResponseCode_pb.ResponseCodeEnum): void;

  getResponsetype(): QueryHeader_pb.ResponseType;
  setResponsetype(value: QueryHeader_pb.ResponseType): void;

  getCost(): number;
  setCost(value: number): void;

  getStateproof(): Uint8Array | string;
  getStateproof_asU8(): Uint8Array;
  getStateproof_asB64(): string;
  setStateproof(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseHeader): ResponseHeader.AsObject;
  static serializeBinaryToWriter(message: ResponseHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseHeader;
  static deserializeBinaryFromReader(message: ResponseHeader, reader: jspb.BinaryReader): ResponseHeader;
}

export namespace ResponseHeader {
  export type AsObject = {
    nodetransactionprecheckcode: ResponseCode_pb.ResponseCodeEnum,
    responsetype: QueryHeader_pb.ResponseType,
    cost: number,
    stateproof: Uint8Array | string,
  }
}

