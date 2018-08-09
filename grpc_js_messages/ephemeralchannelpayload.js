/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.qrl.EphemeralChannelPayload');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.qrl.EphemeralChannelPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qrl.EphemeralChannelPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qrl.EphemeralChannelPayload.displayName = 'proto.qrl.EphemeralChannelPayload';
}


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
proto.qrl.EphemeralChannelPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.qrl.EphemeralChannelPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qrl.EphemeralChannelPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.EphemeralChannelPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    prf512Seed: msg.getPrf512Seed_asB64(),
    dilithiumSignature: msg.getDilithiumSignature_asB64(),
    addrFrom: msg.getAddrFrom_asB64(),
    data: msg.getData_asB64()
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
 * @return {!proto.qrl.EphemeralChannelPayload}
 */
proto.qrl.EphemeralChannelPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qrl.EphemeralChannelPayload;
  return proto.qrl.EphemeralChannelPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qrl.EphemeralChannelPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qrl.EphemeralChannelPayload}
 */
proto.qrl.EphemeralChannelPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrf512Seed(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDilithiumSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddrFrom(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.qrl.EphemeralChannelPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qrl.EphemeralChannelPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qrl.EphemeralChannelPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.EphemeralChannelPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrf512Seed_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDilithiumSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAddrFrom_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes prf512_seed = 1;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.EphemeralChannelPayload.prototype.getPrf512Seed = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes prf512_seed = 1;
 * This is a type-conversion wrapper around `getPrf512Seed()`
 * @return {string}
 */
proto.qrl.EphemeralChannelPayload.prototype.getPrf512Seed_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrf512Seed()));
};


/**
 * optional bytes prf512_seed = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrf512Seed()`
 * @return {!Uint8Array}
 */
proto.qrl.EphemeralChannelPayload.prototype.getPrf512Seed_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrf512Seed()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.EphemeralChannelPayload.prototype.setPrf512Seed = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes dilithium_signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.EphemeralChannelPayload.prototype.getDilithiumSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes dilithium_signature = 2;
 * This is a type-conversion wrapper around `getDilithiumSignature()`
 * @return {string}
 */
proto.qrl.EphemeralChannelPayload.prototype.getDilithiumSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDilithiumSignature()));
};


/**
 * optional bytes dilithium_signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDilithiumSignature()`
 * @return {!Uint8Array}
 */
proto.qrl.EphemeralChannelPayload.prototype.getDilithiumSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDilithiumSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.EphemeralChannelPayload.prototype.setDilithiumSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes addr_from = 3;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.EphemeralChannelPayload.prototype.getAddrFrom = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes addr_from = 3;
 * This is a type-conversion wrapper around `getAddrFrom()`
 * @return {string}
 */
proto.qrl.EphemeralChannelPayload.prototype.getAddrFrom_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddrFrom()));
};


/**
 * optional bytes addr_from = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddrFrom()`
 * @return {!Uint8Array}
 */
proto.qrl.EphemeralChannelPayload.prototype.getAddrFrom_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddrFrom()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.EphemeralChannelPayload.prototype.setAddrFrom = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.qrl.EphemeralChannelPayload.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.qrl.EphemeralChannelPayload.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.qrl.EphemeralChannelPayload.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.qrl.EphemeralChannelPayload.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};

