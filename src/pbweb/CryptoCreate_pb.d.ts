import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as Duration_pb from './Duration_pb';

export class CryptoCreateTransactionBody extends jspb.Message {
  getKey(): BasicTypes_pb.Key | undefined;
  setKey(value?: BasicTypes_pb.Key): void;
  hasKey(): boolean;
  clearKey(): void;

  getInitialbalance(): number;
  setInitialbalance(value: number): void;

  getProxyaccountid(): BasicTypes_pb.AccountID | undefined;
  setProxyaccountid(value?: BasicTypes_pb.AccountID): void;
  hasProxyaccountid(): boolean;
  clearProxyaccountid(): void;

  getSendrecordthreshold(): number;
  setSendrecordthreshold(value: number): void;

  getReceiverecordthreshold(): number;
  setReceiverecordthreshold(value: number): void;

  getReceiversigrequired(): boolean;
  setReceiversigrequired(value: boolean): void;

  getAutorenewperiod(): Duration_pb.Duration | undefined;
  setAutorenewperiod(value?: Duration_pb.Duration): void;
  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoCreateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoCreateTransactionBody): CryptoCreateTransactionBody.AsObject;
  static serializeBinaryToWriter(message: CryptoCreateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoCreateTransactionBody;
  static deserializeBinaryFromReader(message: CryptoCreateTransactionBody, reader: jspb.BinaryReader): CryptoCreateTransactionBody;
}

export namespace CryptoCreateTransactionBody {
  export type AsObject = {
    key?: BasicTypes_pb.Key.AsObject,
    initialbalance: number,
    proxyaccountid?: BasicTypes_pb.AccountID.AsObject,
    sendrecordthreshold: number,
    receiverecordthreshold: number,
    receiversigrequired: boolean,
    autorenewperiod?: Duration_pb.Duration.AsObject,
    shardid?: BasicTypes_pb.ShardID.AsObject,
    realmid?: BasicTypes_pb.RealmID.AsObject,
    newrealmadminkey?: BasicTypes_pb.Key.AsObject,
  }
}

