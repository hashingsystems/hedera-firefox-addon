import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';

export class ContractCallTransactionBody extends jspb.Message {
  getContractid(): BasicTypes_pb.ContractID | undefined;
  setContractid(value?: BasicTypes_pb.ContractID): void;
  hasContractid(): boolean;
  clearContractid(): void;

  getGas(): number;
  setGas(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFunctionparameters(): Uint8Array | string;
  getFunctionparameters_asU8(): Uint8Array;
  getFunctionparameters_asB64(): string;
  setFunctionparameters(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractCallTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ContractCallTransactionBody): ContractCallTransactionBody.AsObject;
  static serializeBinaryToWriter(message: ContractCallTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractCallTransactionBody;
  static deserializeBinaryFromReader(message: ContractCallTransactionBody, reader: jspb.BinaryReader): ContractCallTransactionBody;
}

export namespace ContractCallTransactionBody {
  export type AsObject = {
    contractid?: BasicTypes_pb.ContractID.AsObject,
    gas: number,
    amount: number,
    functionparameters: Uint8Array | string,
  }
}

