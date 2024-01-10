/**
 * Created by s3lab. on 1/13/2017.
 */
'use strict';

const validator = require('validator');

/**
 * check value is a valid type",
 * @param {String} value"
 * @param {String} type: string, number, object, function, undefined, boolean"
 * @param {Integer} length"
 * @return {boolean}
 */
const validType = function(value, type, length = 1 ) {
  let minLength = 0;
  if (length !== null && length !== undefined) {
    minLength = length;
  }
  return !( (typeof value !== type) || (value == null) || (value.length < minLength) );
};

/**
 * check param is a valid object enum",
 * @param {String} value"
 * @param {Object} object"
 * @return {boolean}
 */
const validObjectEnum = function(value, object ) {
  let result = false;
  for (const propertyName in object) {
    if (value == object[propertyName]) {
      result = true;
      break;
    }
  }
  return result;
};

/**
 * check param is a valid number",
 * @param {String} value"
 * @return {boolean}
 */
const validNumberParam = function(value ) {
  let result = true;
  if ( !( validType(value, 'string') && validator.isInt(value) ) &&
            !validType( value, 'number' ) ) {
    result = false;
  }
  return result;
};

/**
 * check param is a valid decimal",
 * @param {String} value"
 * @return {boolean}
 */
const validDecimalParam = function(value ) {
  let result = true;
  if ( !( validType(value, 'string') && validator.isDecimal(value) ) &&
        !validType( value, 'number' ) ) {
    result = false;
  }
  return result;
};

/**
 * check param is a valid Date",
 * @param {String} value"
 * @return {boolean}
 */
const validDateParam = function(value ) {
  let result = true;
  if ( !( validType(value, 'string') && validator.toDate(value) !== null) ) {
    result = false;
  }
  return result;
};

/**
 * check param is a valid number",
 * @param {String} value"
 * @return {boolean}
 */
const validJson = function(value ) {
  let result = true;
  if ( !( validType(value, 'string') && validator.isJSON(value) ) ) {
    result = false;
  }
  return result;
};

/**
 * check param is a valid format dimension gg-analytics
 * @param {String} dimension
 * @return {boolean}
 */
const validDimensionAnalytics = (dimension) => {
  return validType(dimension, 'string') && /(ga:.+)/g.test(dimension);
};

module.exports = {
  validType,
  validObjectEnum,
  validNumberParam,
  validDateParam,
  validDecimalParam,
  validJson,
  validDimensionAnalytics,
};
