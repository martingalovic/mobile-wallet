/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.qrl.TransactionExtended');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.qrl.BlockHeader');
goog.require('proto.qrl.Transaction');


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
proto.qrl.TransactionExtended = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qrl.TransactionExtended, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qrl.TransactionExtended.displayName = 'proto.qrl.TransactionExtended';
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
proto.qrl.TransactionExtended.prototype.toObject = function(opt_includeInstance) {
  return proto.qrl.TransactionExtended.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qrl.TransactionExtended} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.TransactionExtended.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.qrl.BlockHeader.toObject(includeInstance, f),
    tx: (f = msg.getTx()) && proto.qrl.Transaction.toObject(includeInstance, f)
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
 * @return {!proto.qrl.TransactionExtended}
 */
proto.qrl.TransactionExtended.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qrl.TransactionExtended;
  return proto.qrl.TransactionExtended.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qrl.TransactionExtended} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qrl.TransactionExtended}
 */
proto.qrl.TransactionExtended.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qrl.BlockHeader;
      reader.readMessage(value,proto.qrl.BlockHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.qrl.Transaction;
      reader.readMessage(value,proto.qrl.Transaction.deserializeBinaryFromReader);
      msg.setTx(value);
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
proto.qrl.TransactionExtended.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qrl.TransactionExtended.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qrl.TransactionExtended} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.TransactionExtended.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qrl.BlockHeader.serializeBinaryToWriter
    );
  }
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.qrl.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockHeader header = 1;
 * @return {?proto.qrl.BlockHeader}
 */
proto.qrl.TransactionExtended.prototype.getHeader = function() {
  return /** @type{?proto.qrl.BlockHeader} */ (
    jspb.Message.getWrapperField(this, proto.qrl.BlockHeader, 1));
};


/** @param {?proto.qrl.BlockHeader|undefined} value */
proto.qrl.TransactionExtended.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.qrl.TransactionExtended.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qrl.TransactionExtended.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Transaction tx = 2;
 * @return {?proto.qrl.Transaction}
 */
proto.qrl.TransactionExtended.prototype.getTx = function() {
  return /** @type{?proto.qrl.Transaction} */ (
    jspb.Message.getWrapperField(this, proto.qrl.Transaction, 2));
};


/** @param {?proto.qrl.Transaction|undefined} value */
proto.qrl.TransactionExtended.prototype.setTx = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.qrl.TransactionExtended.prototype.clearTx = function() {
  this.setTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qrl.TransactionExtended.prototype.hasTx = function() {
  return jspb.Message.getField(this, 2) != null;
};

