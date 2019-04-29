import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';

export class CryptoDeleteClaimTransactionBody extends jspb.Message {
  getAccountidtodeletefrom(): BasicTypes_pb.AccountID | undefined;
  setAccountidtodeletefrom(value?: BasicTypes_pb.AccountID): void;
  hasAccountidtodeletefrom(): boolean;
  clearAccountidtodeletefrom(): void;

  getHashtodelete(): Uint8Array | string;
  getHashtodelete_asU8(): Uint8Array;
  getHashtodelete_asB64(): string;
  setHashtodelete(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoDeleteClaimTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoDeleteClaimTransactionBody): CryptoDeleteClaimTransactionBody.AsObject;
  static serializeBinaryToWriter(message: CryptoDeleteClaimTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoDeleteClaimTransactionBody;
  static deserializeBinaryFromReader(message: CryptoDeleteClaimTransactionBody, reader: jspb.BinaryReader): CryptoDeleteClaimTransactionBody;
}

export namespace CryptoDeleteClaimTransactionBody {
  export type AsObject = {
    accountidtodeletefrom?: BasicTypes_pb.AccountID.AsObject,
    hashtodelete: Uint8Array | string,
  }
}

