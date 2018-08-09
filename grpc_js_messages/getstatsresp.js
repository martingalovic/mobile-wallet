/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.qrl.GetStatsResp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.qrl.BlockDataPoint');
goog.require('proto.qrl.NodeInfo');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qrl.GetStatsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qrl.GetStatsResp.repeatedFields_, null);
};
goog.inherits(proto.qrl.GetStatsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qrl.GetStatsResp.displayName = 'proto.qrl.GetStatsResp';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qrl.GetStatsResp.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qrl.GetStatsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.qrl.GetStatsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qrl.GetStatsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.GetStatsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeInfo: (f = msg.getNodeInfo()) && proto.qrl.NodeInfo.toObject(includeInstance, f),
    epoch: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uptimeNetwork: jspb.Message.getFieldWithDefault(msg, 3, 0),
    blockLastReward: jspb.Message.getFieldWithDefault(msg, 4, 0),
    blockTimeMean: jspb.Message.getFieldWithDefault(msg, 5, 0),
    blockTimeSd: jspb.Message.getFieldWithDefault(msg, 6, 0),
    coinsTotalSupply: jspb.Message.getFieldWithDefault(msg, 7, 0),
    coinsEmitted: jspb.Message.getFieldWithDefault(msg, 8, 0),
    blockTimeseriesList: jspb.Message.toObjectList(msg.getBlockTimeseriesList(),
    proto.qrl.BlockDataPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qrl.GetStatsResp}
 */
proto.qrl.GetStatsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qrl.GetStatsResp;
  return proto.qrl.GetStatsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qrl.GetStatsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qrl.GetStatsResp}
 */
proto.qrl.GetStatsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qrl.NodeInfo;
      reader.readMessage(value,proto.qrl.NodeInfo.deserializeBinaryFromReader);
      msg.setNodeInfo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpoch(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUptimeNetwork(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockLastReward(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockTimeMean(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockTimeSd(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCoinsTotalSupply(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCoinsEmitted(value);
      break;
    case 9:
      var value = new proto.qrl.BlockDataPoint;
      reader.readMessage(value,proto.qrl.BlockDataPoint.deserializeBinaryFromReader);
      msg.addBlockTimeseries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qrl.GetStatsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qrl.GetStatsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qrl.GetStatsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.GetStatsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qrl.NodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getEpoch();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUptimeNetwork();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getBlockLastReward();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBlockTimeMean();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getBlockTimeSd();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getCoinsTotalSupply();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getCoinsEmitted();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getBlockTimeseriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.qrl.BlockDataPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional NodeInfo node_info = 1;
 * @return {?proto.qrl.NodeInfo}
 */
proto.qrl.GetStatsResp.prototype.getNodeInfo = function() {
  return /** @type{?proto.qrl.NodeInfo} */ (
    jspb.Message.getWrapperField(this, proto.qrl.NodeInfo, 1));
};


/** @param {?proto.qrl.NodeInfo|undefined} value */
proto.qrl.GetStatsResp.prototype.setNodeInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.qrl.GetStatsResp.prototype.clearNodeInfo = function() {
  this.setNodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qrl.GetStatsResp.prototype.hasNodeInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 epoch = 2;
 * @return {number}
 */
proto.qrl.GetStatsResp.prototype.getEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.qrl.GetStatsResp.prototype.setEpoch = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 uptime_network = 3;
 * @return {number}
 */
proto.qrl.GetStatsResp.prototype.getUptimeNetwork = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.qrl.GetStatsResp.prototype.setUptimeNetwork = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 block_last_reward = 4;
 * @return {number}
 */
proto.qrl.GetStatsResp.prototype.getBlockLastReward = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.qrl.GetStatsResp.prototype.setBlockLastReward = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 block_time_mean = 5;
 * @return {number}
 */
proto.qrl.GetStatsResp.prototype.getBlockTimeMean = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.qrl.GetStatsResp.prototype.setBlockTimeMean = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 block_time_sd = 6;
 * @return {number}
 */
proto.qrl.GetStatsResp.prototype.getBlockTimeSd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.qrl.GetStatsResp.prototype.setBlockTimeSd = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 coins_total_supply = 7;
 * @return {number}
 */
proto.qrl.GetStatsResp.prototype.getCoinsTotalSupply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.qrl.GetStatsResp.prototype.setCoinsTotalSupply = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 coins_emitted = 8;
 * @return {number}
 */
proto.qrl.GetStatsResp.prototype.getCoinsEmitted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.qrl.GetStatsResp.prototype.setCoinsEmitted = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated BlockDataPoint block_timeseries = 9;
 * @return {!Array.<!proto.qrl.BlockDataPoint>}
 */
proto.qrl.GetStatsResp.prototype.getBlockTimeseriesList = function() {
  return /** @type{!Array.<!proto.qrl.BlockDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qrl.BlockDataPoint, 9));
};


/** @param {!Array.<!proto.qrl.BlockDataPoint>} value */
proto.qrl.GetStatsResp.prototype.setBlockTimeseriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.qrl.BlockDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qrl.BlockDataPoint}
 */
proto.qrl.GetStatsResp.prototype.addBlockTimeseries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.qrl.BlockDataPoint, opt_index);
};


proto.qrl.GetStatsResp.prototype.clearBlockTimeseriesList = function() {
  this.setBlockTimeseriesList([]);
};

