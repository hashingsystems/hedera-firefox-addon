import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as Timestamp_pb from './Timestamp_pb';

export class FileCreateTransactionBody extends jspb.Message {
  getExpirationtime(): Timestamp_pb.Timestamp | undefined;
  setExpirationtime(value?: Timestamp_pb.Timestamp): void;
  hasExpirationtime(): boolean;
  clearExpirationtime(): void;

  getKeys(): BasicTypes_pb.KeyList | undefined;
  setKeys(value?: BasicTypes_pb.KeyList): void;
  hasKeys(): boolean;
  clearKeys(): void;

  getContents(): Uint8Array | string;
  getContents_asU8(): Uint8Array;
  getContents_asB64(): string;
  setContents(value: Uint8Array | string): void;

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
  toObject(includeInstance?: boolean): FileCreateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: FileCreateTransactionBody): FileCreateTransactionBody.AsObject;
  static serializeBinaryToWriter(message: FileCreateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileCreateTransactionBody;
  static deserializeBinaryFromReader(message: FileCreateTransactionBody, reader: jspb.BinaryReader): FileCreateTransactionBody;
}

export namespace FileCreateTransactionBody {
  export type AsObject = {
    expirationtime?: Timestamp_pb.Timestamp.AsObject,
    keys?: BasicTypes_pb.KeyList.AsObject,
    contents: Uint8Array | string,
    shardid?: BasicTypes_pb.ShardID.AsObject,
    realmid?: BasicTypes_pb.RealmID.AsObject,
    newrealmadminkey?: BasicTypes_pb.Key.AsObject,
  }
}

