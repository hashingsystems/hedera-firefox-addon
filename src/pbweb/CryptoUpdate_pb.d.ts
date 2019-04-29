import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as Duration_pb from './Duration_pb';
import * as Timestamp_pb from './Timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class CryptoUpdateTransactionBody extends jspb.Message {
  getAccountidtoupdate(): BasicTypes_pb.AccountID | undefined;
  setAccountidtoupdate(value?: BasicTypes_pb.AccountID): void;
  hasAccountidtoupdate(): boolean;
  clearAccountidtoupdate(): void;

  getKey(): BasicTypes_pb.Key | undefined;
  setKey(value?: BasicTypes_pb.Key): void;
  hasKey(): boolean;
  clearKey(): void;

  getProxyaccountid(): BasicTypes_pb.AccountID | undefined;
  setProxyaccountid(value?: BasicTypes_pb.AccountID): void;
  hasProxyaccountid(): boolean;
  clearProxyaccountid(): void;

  getProxyfraction(): number;
  setProxyfraction(value: number): void;

  getSendrecordthreshold(): number;
  setSendrecordthreshold(value: number): void;
  hasSendrecordthreshold(): boolean;

  getSendrecordthresholdwrapper(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setSendrecordthresholdwrapper(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasSendrecordthresholdwrapper(): boolean;
  clearSendrecordthresholdwrapper(): void;
  hasSendrecordthresholdwrapper(): boolean;

  getReceiverecordthreshold(): number;
  setReceiverecordthreshold(value: number): void;
  hasReceiverecordthreshold(): boolean;

  getReceiverecordthresholdwrapper(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setReceiverecordthresholdwrapper(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasReceiverecordthresholdwrapper(): boolean;
  clearReceiverecordthresholdwrapper(): void;
  hasReceiverecordthresholdwrapper(): boolean;

  getAutorenewperiod(): Duration_pb.Duration | undefined;
  setAutorenewperiod(value?: Duration_pb.Duration): void;
  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;

  getExpirationtime(): Timestamp_pb.Timestamp | undefined;
  setExpirationtime(value?: Timestamp_pb.Timestamp): void;
  hasExpirationtime(): boolean;
  clearExpirationtime(): void;

  getReceiversigrequired(): boolean;
  setReceiversigrequired(value: boolean): void;
  hasReceiversigrequired(): boolean;

  getReceiversigrequiredwrapper(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setReceiversigrequiredwrapper(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasReceiversigrequiredwrapper(): boolean;
  clearReceiversigrequiredwrapper(): void;
  hasReceiversigrequiredwrapper(): boolean;

  getSendrecordthresholdfieldCase(): CryptoUpdateTransactionBody.SendrecordthresholdfieldCase;

  getReceiverecordthresholdfieldCase(): CryptoUpdateTransactionBody.ReceiverecordthresholdfieldCase;

  getReceiversigrequiredfieldCase(): CryptoUpdateTransactionBody.ReceiversigrequiredfieldCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoUpdateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoUpdateTransactionBody): CryptoUpdateTransactionBody.AsObject;
  static serializeBinaryToWriter(message: CryptoUpdateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoUpdateTransactionBody;
  static deserializeBinaryFromReader(message: CryptoUpdateTransactionBody, reader: jspb.BinaryReader): CryptoUpdateTransactionBody;
}

export namespace CryptoUpdateTransactionBody {
  export type AsObject = {
    accountidtoupdate?: BasicTypes_pb.AccountID.AsObject,
    key?: BasicTypes_pb.Key.AsObject,
    proxyaccountid?: BasicTypes_pb.AccountID.AsObject,
    proxyfraction: number,
    sendrecordthreshold: number,
    sendrecordthresholdwrapper?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    receiverecordthreshold: number,
    receiverecordthresholdwrapper?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    autorenewperiod?: Duration_pb.Duration.AsObject,
    expirationtime?: Timestamp_pb.Timestamp.AsObject,
    receiversigrequired: boolean,
    receiversigrequiredwrapper?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }

  export enum SendrecordthresholdfieldCase { 
    SENDRECORDTHRESHOLDFIELD_NOT_SET = 0,
    SENDRECORDTHRESHOLD = 6,
    SENDRECORDTHRESHOLDWRAPPER = 11,
  }

  export enum ReceiverecordthresholdfieldCase { 
    RECEIVERECORDTHRESHOLDFIELD_NOT_SET = 0,
    RECEIVERECORDTHRESHOLD = 7,
    RECEIVERECORDTHRESHOLDWRAPPER = 12,
  }

  export enum ReceiversigrequiredfieldCase { 
    RECEIVERSIGREQUIREDFIELD_NOT_SET = 0,
    RECEIVERSIGREQUIRED = 10,
    RECEIVERSIGREQUIREDWRAPPER = 13,
  }
}

