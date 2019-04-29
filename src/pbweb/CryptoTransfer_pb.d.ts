import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';

export class AccountAmount extends jspb.Message {
  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAmount.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAmount): AccountAmount.AsObject;
  static serializeBinaryToWriter(message: AccountAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAmount;
  static deserializeBinaryFromReader(message: AccountAmount, reader: jspb.BinaryReader): AccountAmount;
}

export namespace AccountAmount {
  export type AsObject = {
    accountid?: BasicTypes_pb.AccountID.AsObject,
    amount: number,
  }
}

export class TransferList extends jspb.Message {
  getAccountamountsList(): Array<AccountAmount>;
  setAccountamountsList(value: Array<AccountAmount>): void;
  clearAccountamountsList(): void;
  addAccountamounts(value?: AccountAmount, index?: number): AccountAmount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferList.AsObject;
  static toObject(includeInstance: boolean, msg: TransferList): TransferList.AsObject;
  static serializeBinaryToWriter(message: TransferList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferList;
  static deserializeBinaryFromReader(message: TransferList, reader: jspb.BinaryReader): TransferList;
}

export namespace TransferList {
  export type AsObject = {
    accountamountsList: Array<AccountAmount.AsObject>,
  }
}

export class CryptoTransferTransactionBody extends jspb.Message {
  getTransfers(): TransferList | undefined;
  setTransfers(value?: TransferList): void;
  hasTransfers(): boolean;
  clearTransfers(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoTransferTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoTransferTransactionBody): CryptoTransferTransactionBody.AsObject;
  static serializeBinaryToWriter(message: CryptoTransferTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoTransferTransactionBody;
  static deserializeBinaryFromReader(message: CryptoTransferTransactionBody, reader: jspb.BinaryReader): CryptoTransferTransactionBody;
}

export namespace CryptoTransferTransactionBody {
  export type AsObject = {
    transfers?: TransferList.AsObject,
  }
}

