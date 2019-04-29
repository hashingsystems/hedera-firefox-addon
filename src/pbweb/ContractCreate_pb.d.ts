import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as Duration_pb from './Duration_pb';

export class ContractCreateTransactionBody extends jspb.Message {
  getFileid(): BasicTypes_pb.FileID | undefined;
  setFileid(value?: BasicTypes_pb.FileID): void;
  hasFileid(): boolean;
  clearFileid(): void;

  getAdminkey(): BasicTypes_pb.Key | undefined;
  setAdminkey(value?: BasicTypes_pb.Key): void;
  hasAdminkey(): boolean;
  clearAdminkey(): void;

  getGas(): number;
  setGas(value: number): void;

  getInitialbalance(): number;
  setInitialbalance(value: number): void;

  getProxyaccountid(): BasicTypes_pb.AccountID | undefined;
  setProxyaccountid(value?: BasicTypes_pb.AccountID): void;
  hasProxyaccountid(): boolean;
  clearProxyaccountid(): void;

  getAutorenewperiod(): Duration_pb.Duration | undefined;
  setAutorenewperiod(value?: Duration_pb.Duration): void;
  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;

  getConstructorparameters(): Uint8Array | string;
  getConstructorparameters_asU8(): Uint8Array;
  getConstructorparameters_asB64(): string;
  setConstructorparameters(value: Uint8Array | string): void;

  getShardid(): BasicTypes_pb.ShardID | undefined;
  setShardid(value?: BasicTypes_pb.ShardID): void;
  hasShardid(): boolean;
  clearShardid(): void;

  getRealmid(): BasicTypes_pb.RealmID | undefined;
  setRealmid(value?: BasicTypes_pb.RealmID): void;
  hasRealmid(): boolean;
  clearRealmid(): void;

  getNewrealmadminkey(): BasicTypes_pb.Key | undefined;
  setNewrealmadminkey(value?: BasicTypes_pb.Key): void;
  hasNewrealmadminkey(): boolean;
  clearNewrealmadminkey(): void;

  getMemo(): string;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractCreateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ContractCreateTransactionBody): ContractCreateTransactionBody.AsObject;
  static serializeBinaryToWriter(message: ContractCreateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractCreateTransactionBody;
  static deserializeBinaryFromReader(message: ContractCreateTransactionBody, reader: jspb.BinaryReader): ContractCreateTransactionBody;
}

export namespace ContractCreateTransactionBody {
  export type AsObject = {
    fileid?: BasicTypes_pb.FileID.AsObject,
    adminkey?: BasicTypes_pb.Key.AsObject,
    gas: number,
    initialbalance: number,
    proxyaccountid?: BasicTypes_pb.AccountID.AsObject,
    autorenewperiod?: Duration_pb.Duration.AsObject,
    constructorparameters: Uint8Array | string,
    shardid?: BasicTypes_pb.ShardID.AsObject,
    realmid?: BasicTypes_pb.RealmID.AsObject,
    newrealmadminkey?: BasicTypes_pb.Key.AsObject,
    memo: string,
  }
}

