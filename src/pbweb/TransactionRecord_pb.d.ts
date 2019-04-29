import * as jspb from "google-protobuf"

import * as Timestamp_pb from './Timestamp_pb';
import * as BasicTypes_pb from './BasicTypes_pb';
import * as TransactionReceipt_pb from './TransactionReceipt_pb';
import * as CryptoTransfer_pb from './CryptoTransfer_pb';
import * as ContractCallLocal_pb from './ContractCallLocal_pb';

export class TransactionRecord extends jspb.Message {
  getReceipt(): TransactionReceipt_pb.TransactionReceipt | undefined;
  setReceipt(value?: TransactionReceipt_pb.TransactionReceipt): void;
  hasReceipt(): boolean;
  clearReceipt(): void;

  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  getConsensustimestamp(): Timestamp_pb.Timestamp | undefined;
  setConsensustimestamp(value?: Timestamp_pb.Timestamp): void;
  hasConsensustimestamp(): boolean;
  clearConsensustimestamp(): void;

  getTransactionid(): BasicTypes_pb.TransactionID | undefined;
  setTransactionid(value?: BasicTypes_pb.TransactionID): void;
  hasTransactionid(): boolean;
  clearTransactionid(): void;

  getMemo(): string;
  setMemo(value: string): void;

  getTransactionfee(): number;
  setTransactionfee(value: number): void;

  getContractcallresult(): ContractCallLocal_pb.ContractFunctionResult | undefined;
  setContractcallresult(value?: ContractCallLocal_pb.ContractFunctionResult): void;
  hasContractcallresult(): boolean;
  clearContractcallresult(): void;
  hasContractcallresult(): boolean;

  getContractcreateresult(): ContractCallLocal_pb.ContractFunctionResult | undefined;
  setContractcreateresult(value?: ContractCallLocal_pb.ContractFunctionResult): void;
  hasContractcreateresult(): boolean;
  clearContractcreateresult(): void;
  hasContractcreateresult(): boolean;

  getTransferlist(): CryptoTransfer_pb.TransferList | undefined;
  setTransferlist(value?: CryptoTransfer_pb.TransferList): void;
  hasTransferlist(): boolean;
  clearTransferlist(): void;
  hasTransferlist(): boolean;

  getBodyCase(): TransactionRecord.BodyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRecord.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRecord): TransactionRecord.AsObject;
  static serializeBinaryToWriter(message: TransactionRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRecord;
  static deserializeBinaryFromReader(message: TransactionRecord, reader: jspb.BinaryReader): TransactionRecord;
}

export namespace TransactionRecord {
  export type AsObject = {
    receipt?: TransactionReceipt_pb.TransactionReceipt.AsObject,
    transactionhash: Uint8Array | string,
    consensustimestamp?: Timestamp_pb.Timestamp.AsObject,
    transactionid?: BasicTypes_pb.TransactionID.AsObject,
    memo: string,
    transactionfee: number,
    contractcallresult?: ContractCallLocal_pb.ContractFunctionResult.AsObject,
    contractcreateresult?: ContractCallLocal_pb.ContractFunctionResult.AsObject,
    transferlist?: CryptoTransfer_pb.TransferList.AsObject,
  }

  export enum BodyCase { 
    BODY_NOT_SET = 0,
    CONTRACTCALLRESULT = 7,
    CONTRACTCREATERESULT = 8,
    TRANSFERLIST = 9,
  }
}

