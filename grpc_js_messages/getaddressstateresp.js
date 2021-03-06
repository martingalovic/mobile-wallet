/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.qrl.GetAddressStateResp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.qrl.AddressState');


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
proto.qrl.GetAddressStateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qrl.GetAddressStateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qrl.GetAddressStateResp.displayName = 'proto.qrl.GetAddressStateResp';
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
proto.qrl.GetAddressStateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.qrl.GetAddressStateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qrl.GetAddressStateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.GetAddressStateResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.qrl.AddressState.toObject(includeInstance, f)
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
 * @return {!proto.qrl.GetAddressStateResp}
 */
proto.qrl.GetAddressStateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qrl.GetAddressStateResp;
  return proto.qrl.GetAddressStateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qrl.GetAddressStateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qrl.GetAddressStateResp}
 */
proto.qrl.GetAddressStateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qrl.AddressState;
      reader.readMessage(value,proto.qrl.AddressState.deserializeBinaryFromReader);
      msg.setState(value);
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
proto.qrl.GetAddressStateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qrl.GetAddressStateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qrl.GetAddressStateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.GetAddressStateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qrl.AddressState.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddressState state = 1;
 * @return {?proto.qrl.AddressState}
 */
proto.qrl.GetAddressStateResp.prototype.getState = function() {
  return /** @type{?proto.qrl.AddressState} */ (
    jspb.Message.getWrapperField(this, proto.qrl.AddressState, 1));
};


/** @param {?proto.qrl.AddressState|undefined} value */
proto.qrl.GetAddressStateResp.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.qrl.GetAddressStateResp.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qrl.GetAddressStateResp.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


