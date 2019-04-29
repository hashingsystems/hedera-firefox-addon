/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var Query_pb = require('./Query_pb.js')

var Response_pb = require('./Response_pb.js')

var TransactionResponse_pb = require('./TransactionResponse_pb.js')

var Transaction_pb = require('./Transaction_pb.js')
const proto = {};
proto.proto = require('./FileService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.FileServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.FileServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_FileService_createFile = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.FileServiceClient.prototype.createFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.FileService/createFile',
      request,
      metadata || {},
      methodInfo_FileService_createFile,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.FileServicePromiseClient.prototype.createFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.FileService/createFile',
      request,
      metadata || {},
      methodInfo_FileService_createFile);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_FileService_updateFile = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.FileServiceClient.prototype.updateFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.FileService/updateFile',
      request,
      metadata || {},
      methodInfo_FileService_updateFile,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.FileServicePromiseClient.prototype.updateFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.FileService/updateFile',
      request,
      metadata || {},
      methodInfo_FileService_updateFile);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_FileService_deleteFile = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.FileServiceClient.prototype.deleteFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.FileService/deleteFile',
      request,
      metadata || {},
      methodInfo_FileService_deleteFile,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.FileServicePromiseClient.prototype.deleteFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.FileService/deleteFile',
      request,
      metadata || {},
      methodInfo_FileService_deleteFile);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_FileService_appendContent = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.FileServiceClient.prototype.appendContent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.FileService/appendContent',
      request,
      metadata || {},
      methodInfo_FileService_appendContent,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.FileServicePromiseClient.prototype.appendContent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.FileService/appendContent',
      request,
      metadata || {},
      methodInfo_FileService_appendContent);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Query,
 *   !proto.proto.Response>}
 */
const methodInfo_FileService_getFileContent = new grpc.web.AbstractClientBase.MethodInfo(
  Response_pb.Response,
  /** @param {!proto.proto.Query} request */
  function(request) {
    return request.serializeBinary();
  },
  Response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.FileServiceClient.prototype.getFileContent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.FileService/getFileContent',
      request,
      metadata || {},
      methodInfo_FileService_getFileContent,
      callback);
};


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.FileServicePromiseClient.prototype.getFileContent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.FileService/getFileContent',
      request,
      metadata || {},
      methodInfo_FileService_getFileContent);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Query,
 *   !proto.proto.Response>}
 */
const methodInfo_FileService_getFileInfo = new grpc.web.AbstractClientBase.MethodInfo(
  Response_pb.Response,
  /** @param {!proto.proto.Query} request */
  function(request) {
    return request.serializeBinary();
  },
  Response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.FileServiceClient.prototype.getFileInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.FileService/getFileInfo',
      request,
      metadata || {},
      methodInfo_FileService_getFileInfo,
      callback);
};


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     A native promise that resolves to the response
 */
proto.proto.FileServicePromiseClient.prototype.getFileInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.FileService/getFileInfo',
      request,
      metadata || {},
      methodInfo_FileService_getFileInfo);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_FileService_adminDelete = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.FileServiceClient.prototype.adminDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.FileService/adminDelete',
      request,
      metadata || {},
      methodInfo_FileService_adminDelete,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.FileServicePromiseClient.prototype.adminDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.FileService/adminDelete',
      request,
      metadata || {},
      methodInfo_FileService_adminDelete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_FileService_adminUndelete = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.FileServiceClient.prototype.adminUndelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.FileService/adminUndelete',
      request,
      metadata || {},
      methodInfo_FileService_adminUndelete,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.FileServicePromiseClient.prototype.adminUndelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.FileService/adminUndelete',
      request,
      metadata || {},
      methodInfo_FileService_adminUndelete);
};


module.exports = proto.proto;

