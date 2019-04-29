import * as jspb from "google-protobuf"

import * as Timestamp_pb from './Timestamp_pb';
import * as Duration_pb from './Duration_pb';

export class ShardID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShardID.AsObject;
  static toObject(includeInstance: boolean, msg: ShardID): ShardID.AsObject;
  static serializeBinaryToWriter(message: ShardID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShardID;
  static deserializeBinaryFromReader(message: ShardID, reader: jspb.BinaryReader): ShardID;
}

export namespace ShardID {
  export type AsObject = {
    shardnum: number,
  }
}

export class RealmID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealmID.AsObject;
  static toObject(includeInstance: boolean, msg: RealmID): RealmID.AsObject;
  static serializeBinaryToWriter(message: RealmID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealmID;
  static deserializeBinaryFromReader(message: RealmID, reader: jspb.BinaryReader): RealmID;
}

export namespace RealmID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
  }
}

export class AccountID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  getAccountnum(): number;
  setAccountnum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountID.AsObject;
  static toObject(includeInstance: boolean, msg: AccountID): AccountID.AsObject;
  static serializeBinaryToWriter(message: AccountID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountID;
  static deserializeBinaryFromReader(message: AccountID, reader: jspb.BinaryReader): AccountID;
}

export namespace AccountID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    accountnum: number,
  }
}

export class FileID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  getFilenum(): number;
  setFilenum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileID.AsObject;
  static toObject(includeInstance: boolean, msg: FileID): FileID.AsObject;
  static serializeBinaryToWriter(message: FileID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileID;
  static deserializeBinaryFromReader(message: FileID, reader: jspb.BinaryReader): FileID;
}

export namespace FileID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    filenum: number,
  }
}

export class ContractID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  getContractnum(): number;
  setContractnum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractID.AsObject;
  static toObject(includeInstance: boolean, msg: ContractID): ContractID.AsObject;
  static serializeBinaryToWriter(message: ContractID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractID;
  static deserializeBinaryFromReader(message: ContractID, reader: jspb.BinaryReader): ContractID;
}

export namespace ContractID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    contractnum: number,
  }
}

export class TransactionID extends jspb.Message {
  getTransactionvalidstart(): Timestamp_pb.Timestamp | undefined;
  setTransactionvalidstart(value?: Timestamp_pb.Timestamp): void;
  hasTransactionvalidstart(): boolean;
  clearTransactionvalidstart(): void;

  getAccountid(): AccountID | undefined;
  setAccountid(value?: AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionID.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionID): TransactionID.AsObject;
  static serializeBinaryToWriter(message: TransactionID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionID;
  static deserializeBinaryFromReader(message: TransactionID, reader: jspb.BinaryReader): TransactionID;
}

export namespace TransactionID {
  export type AsObject = {
    transactionvalidstart?: Timestamp_pb.Timestamp.AsObject,
    accountid?: AccountID.AsObject,
  }
}

export class Key extends jspb.Message {
  getContractid(): ContractID | undefined;
  setContractid(value?: ContractID): void;
  hasContractid(): boolean;
  clearContractid(): void;
  hasContractid(): boolean;

  getEd25519(): Uint8Array | string;
  getEd25519_asU8(): Uint8Array;
  getEd25519_asB64(): string;
  setEd25519(value: Uint8Array | string): void;
  hasEd25519(): boolean;

  getRsa3072(): Uint8Array | string;
  getRsa3072_asU8(): Uint8Array;
  getRsa3072_asB64(): string;
  setRsa3072(value: Uint8Array | string): void;
  hasRsa3072(): boolean;

  getEcdsa384(): Uint8Array | string;
  getEcdsa384_asU8(): Uint8Array;
  getEcdsa384_asB64(): string;
  setEcdsa384(value: Uint8Array | string): void;
  hasEcdsa384(): boolean;

  getThresholdkey(): ThresholdKey | undefined;
  setThresholdkey(value?: ThresholdKey): void;
  hasThresholdkey(): boolean;
  clearThresholdkey(): void;
  hasThresholdkey(): boolean;

  getKeylist(): KeyList | undefined;
  setKeylist(value?: KeyList): void;
  hasKeylist(): boolean;
  clearKeylist(): void;
  hasKeylist(): boolean;

  getKeyCase(): Key.KeyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    contractid?: ContractID.AsObject,
    ed25519: Uint8Array | string,
    rsa3072: Uint8Array | string,
    ecdsa384: Uint8Array | string,
    thresholdkey?: ThresholdKey.AsObject,
    keylist?: KeyList.AsObject,
  }

  export enum KeyCase { 
    KEY_NOT_SET = 0,
    CONTRACTID = 1,
    ED25519 = 2,
    RSA_3072 = 3,
    ECDSA_384 = 4,
    THRESHOLDKEY = 5,
    KEYLIST = 6,
  }
}

export class ThresholdKey extends jspb.Message {
  getThreshold(): number;
  setThreshold(value: number): void;

  getKeys(): KeyList | undefined;
  setKeys(value?: KeyList): void;
  hasKeys(): boolean;
  clearKeys(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdKey.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdKey): ThresholdKey.AsObject;
  static serializeBinaryToWriter(message: ThresholdKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdKey;
  static deserializeBinaryFromReader(message: ThresholdKey, reader: jspb.BinaryReader): ThresholdKey;
}

export namespace ThresholdKey {
  export type AsObject = {
    threshold: number,
    keys?: KeyList.AsObject,
  }
}

export class KeyList extends jspb.Message {
  getKeysList(): Array<Key>;
  setKeysList(value: Array<Key>): void;
  clearKeysList(): void;
  addKeys(value?: Key, index?: number): Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyList.AsObject;
  static toObject(includeInstance: boolean, msg: KeyList): KeyList.AsObject;
  static serializeBinaryToWriter(message: KeyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyList;
  static deserializeBinaryFromReader(message: KeyList, reader: jspb.BinaryReader): KeyList;
}

export namespace KeyList {
  export type AsObject = {
    keysList: Array<Key.AsObject>,
  }
}

export class Signature extends jspb.Message {
  getContract(): Uint8Array | string;
  getContract_asU8(): Uint8Array;
  getContract_asB64(): string;
  setContract(value: Uint8Array | string): void;
  hasContract(): boolean;

  getEd25519(): Uint8Array | string;
  getEd25519_asU8(): Uint8Array;
  getEd25519_asB64(): string;
  setEd25519(value: Uint8Array | string): void;
  hasEd25519(): boolean;

  getRsa3072(): Uint8Array | string;
  getRsa3072_asU8(): Uint8Array;
  getRsa3072_asB64(): string;
  setRsa3072(value: Uint8Array | string): void;
  hasRsa3072(): boolean;

  getEcdsa384(): Uint8Array | string;
  getEcdsa384_asU8(): Uint8Array;
  getEcdsa384_asB64(): string;
  setEcdsa384(value: Uint8Array | string): void;
  hasEcdsa384(): boolean;

  getThresholdsignature(): ThresholdSignature | undefined;
  setThresholdsignature(value?: ThresholdSignature): void;
  hasThresholdsignature(): boolean;
  clearThresholdsignature(): void;
  hasThresholdsignature(): boolean;

  getSignaturelist(): SignatureList | undefined;
  setSignaturelist(value?: SignatureList): void;
  hasSignaturelist(): boolean;
  clearSignaturelist(): void;
  hasSignaturelist(): boolean;

  getSignatureCase(): Signature.SignatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    contract: Uint8Array | string,
    ed25519: Uint8Array | string,
    rsa3072: Uint8Array | string,
    ecdsa384: Uint8Array | string,
    thresholdsignature?: ThresholdSignature.AsObject,
    signaturelist?: SignatureList.AsObject,
  }

  export enum SignatureCase { 
    SIGNATURE_NOT_SET = 0,
    CONTRACT = 1,
    ED25519 = 2,
    RSA_3072 = 3,
    ECDSA_384 = 4,
    THRESHOLDSIGNATURE = 5,
    SIGNATURELIST = 6,
  }
}

export class ThresholdSignature extends jspb.Message {
  getSigs(): SignatureList | undefined;
  setSigs(value?: SignatureList): void;
  hasSigs(): boolean;
  clearSigs(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdSignature.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdSignature): ThresholdSignature.AsObject;
  static serializeBinaryToWriter(message: ThresholdSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdSignature;
  static deserializeBinaryFromReader(message: ThresholdSignature, reader: jspb.BinaryReader): ThresholdSignature;
}

export namespace ThresholdSignature {
  export type AsObject = {
    sigs?: SignatureList.AsObject,
  }
}

export class SignatureList extends jspb.Message {
  getSigsList(): Array<Signature>;
  setSigsList(value: Array<Signature>): void;
  clearSigsList(): void;
  addSigs(value?: Signature, index?: number): Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureList.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureList): SignatureList.AsObject;
  static serializeBinaryToWriter(message: SignatureList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureList;
  static deserializeBinaryFromReader(message: SignatureList, reader: jspb.BinaryReader): SignatureList;
}

export namespace SignatureList {
  export type AsObject = {
    sigsList: Array<Signature.AsObject>,
  }
}

export class SignaturePair extends jspb.Message {
  getPubkeyprefix(): Uint8Array | string;
  getPubkeyprefix_asU8(): Uint8Array;
  getPubkeyprefix_asB64(): string;
  setPubkeyprefix(value: Uint8Array | string): void;

  getContract(): Uint8Array | string;
  getContract_asU8(): Uint8Array;
  getContract_asB64(): string;
  setContract(value: Uint8Array | string): void;
  hasContract(): boolean;

  getEd25519(): Uint8Array | string;
  getEd25519_asU8(): Uint8Array;
  getEd25519_asB64(): string;
  setEd25519(value: Uint8Array | string): void;
  hasEd25519(): boolean;

  getRsa3072(): Uint8Array | string;
  getRsa3072_asU8(): Uint8Array;
  getRsa3072_asB64(): string;
  setRsa3072(value: Uint8Array | string): void;
  hasRsa3072(): boolean;

  getEcdsa384(): Uint8Array | string;
  getEcdsa384_asU8(): Uint8Array;
  getEcdsa384_asB64(): string;
  setEcdsa384(value: Uint8Array | string): void;
  hasEcdsa384(): boolean;

  getSignatureCase(): SignaturePair.SignatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignaturePair.AsObject;
  static toObject(includeInstance: boolean, msg: SignaturePair): SignaturePair.AsObject;
  static serializeBinaryToWriter(message: SignaturePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignaturePair;
  static deserializeBinaryFromReader(message: SignaturePair, reader: jspb.BinaryReader): SignaturePair;
}

export namespace SignaturePair {
  export type AsObject = {
    pubkeyprefix: Uint8Array | string,
    contract: Uint8Array | string,
    ed25519: Uint8Array | string,
    rsa3072: Uint8Array | string,
    ecdsa384: Uint8Array | string,
  }

  export enum SignatureCase { 
    SIGNATURE_NOT_SET = 0,
    CONTRACT = 2,
    ED25519 = 3,
    RSA_3072 = 4,
    ECDSA_384 = 5,
  }
}

export class SignatureMap extends jspb.Message {
  getSigpairList(): Array<SignaturePair>;
  setSigpairList(value: Array<SignaturePair>): void;
  clearSigpairList(): void;
  addSigpair(value?: SignaturePair, index?: number): SignaturePair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureMap.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureMap): SignatureMap.AsObject;
  static serializeBinaryToWriter(message: SignatureMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureMap;
  static deserializeBinaryFromReader(message: SignatureMap, reader: jspb.BinaryReader): SignatureMap;
}

export namespace SignatureMap {
  export type AsObject = {
    sigpairList: Array<SignaturePair.AsObject>,
  }
}

export class FeeComponents extends jspb.Message {
  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getConstant(): number;
  setConstant(value: number): void;

  getBpt(): number;
  setBpt(value: number): void;

  getVpt(): number;
  setVpt(value: number): void;

  getRbs(): number;
  setRbs(value: number): void;

  getSbs(): number;
  setSbs(value: number): void;

  getGas(): number;
  setGas(value: number): void;

  getTv(): number;
  setTv(value: number): void;

  getBpr(): number;
  setBpr(value: number): void;

  getSbpr(): number;
  setSbpr(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeComponents.AsObject;
  static toObject(includeInstance: boolean, msg: FeeComponents): FeeComponents.AsObject;
  static serializeBinaryToWriter(message: FeeComponents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeComponents;
  static deserializeBinaryFromReader(message: FeeComponents, reader: jspb.BinaryReader): FeeComponents;
}

export namespace FeeComponents {
  export type AsObject = {
    min: number,
    max: number,
    constant: number,
    bpt: number,
    vpt: number,
    rbs: number,
    sbs: number,
    gas: number,
    tv: number,
    bpr: number,
    sbpr: number,
  }
}

export class TransactionFeeSchedule extends jspb.Message {
  getHederafunctionality(): HederaFunctionality;
  setHederafunctionality(value: HederaFunctionality): void;

  getFeedata(): FeeData | undefined;
  setFeedata(value?: FeeData): void;
  hasFeedata(): boolean;
  clearFeedata(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionFeeSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionFeeSchedule): TransactionFeeSchedule.AsObject;
  static serializeBinaryToWriter(message: TransactionFeeSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionFeeSchedule;
  static deserializeBinaryFromReader(message: TransactionFeeSchedule, reader: jspb.BinaryReader): TransactionFeeSchedule;
}

export namespace TransactionFeeSchedule {
  export type AsObject = {
    hederafunctionality: HederaFunctionality,
    feedata?: FeeData.AsObject,
  }
}

export class FeeData extends jspb.Message {
  getNodedata(): FeeComponents | undefined;
  setNodedata(value?: FeeComponents): void;
  hasNodedata(): boolean;
  clearNodedata(): void;

  getNetworkdata(): FeeComponents | undefined;
  setNetworkdata(value?: FeeComponents): void;
  hasNetworkdata(): boolean;
  clearNetworkdata(): void;

  getServicedata(): FeeComponents | undefined;
  setServicedata(value?: FeeComponents): void;
  hasServicedata(): boolean;
  clearServicedata(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeData.AsObject;
  static toObject(includeInstance: boolean, msg: FeeData): FeeData.AsObject;
  static serializeBinaryToWriter(message: FeeData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeData;
  static deserializeBinaryFromReader(message: FeeData, reader: jspb.BinaryReader): FeeData;
}

export namespace FeeData {
  export type AsObject = {
    nodedata?: FeeComponents.AsObject,
    networkdata?: FeeComponents.AsObject,
    servicedata?: FeeComponents.AsObject,
  }
}

export class FeeSchedule extends jspb.Message {
  getTransactionfeescheduleList(): Array<TransactionFeeSchedule>;
  setTransactionfeescheduleList(value: Array<TransactionFeeSchedule>): void;
  clearTransactionfeescheduleList(): void;
  addTransactionfeeschedule(value?: TransactionFeeSchedule, index?: number): TransactionFeeSchedule;

  getExpirytime(): Timestamp_pb.TimestampSeconds | undefined;
  setExpirytime(value?: Timestamp_pb.TimestampSeconds): void;
  hasExpirytime(): boolean;
  clearExpirytime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: FeeSchedule): FeeSchedule.AsObject;
  static serializeBinaryToWriter(message: FeeSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeSchedule;
  static deserializeBinaryFromReader(message: FeeSchedule, reader: jspb.BinaryReader): FeeSchedule;
}

export namespace FeeSchedule {
  export type AsObject = {
    transactionfeescheduleList: Array<TransactionFeeSchedule.AsObject>,
    expirytime?: Timestamp_pb.TimestampSeconds.AsObject,
  }
}

export class CurrentAndNextFeeSchedule extends jspb.Message {
  getCurrentfeeschedule(): FeeSchedule | undefined;
  setCurrentfeeschedule(value?: FeeSchedule): void;
  hasCurrentfeeschedule(): boolean;
  clearCurrentfeeschedule(): void;

  getNextfeeschedule(): FeeSchedule | undefined;
  setNextfeeschedule(value?: FeeSchedule): void;
  hasNextfeeschedule(): boolean;
  clearNextfeeschedule(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentAndNextFeeSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentAndNextFeeSchedule): CurrentAndNextFeeSchedule.AsObject;
  static serializeBinaryToWriter(message: CurrentAndNextFeeSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentAndNextFeeSchedule;
  static deserializeBinaryFromReader(message: CurrentAndNextFeeSchedule, reader: jspb.BinaryReader): CurrentAndNextFeeSchedule;
}

export namespace CurrentAndNextFeeSchedule {
  export type AsObject = {
    currentfeeschedule?: FeeSchedule.AsObject,
    nextfeeschedule?: FeeSchedule.AsObject,
  }
}

export class NodeAddress extends jspb.Message {
  getIpaddress(): Uint8Array | string;
  getIpaddress_asU8(): Uint8Array;
  getIpaddress_asB64(): string;
  setIpaddress(value: Uint8Array | string): void;

  getPortno(): number;
  setPortno(value: number): void;

  getMemo(): Uint8Array | string;
  getMemo_asU8(): Uint8Array;
  getMemo_asB64(): string;
  setMemo(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddress.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddress): NodeAddress.AsObject;
  static serializeBinaryToWriter(message: NodeAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddress;
  static deserializeBinaryFromReader(message: NodeAddress, reader: jspb.BinaryReader): NodeAddress;
}

export namespace NodeAddress {
  export type AsObject = {
    ipaddress: Uint8Array | string,
    portno: number,
    memo: Uint8Array | string,
  }
}

export class NodeAddressBook extends jspb.Message {
  getNodeaddressList(): Array<NodeAddress>;
  setNodeaddressList(value: Array<NodeAddress>): void;
  clearNodeaddressList(): void;
  addNodeaddress(value?: NodeAddress, index?: number): NodeAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddressBook.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddressBook): NodeAddressBook.AsObject;
  static serializeBinaryToWriter(message: NodeAddressBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddressBook;
  static deserializeBinaryFromReader(message: NodeAddressBook, reader: jspb.BinaryReader): NodeAddressBook;
}

export namespace NodeAddressBook {
  export type AsObject = {
    nodeaddressList: Array<NodeAddress.AsObject>,
  }
}

export enum HederaFunctionality { 
  NONE = 0,
  CryptoTransfer = 1,
  CryptoUpdate = 2,
  CryptoDelete = 3,
  CryptoAddClaim = 4,
  CryptoDeleteClaim = 5,
  ContractCall = 6,
  ContractCreate = 7,
  ContractUpdate = 8,
  FileCreate = 9,
  FileAppend = 10,
  FileUpdate = 11,
  FileDelete = 12,
  CryptoGetAccountBalance = 13,
  CryptoGetAccountRecords = 14,
  CryptoGetInfo = 15,
  ContractCallLocal = 16,
  ContractGetInfo = 17,
  ContractGetBytecode = 18,
  GetBySolidityID = 19,
  GetByKey = 20,
  CryptoGetClaim = 21,
  CryptoGetStakers = 22,
  FileGetContents = 23,
  FileGetInfo = 24,
  TransactionGetRecord = 25,
  ContractGetRecords = 26,
  CryptoCreate = 27,
}
