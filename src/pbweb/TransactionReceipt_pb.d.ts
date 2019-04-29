import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as ResponseCode_pb from './ResponseCode_pb';
import * as ExchangeRate_pb from './ExchangeRate_pb';

export class TransactionReceipt extends jspb.Message {
  getStatus(): ResponseCode_pb.ResponseCodeEnum;
  setStatus(value: ResponseCode_pb.ResponseCodeEnum): void;

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

  getExchangerate(): ExchangeRate_pb.ExchangeRateSet | undefined;
  setExchangerate(value?: ExchangeRate_pb.ExchangeRateSet): void;
  hasExchangerate(): boolean;
  clearExchangerate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionReceipt): TransactionReceipt.AsObject;
  static serializeBinaryToWriter(message: TransactionReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionReceipt;
  static deserializeBinaryFromReader(message: TransactionReceipt, reader: jspb.BinaryReader): TransactionReceipt;
}

export namespace TransactionReceipt {
  export type AsObject = {
    status: ResponseCode_pb.ResponseCodeEnum,
    accountid?: BasicTypes_pb.AccountID.AsObject,
    fileid?: BasicTypes_pb.FileID.AsObject,
    contractid?: BasicTypes_pb.ContractID.AsObject,
    exchangerate?: ExchangeRate_pb.ExchangeRateSet.AsObject,
  }
}

