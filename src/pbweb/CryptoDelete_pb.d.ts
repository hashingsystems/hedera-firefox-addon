import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';

export class CryptoDeleteTransactionBody extends jspb.Message {
  getTransferaccountid(): BasicTypes_pb.AccountID | undefined;
  setTransferaccountid(value?: BasicTypes_pb.AccountID): void;
  hasTransferaccountid(): boolean;
  clearTransferaccountid(): void;

  getDeleteaccountid(): BasicTypes_pb.AccountID | undefined;
  setDeleteaccountid(value?: BasicTypes_pb.AccountID): void;
  hasDeleteaccountid(): boolean;
  clearDeleteaccountid(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoDeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoDeleteTransactionBody): CryptoDeleteTransactionBody.AsObject;
  static serializeBinaryToWriter(message: CryptoDeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoDeleteTransactionBody;
  static deserializeBinaryFromReader(message: CryptoDeleteTransactionBody, reader: jspb.BinaryReader): CryptoDeleteTransactionBody;
}

export namespace CryptoDeleteTransactionBody {
  export type AsObject = {
    transferaccountid?: BasicTypes_pb.AccountID.AsObject,
    deleteaccountid?: BasicTypes_pb.AccountID.AsObject,
  }
}

