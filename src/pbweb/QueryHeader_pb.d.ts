import * as jspb from "google-protobuf"

import * as Transaction_pb from './Transaction_pb';

export class QueryHeader extends jspb.Message {
  getPayment(): Transaction_pb.Transaction | undefined;
  setPayment(value?: Transaction_pb.Transaction): void;
  hasPayment(): boolean;
  clearPayment(): void;

  getResponsetype(): ResponseType;
  setResponsetype(value: ResponseType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryHeader.AsObject;
  static toObject(includeInstance: boolean, msg: QueryHeader): QueryHeader.AsObject;
  static serializeBinaryToWriter(message: QueryHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryHeader;
  static deserializeBinaryFromReader(message: QueryHeader, reader: jspb.BinaryReader): QueryHeader;
}

export namespace QueryHeader {
  export type AsObject = {
    payment?: Transaction_pb.Transaction.AsObject,
    responsetype: ResponseType,
  }
}

export enum ResponseType { 
  ANSWER_ONLY = 0,
  ANSWER_STATE_PROOF = 1,
  COST_ANSWER = 2,
  COST_ANSWER_STATE_PROOF = 3,
}
