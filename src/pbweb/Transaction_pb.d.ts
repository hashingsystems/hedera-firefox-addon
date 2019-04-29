import * as jspb from "google-protobuf"

import * as Duration_pb from './Duration_pb';
import * as BasicTypes_pb from './BasicTypes_pb';
import * as TransactionBody_pb from './TransactionBody_pb';

export class Transaction extends jspb.Message {
  getBody(): TransactionBody_pb.TransactionBody | undefined;
  setBody(value?: TransactionBody_pb.TransactionBody): void;
  hasBody(): boolean;
  clearBody(): void;
  hasBody(): boolean;

  getBodybytes(): Uint8Array | string;
  getBodybytes_asU8(): Uint8Array;
  getBodybytes_asB64(): string;
  setBodybytes(value: Uint8Array | string): void;
  hasBodybytes(): boolean;

  getSigs(): BasicTypes_pb.SignatureList | undefined;
  setSigs(value?: BasicTypes_pb.SignatureList): void;
  hasSigs(): boolean;
  clearSigs(): void;

  getSigmap(): BasicTypes_pb.SignatureMap | undefined;
  setSigmap(value?: BasicTypes_pb.SignatureMap): void;
  hasSigmap(): boolean;
  clearSigmap(): void;

  getBodydataCase(): Transaction.BodydataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    body?: TransactionBody_pb.TransactionBody.AsObject,
    bodybytes: Uint8Array | string,
    sigs?: BasicTypes_pb.SignatureList.AsObject,
    sigmap?: BasicTypes_pb.SignatureMap.AsObject,
  }

  export enum BodydataCase { 
    BODYDATA_NOT_SET = 0,
    BODY = 1,
    BODYBYTES = 4,
  }
}

