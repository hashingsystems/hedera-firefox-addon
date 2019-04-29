import * as jspb from "google-protobuf"

export class Timestamp extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): void;

  getNanos(): number;
  setNanos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class TimestampSeconds extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampSeconds.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampSeconds): TimestampSeconds.AsObject;
  static serializeBinaryToWriter(message: TimestampSeconds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampSeconds;
  static deserializeBinaryFromReader(message: TimestampSeconds, reader: jspb.BinaryReader): TimestampSeconds;
}

export namespace TimestampSeconds {
  export type AsObject = {
    seconds: number,
  }
}

