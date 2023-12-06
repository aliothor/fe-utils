import { describe, expect, it } from 'vitest'
import * as XEUtils from '../src'

describe('base functions', () => {
  it('hasOwnProp()', () => {
    expect(
      XEUtils.hasOwnProp(),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(0),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(-1),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(1),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(null),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(''),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp([]),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(-1),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(true),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(false),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(undefined),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp({}),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp({ a: 1 }, 'b'),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp({ aa: null }, 'aa.bb'),
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp({ a: 1 }, 'a'),
    ).toEqual(true)
    expect(
      XEUtils.hasOwnProp([1, 2, 3], 2),
    ).toEqual(true)
    expect(
      XEUtils.hasOwnProp([1, 2, 3], '2'),
    ).toEqual(true)
    expect(
      XEUtils.hasOwnProp({ aa: { bb: 1 } }, 'aa.bb'),
    ).toEqual(false)
  })

  it('isNaN()', () => {
    expect(
      XEUtils.isNaN(),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(0),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(-1),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(1),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(null),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(''),
    ).toEqual(false)
    expect(
      XEUtils.isNaN([]),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(-1),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(true),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(false),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isNaN({}),
    ).toEqual(false)
    expect(
      XEUtils.isNaN('null'),
    ).toEqual(false)
    expect(
      XEUtils.isNaN('NAN'),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(/\d/),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isNaN(Number.NaN),
    ).toEqual(true)
  })

  it('isFinite()', () => {
    expect(
      XEUtils.isFinite(),
    ).toEqual(false)
    expect(
      XEUtils.isFinite(null),
    ).toEqual(false)
    expect(
      XEUtils.isFinite(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isFinite(Number.NaN),
    ).toEqual(false)
    expect(
      XEUtils.isFinite({}),
    ).toEqual(false)
    expect(
      XEUtils.isFinite([]),
    ).toEqual(false)
    expect(
      XEUtils.isFinite(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isFinite(/\d/),
    ).toEqual(false)
    expect(
      XEUtils.isFinite('num'),
    ).toEqual(false)
    expect(
      XEUtils.isFinite('5'),
    ).toEqual(false)
    expect(
      XEUtils.isFinite(''),
    ).toEqual(false)
    expect(
      XEUtils.isFinite(-2),
    ).toEqual(true)
    expect(
      XEUtils.isFinite(0),
    ).toEqual(true)
    expect(
      XEUtils.isFinite(5),
    ).toEqual(true)
    expect(
      XEUtils.isFinite(2e64),
    ).toEqual(true)
  })

  it('isUndefined()', () => {
    expect(
      XEUtils.isUndefined(0),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(-2),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(false),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(''),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined({}),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined([]),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(/\d/),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(null),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined('null'),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined('undefined'),
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(undefined),
    ).toEqual(true)
    expect(
      XEUtils.isUndefined(),
    ).toEqual(true)
  })

  it('isArray()', () => {
    const method = function () {
      expect(
        XEUtils.isArray(arguments),
      ).toEqual(false)
    }
    method()
    method(11, 22)
    expect(
      XEUtils.isArray(null),
    ).toEqual(false)
    expect(
      XEUtils.isArray(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isArray({}),
    ).toEqual(false)
    expect(
      XEUtils.isArray(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isArray(0),
    ).toEqual(false)
    expect(
      XEUtils.isArray(-2),
    ).toEqual(false)
    expect(
      XEUtils.isArray(false),
    ).toEqual(false)
    expect(
      XEUtils.isArray('false'),
    ).toEqual(false)
    expect(
      XEUtils.isArray([]),
    ).toEqual(true)
    expect(
      XEUtils.isArray([1, 2, 3]),
    ).toEqual(true)
  })

  it('isFloat()', () => {
    expect(
      XEUtils.isFloat(null),
    ).toEqual(false)
    expect(
      XEUtils.isFloat('null'),
    ).toEqual(false)
    expect(
      XEUtils.isFloat({}),
    ).toEqual(false)
    expect(
      XEUtils.isFloat([]),
    ).toEqual(false)
    expect(
      XEUtils.isFloat(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isFloat(/1\.3/),
    ).toEqual(false)
    expect(
      XEUtils.isFloat(0),
    ).toEqual(false)
    expect(
      XEUtils.isFloat(3),
    ).toEqual(false)
    expect(
      XEUtils.isFloat(-1),
    ).toEqual(false)
    expect(
      XEUtils.isFloat('0'),
    ).toEqual(false)
    expect(
      XEUtils.isFloat('3.9a'),
    ).toEqual(false)
    expect(
      XEUtils.isFloat('1.3'),
    ).toEqual(true)
    expect(
      XEUtils.isFloat(3.3),
    ).toEqual(true)
    expect(
      XEUtils.isFloat(-2.3),
    ).toEqual(true)
  })

  it('isInteger()', () => {
    expect(
      XEUtils.isInteger(null),
    ).toEqual(false)
    expect(
      XEUtils.isInteger([]),
    ).toEqual(false)
    expect(
      XEUtils.isInteger({}),
    ).toEqual(false)
    expect(
      XEUtils.isInteger(/123/),
    ).toEqual(false)
    expect(
      XEUtils.isInteger(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isInteger(null),
    ).toEqual(false)
    expect(
      XEUtils.isInteger('null'),
    ).toEqual(false)
    expect(
      XEUtils.isInteger('undefined'),
    ).toEqual(false)
    expect(
      XEUtils.isInteger(3.3),
    ).toEqual(false)
    expect(
      XEUtils.isInteger(-1.3),
    ).toEqual(false)
    expect(
      XEUtils.isInteger('3.4'),
    ).toEqual(false)
    expect(
      XEUtils.isInteger('0'),
    ).toEqual(true)
    expect(
      XEUtils.isInteger('3'),
    ).toEqual(true)
    expect(
      XEUtils.isInteger('-5'),
    ).toEqual(true)
    expect(
      XEUtils.isInteger(2),
    ).toEqual(true)
    expect(
      XEUtils.isInteger(-1),
    ).toEqual(true)
    expect(
      XEUtils.isInteger(0),
    ).toEqual(true)
  })

  it('isFunction()', () => {
    expect(
      XEUtils.isFunction('null'),
    ).toEqual(false)
    expect(
      XEUtils.isFunction(null),
    ).toEqual(false)
    expect(
      XEUtils.isFunction(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isFunction(false),
    ).toEqual(false)
    expect(
      XEUtils.isFunction(0),
    ).toEqual(false)
    expect(
      XEUtils.isFunction(-1),
    ).toEqual(false)
    expect(
      XEUtils.isFunction([]),
    ).toEqual(false)
    expect(
      XEUtils.isFunction({}),
    ).toEqual(false)
    expect(
      XEUtils.isFunction(() => { }),
    ).toEqual(true)
  })

  it('isBoolean()', () => {
    expect(
      XEUtils.isBoolean([]),
    ).toEqual(false)
    expect(
      XEUtils.isBoolean({}),
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(null),
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isBoolean('false'),
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(0),
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(-1),
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(true),
    ).toEqual(true)
  })

  it('isString()', () => {
    expect(
      XEUtils.isString(1),
    ).toEqual(false)
    expect(
      XEUtils.isString(0),
    ).toEqual(false)
    expect(
      XEUtils.isString(null),
    ).toEqual(false)
    expect(
      XEUtils.isString(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isString({}),
    ).toEqual(false)
    expect(
      XEUtils.isString([]),
    ).toEqual(false)
    expect(
      XEUtils.isString(/\d/),
    ).toEqual(false)
    expect(
      XEUtils.isString(() => { }),
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isString(Symbol('abc')),
      ).toEqual(false)
    }
    expect(
      XEUtils.isString(true),
    ).toEqual(false)
    expect(
      XEUtils.isString(''),
    ).toEqual(true)
    expect(
      XEUtils.isString('abc'),
    ).toEqual(true)
  })

  it('isNumber()', () => {
    expect(
      XEUtils.isNumber(null),
    ).toEqual(false)
    expect(
      XEUtils.isNumber(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isNumber({}),
    ).toEqual(false)
    expect(
      XEUtils.isNumber([]),
    ).toEqual(false)
    expect(
      XEUtils.isNumber(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isNumber(/123/),
    ).toEqual(false)
    expect(
      XEUtils.isNumber('1'),
    ).toEqual(false)
    expect(
      XEUtils.isNumber(-1),
    ).toEqual(true)
    expect(
      XEUtils.isNumber(0),
    ).toEqual(true)
    expect(
      XEUtils.isNumber(9.3),
    ).toEqual(true)
  })

  it('isRegExp()', () => {
    expect(
      XEUtils.isRegExp(null),
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isRegExp([]),
    ).toEqual(false)
    expect(
      XEUtils.isRegExp({}),
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(-1),
    ).toEqual(false)
    expect(
      XEUtils.isRegExp('a'),
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(new RegExp('a')),
    ).toEqual(true)
    expect(
      XEUtils.isRegExp(/\d/),
    ).toEqual(true)
  })

  it('isObject()', () => {
    expect(
      XEUtils.isObject(123),
    ).toEqual(false)
    expect(
      XEUtils.isObject(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isObject('null'),
    ).toEqual(false)
    expect(
      XEUtils.isObject(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isObject(-1),
    ).toEqual(false)
    expect(
      XEUtils.isObject(false),
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isObject(Symbol('123')),
      ).toEqual(false)
    }
    expect(
      XEUtils.isObject(/\d/),
    ).toEqual(true)
    expect(
      XEUtils.isObject(null),
    ).toEqual(true)
    expect(
      XEUtils.isObject([]),
    ).toEqual(true)
    expect(
      XEUtils.isObject({}),
    ).toEqual(true)
  })

  it('isPlainObject()', () => {
    expect(
      XEUtils.isPlainObject(),
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(null),
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(/\d/),
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject([]),
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(''),
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(-1),
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(123),
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isPlainObject(Symbol('123')),
      ).toEqual(false)
    }
    expect(
      XEUtils.isPlainObject({}),
    ).toEqual(true)
  })

  it('isDate()', () => {
    expect(
      XEUtils.isDate(),
    ).toEqual(false)
    expect(
      XEUtils.isDate(''),
    ).toEqual(false)
    expect(
      XEUtils.isDate('2017-12-20'),
    ).toEqual(false)
    expect(
      XEUtils.isDate('ue Dec 04 2018 15:02:06 GMT+0800'),
    ).toEqual(false)
    expect(
      XEUtils.isDate(-1),
    ).toEqual(false)
    expect(
      XEUtils.isDate(0),
    ).toEqual(false)
    expect(
      XEUtils.isDate(null),
    ).toEqual(false)
    expect(
      XEUtils.isDate(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isDate([]),
    ).toEqual(false)
    expect(
      XEUtils.isDate({}),
    ).toEqual(false)
    expect(
      XEUtils.isDate(1514096716800),
    ).toEqual(false)
    expect(
      XEUtils.isDate(new Date()),
    ).toEqual(true)
    expect(
      XEUtils.isDate(XEUtils.toStringDate('2017-12-20', 'yyyy-MM-dd')),
    ).toEqual(true)
  })

  it('isError()', () => {
    expect(
      XEUtils.isError(),
    ).toEqual(false)
    expect(
      XEUtils.isError(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isError(null),
    ).toEqual(false)
    expect(
      XEUtils.isError({}),
    ).toEqual(false)
    expect(
      XEUtils.isError([]),
    ).toEqual(false)
    expect(
      XEUtils.isError(-1),
    ).toEqual(false)
    expect(
      XEUtils.isError(0),
    ).toEqual(false)
    expect(
      XEUtils.isError(''),
    ).toEqual(false)
    expect(
      XEUtils.isError(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isError(new TypeError('error')),
    ).toEqual(true)
    expect(
      XEUtils.isError(new Error('error')),
    ).toEqual(true)
  })

  it('isTypeError()', () => {
    expect(
      XEUtils.isTypeError(),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(null),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError([]),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError({}),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(-1),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(0),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(''),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(new Error('error')),
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(new TypeError('error')),
    ).toEqual(true)
  })

  it('isEmpty()', () => {
    expect(
      XEUtils.isEmpty([11]),
    ).toEqual(false)
    expect(
      XEUtils.isEmpty({ a: 1 }),
    ).toEqual(false)
    expect(
      XEUtils.isEmpty(' '),
    ).toEqual(false)
    expect(
      XEUtils.isEmpty(),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(0),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(100),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(-1),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(''),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(false),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(null),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(undefined),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty({}),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty([]),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(/\d/),
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(() => { }),
    ).toEqual(true)
  })

  it('isNull()', () => {
    expect(
      XEUtils.isNull(),
    ).toEqual(false)
    expect(
      XEUtils.isNull(0),
    ).toEqual(false)
    expect(
      XEUtils.isNull(false),
    ).toEqual(false)
    expect(
      XEUtils.isNull(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isNull(/null/),
    ).toEqual(false)
    expect(
      XEUtils.isNull({}),
    ).toEqual(false)
    expect(
      XEUtils.isNull([]),
    ).toEqual(false)
    expect(
      XEUtils.isNull(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isNull('null'),
    ).toEqual(false)
    expect(
      XEUtils.isNull(''),
    ).toEqual(false)
    expect(
      XEUtils.isNull(null),
    ).toEqual(true)
  })

  it('isSymbol()', () => {
    expect(
      XEUtils.isSymbol(),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(null),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol({}),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol([]),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(0),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(-1),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(false),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.isSymbol('a'),
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isSymbol(Symbol('a')),
      ).toEqual(true)
    }
  })

  it('isArguments()', () => {
    expect(
      XEUtils.isArguments(),
    ).toEqual(false)
    expect(
      XEUtils.isArguments(null),
    ).toEqual(false)
    expect(
      XEUtils.isArguments(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isArguments(),
    ).toEqual(false)
    expect(
      XEUtils.isArguments([]),
    ).toEqual(false)
    expect(
      XEUtils.isArguments({}),
    ).toEqual(false)
    expect(
      XEUtils.isArguments(0),
    ).toEqual(false)
    expect(
      XEUtils.isArguments(-1),
    ).toEqual(false)
    expect(
      XEUtils.isArguments(false),
    ).toEqual(false)
    expect(
      XEUtils.isArguments(() => { }),
    ).toEqual(false)
    const method = function () {
      expect(
        XEUtils.isArguments(arguments),
      ).toEqual(true)
    }
    method()
  })

  it('isElement()', () => {
    expect(
      XEUtils.isElement(),
    ).toEqual(false)
    expect(
      XEUtils.isElement(null),
    ).toEqual(false)
    expect(
      XEUtils.isElement(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isElement(-1),
    ).toEqual(false)
    expect(
      XEUtils.isElement(123),
    ).toEqual(false)
    expect(
      XEUtils.isElement(0),
    ).toEqual(false)
    expect(
      XEUtils.isElement(''),
    ).toEqual(false)
    expect(
      XEUtils.isElement({}),
    ).toEqual(false)
    expect(
      XEUtils.isElement([]),
    ).toEqual(false)
    expect(
      XEUtils.isElement(() => { }),
    ).toEqual(false)
  })

  it('isDocument()', () => {
    expect(
      XEUtils.isDocument(),
    ).toEqual(false)
    expect(
      XEUtils.isDocument(null),
    ).toEqual(false)
    expect(
      XEUtils.isDocument(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isDocument(-1),
    ).toEqual(false)
    expect(
      XEUtils.isDocument(123),
    ).toEqual(false)
    expect(
      XEUtils.isDocument(0),
    ).toEqual(false)
    expect(
      XEUtils.isDocument(''),
    ).toEqual(false)
    expect(
      XEUtils.isDocument({}),
    ).toEqual(false)
    expect(
      XEUtils.isDocument([]),
    ).toEqual(false)
    expect(
      XEUtils.isDocument(() => { }),
    ).toEqual(false)
  })

  it('isWindow()', () => {
    expect(
      XEUtils.isWindow(),
    ).toEqual(false)
    expect(
      XEUtils.isWindow(null),
    ).toEqual(false)
    expect(
      XEUtils.isWindow(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isWindow(-1),
    ).toEqual(false)
    expect(
      XEUtils.isWindow(123),
    ).toEqual(false)
    expect(
      XEUtils.isWindow(0),
    ).toEqual(false)
    expect(
      XEUtils.isWindow(''),
    ).toEqual(false)
    expect(
      XEUtils.isWindow({}),
    ).toEqual(false)
    expect(
      XEUtils.isWindow([]),
    ).toEqual(false)
    expect(
      XEUtils.isWindow(() => { }),
    ).toEqual(false)
  })

  it('isFormData()', () => {
    expect(
      XEUtils.isFormData(),
    ).toEqual(false)
    expect(
      XEUtils.isFormData(null),
    ).toEqual(false)
    expect(
      XEUtils.isFormData(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isFormData(-1),
    ).toEqual(false)
    expect(
      XEUtils.isFormData(123),
    ).toEqual(false)
    expect(
      XEUtils.isFormData(0),
    ).toEqual(false)
    expect(
      XEUtils.isFormData(''),
    ).toEqual(false)
    expect(
      XEUtils.isFormData({}),
    ).toEqual(false)
    expect(
      XEUtils.isFormData([]),
    ).toEqual(false)
    expect(
      XEUtils.isFormData('a=1'),
    ).toEqual(false)
    expect(
      XEUtils.isFormData(new FormData()),
    ).toEqual(true)
  })

  it('isMap()', () => {
    expect(
      XEUtils.isMap(),
    ).toEqual(false)
    expect(
      XEUtils.isMap(null),
    ).toEqual(false)
    expect(
      XEUtils.isMap(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isMap(-1),
    ).toEqual(false)
    expect(
      XEUtils.isMap(123),
    ).toEqual(false)
    expect(
      XEUtils.isMap(0),
    ).toEqual(false)
    expect(
      XEUtils.isMap(''),
    ).toEqual(false)
    expect(
      XEUtils.isMap({}),
    ).toEqual(false)
    expect(
      XEUtils.isMap([]),
    ).toEqual(false)
    expect(
      XEUtils.isMap(new Map()),
    ).toEqual(true)
  })

  it('isWeakMap()', () => {
    expect(
      XEUtils.isWeakMap(),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(null),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(-1),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(123),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(0),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(''),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap({}),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap([]),
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(new WeakMap()),
    ).toEqual(true)
  })

  it('isSet()', () => {
    expect(
      XEUtils.isSet(),
    ).toEqual(false)
    expect(
      XEUtils.isSet(null),
    ).toEqual(false)
    expect(
      XEUtils.isSet(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isSet(-1),
    ).toEqual(false)
    expect(
      XEUtils.isSet(123),
    ).toEqual(false)
    expect(
      XEUtils.isSet(0),
    ).toEqual(false)
    expect(
      XEUtils.isSet(''),
    ).toEqual(false)
    expect(
      XEUtils.isSet({}),
    ).toEqual(false)
    expect(
      XEUtils.isSet([]),
    ).toEqual(false)
    expect(
      XEUtils.isSet(new Set()),
    ).toEqual(true)
  })

  it('isWeakSet()', () => {
    expect(
      XEUtils.isWeakSet(),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(null),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(undefined),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(-1),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(123),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(0),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(''),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet({}),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet([]),
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(new WeakSet()),
    ).toEqual(true)
  })

  it('isLeapYear()', () => {
    expect(
      XEUtils.isLeapYear('2018-12-01'),
    ).toEqual(false)
    expect(
      XEUtils.isLeapYear('2020-12-01 10:30:30'),
    ).toEqual(true)
    expect(
      XEUtils.isLeapYear(1581305634689),
    ).toEqual(true)
    expect(
      XEUtils.isLeapYear(new Date(2012, 1, 1).getTime()),
    ).toEqual(true)
    expect(
      XEUtils.isLeapYear(new Date(2020, 11, 1)),
    ).toEqual(true)
  })

  it('isMatch()', () => {
    expect(
      XEUtils.isMatch(),
    ).toEqual(true)
    expect(
      XEUtils.isMatch(null),
    ).toEqual(true)
    expect(
      XEUtils.isMatch(undefined),
    ).toEqual(true)
    expect(
      XEUtils.isMatch([]),
    ).toEqual(true)
    expect(
      XEUtils.isMatch({}),
    ).toEqual(true)
    expect(
      XEUtils.isMatch(-1),
    ).toEqual(true)
    expect(
      XEUtils.isMatch(0),
    ).toEqual(true)
    expect(
      XEUtils.isMatch(''),
    ).toEqual(true)
    expect(
      XEUtils.isMatch('sbc'),
    ).toEqual(true)
    expect(
      XEUtils.isMatch([], []),
    ).toEqual(true)
    expect(
      XEUtils.isMatch({}, {}),
    ).toEqual(true)
    expect(
      XEUtils.isMatch({ a: 22 }),
    ).toEqual(true)
    expect(
      XEUtils.isMatch([11, 22], [11]),
    ).toEqual(true)
    expect(
      XEUtils.isMatch([22, 11], [11]),
    ).toEqual(false)
    expect(
      XEUtils.isMatch([11], [33]),
    ).toEqual(false)
    expect(
      XEUtils.isMatch([{ a: { bb: 33 } }], [{ a: { bb: 33 } }]),
    ).toEqual(true)
    expect(
      XEUtils.isMatch({ aa: 11, bb: 22 }, { bb: 22 }),
    ).toEqual(true)
    expect(
      XEUtils.isMatch({ aa: 11, bb: [1, 2, 3] }, { bb: [1, 2, 3] }),
    ).toEqual(true)
  })

  it('isEqual()', () => {
    expect(
      XEUtils.isEqual(0),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(false),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(0, false),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(undefined, false),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(undefined, null),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(null, false),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(0, undefined),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(undefined, 0),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(false, 0),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(/0/, 0),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(true, 1),
    ).toEqual(false)
    expect(
      XEUtils.isEqual(false, true),
    ).toEqual(false)
    expect(
      XEUtils.isEqual({}, () => { }),
    ).toEqual(false)
    expect(
      XEUtils.isEqual({}, []),
    ).toEqual(false)
    expect(
      XEUtils.isEqual({ 0: 1 }, [1]),
    ).toEqual(false)
    expect(
      XEUtils.isEqual([undefined], [null]),
    ).toEqual(false)
    expect(
      XEUtils.isEqual([11, 22], [22, 11]),
    ).toEqual(false)
    expect(
      XEUtils.isEqual({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] }),
    ).toEqual(false)
    expect(
      XEUtils.isEqual([11, 22, 33], [11, 22, 33]),
    ).toEqual(true)
    expect(
      XEUtils.isEqual([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false]),
    ).toEqual(true)
    expect(
      XEUtils.isEqual({ name: 'test1' }, { name: 'test1' }),
    ).toEqual(true)
    expect(
      XEUtils.isEqual({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] }),
    ).toEqual(true)
    expect(
      XEUtils.isEqual([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }]),
    ).toEqual(true)
  })

  it('isEqualWith()', () => {
    expect(
      XEUtils.isEqualWith(0),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(false),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(0, false),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(undefined, false),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(undefined, null),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(null, false),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(0, undefined),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(undefined, 0),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(false, 0),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(/0/, 0),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(true, 1),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(false, true),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith({}, () => { }),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith({}, []),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith({ 0: 1 }, [1]),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([undefined], [null]),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([11, 22], [22, 11]),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([11, 22], [22, 11], (v1, v2) => true),
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] }),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([11, 22, 33], [11, 22, 33]),
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith([11, 22, 33], [11, 22, 33], (v1, v2) => false),
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false]),
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith({ name: 'test1' }, { name: 'test1' }),
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] }),
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }]),
    ).toEqual(true)
  })

  it('property()', () => {
    const getName = XEUtils.property('name')
    expect(
      getName({ name: 'test11', age: 25, height: 176 }),
    ).toEqual('test11')
    expect(
      getName({ age: 25, height: 176 }),
    ).toEqual(undefined)
  })

  it('getType()', () => {
    expect(
      XEUtils.getType(),
    ).toEqual('undefined')
    expect(
      XEUtils.getType(undefined),
    ).toEqual('undefined')
    expect(
      XEUtils.getType(null),
    ).toEqual('null')
    expect(
      XEUtils.getType(''),
    ).toEqual('string')
    expect(
      XEUtils.getType('1'),
    ).toEqual('string')
    expect(
      XEUtils.getType(1),
    ).toEqual('number')
    expect(
      XEUtils.getType(1547895990810),
    ).toEqual('number')
    expect(
      XEUtils.getType(new Date()),
    ).toEqual('date')
    expect(
      XEUtils.getType([]),
    ).toEqual('array')
    expect(
      XEUtils.getType([{}]),
    ).toEqual('array')
    expect(
      XEUtils.getType(/\d/),
    ).toEqual('regexp')
    expect(
      XEUtils.getType(new RegExp('-')),
    ).toEqual('regexp')
    expect(
      XEUtils.getType({}),
    ).toEqual('object')
    expect(
      XEUtils.getType(false),
    ).toEqual('boolean')
    expect(
      XEUtils.getType(true),
    ).toEqual('boolean')
    expect(
      XEUtils.getType(new Error()),
    ).toEqual('error')
    expect(
      XEUtils.getType(new TypeError()),
    ).toEqual('error')
    expect(
      XEUtils.getType(() => { }),
    ).toEqual('function')
    const method = function () {
      expect(
        XEUtils.getType(arguments),
      ).toEqual('object')
    }
    method(11, 22)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.getType(Symbol('name')),
      ).toEqual('symbol')
    }
  })

  it('uniqueId()', () => {
    expect(
      XEUtils.uniqueId(undefined),
    ).toEqual('1')
    expect(
      XEUtils.uniqueId(null),
    ).toEqual('2')
    expect(
      XEUtils.uniqueId(),
    ).toEqual('3')
    expect(
      XEUtils.uniqueId(),
    ).toEqual('4')
    expect(
      XEUtils.uniqueId(0),
    ).toEqual('05')
    expect(
      XEUtils.uniqueId(-1),
    ).toEqual('-16')
    expect(
      XEUtils.uniqueId('prefix_'),
    ).toEqual('prefix_7')
  })

  it('getSize()', () => {
    expect(
      XEUtils.getSize(),
    ).toEqual(0)
    expect(
      XEUtils.getSize(null),
    ).toEqual(0)
    expect(
      XEUtils.getSize(undefined),
    ).toEqual(0)
    expect(
      XEUtils.getSize(''),
    ).toEqual(0)
    expect(
      XEUtils.getSize(false),
    ).toEqual(0)
    expect(
      XEUtils.getSize(-1),
    ).toEqual(0)
    expect(
      XEUtils.getSize(10),
    ).toEqual(0)
    expect(
      XEUtils.getSize(() => { }),
    ).toEqual(0)
    expect(
      XEUtils.getSize('123'),
    ).toEqual(3)
    expect(
      XEUtils.getSize([1, 3]),
    ).toEqual(2)
    expect(
      XEUtils.getSize([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]),
    ).toEqual(4)
    expect(
      XEUtils.getSize({ a: 2, b: 5 }),
    ).toEqual(2)
  })

  it('indexOf()', () => {
    expect(
      XEUtils.indexOf(),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf(null),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf(undefined),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf([]),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf({}),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf(() => { }),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf([11, 22, 33, 22]),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf([11, 22, 33, 22], 55),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf({ a: 1, b: 3 }),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf({ a: 1, b: 3 }, 5),
    ).toEqual(-1)
    expect(
      XEUtils.indexOf({ a: 1, b: 3 }, 1),
    ).toEqual('a')
    expect(
      XEUtils.indexOf({ a: 1, b: 3 }, 3),
    ).toEqual('b')
    expect(
      XEUtils.indexOf([11, 22, 33, 22], 22),
    ).toEqual(1)
    expect(
      XEUtils.indexOf([11, 22, 33, 22], 33),
    ).toEqual(2)
  })

  it('arrayIndexOf()', () => {
    expect(
      XEUtils.arrayIndexOf([11, 22, 33, 22]),
    ).toEqual(-1)
    expect(
      XEUtils.arrayIndexOf([11, 22, 33, 22], 55),
    ).toEqual(-1)
    expect(
      XEUtils.arrayIndexOf([11, 22, 33, 22], 22),
    ).toEqual(1)
    expect(
      XEUtils.arrayIndexOf([11, 22, 33, 22], 33),
    ).toEqual(2)
  })

  it('lastIndexOf()', () => {
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22]),
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22], 55),
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf({ a: 1, b: 3 }),
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf({ a: 1, b: 3 }, 5),
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf({ a: 1, b: 3 }, 1),
    ).toEqual('a')
    expect(
      XEUtils.lastIndexOf({ a: 1, b: 3 }, 3),
    ).toEqual('b')
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22], 22),
    ).toEqual(3)
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22], 33),
    ).toEqual(2)
  })

  it('arrayLastIndexOf()', () => {
    expect(
      XEUtils.arrayLastIndexOf([11, 22, 33, 22]),
    ).toEqual(-1)
    expect(
      XEUtils.arrayLastIndexOf([11, 22, 33, 22], 55),
    ).toEqual(-1)
    expect(
      XEUtils.arrayLastIndexOf([11, 22, 33, 22], 22),
    ).toEqual(3)
    expect(
      XEUtils.arrayLastIndexOf([11, 22, 33, 22], 33),
    ).toEqual(2)
  })

  it('findIndexOf()', () => {
    expect(
      XEUtils.findIndexOf([11, 22, 33, 22], item => item === 55),
    ).toEqual(-1)
    expect(
      XEUtils.findIndexOf({ a: 11, b: 22, c: 33 }, item => item === 55),
    ).toEqual(-1)
    expect(
      XEUtils.findIndexOf({ a: 11, b: 22, c: 33 }, item => item === 22),
    ).toEqual('b')
    expect(
      XEUtils.findIndexOf([11, 22, 33, 22], item => item === 22),
    ).toEqual(1)
  })

  it('findLastIndexOf()', () => {
    expect(
      XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 55),
    ).toEqual(-1)
    expect(
      XEUtils.findLastIndexOf({ a: 11, b: 22, c: 33 }, item => item === 55),
    ).toEqual(-1)
    expect(
      XEUtils.findLastIndexOf({ a: 11, b: 22, c: 33 }, item => item === 22),
    ).toEqual('b')
    expect(
      XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 22),
    ).toEqual(3)
  })

  it('includes()', () => {
    expect(
      XEUtils.includes(),
    ).toEqual(false)
    expect(
      XEUtils.includes(null),
    ).toEqual(false)
    expect(
      XEUtils.includes(undefined),
    ).toEqual(false)
    expect(
      XEUtils.includes(0),
    ).toEqual(false)
    expect(
      XEUtils.includes(-1),
    ).toEqual(false)
    expect(
      XEUtils.includes([11]),
    ).toEqual(false)
    expect(
      XEUtils.includes({}),
    ).toEqual(false)
    expect(
      XEUtils.includes([], 22),
    ).toEqual(false)
    expect(
      XEUtils.includes({}, 22),
    ).toEqual(false)
    expect(
      XEUtils.includes([11], 22),
    ).toEqual(false)
    expect(
      XEUtils.includes({ a: 11, b: 22 }, 22),
    ).toEqual(true)
    expect(
      XEUtils.includes([11, 22], 22),
    ).toEqual(true)
  })

  it('toStringJSON()', () => {
    expect(
      XEUtils.toStringJSON(),
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(0),
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(-1),
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(null),
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(undefined),
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(''),
    ).toEqual({})
    expect(
      XEUtils.toStringJSON('{"a":1}'),
    ).toEqual({ a: 1 })
    expect(
      XEUtils.toStringJSON('[11,22]'),
    ).toEqual([11, 22])
  })

  it('toJSONString()', () => {
    expect(
      XEUtils.toJSONString(),
    ).toEqual('')
    expect(
      XEUtils.toJSONString(null),
    ).toEqual('')
    expect(
      XEUtils.toJSONString(undefined),
    ).toEqual('')
    expect(
      XEUtils.toJSONString(''),
    ).toEqual('""')
    expect(
      XEUtils.toJSONString(-1),
    ).toEqual('-1')
    expect(
      XEUtils.toJSONString(0),
    ).toEqual('0')
    expect(
      XEUtils.toJSONString([]),
    ).toEqual('[]')
    expect(
      XEUtils.toJSONString({}),
    ).toEqual('{}')
    expect(
      XEUtils.toJSONString({ a: 1 }),
    ).toEqual('{"a":1}')
    expect(
      XEUtils.toJSONString([11, 22]),
    ).toEqual('[11,22]')
  })

  it('keys()', () => {
    expect(
      XEUtils.keys(),
    ).toEqual([])
    expect(
      XEUtils.keys(''),
    ).toEqual([])
    expect(
      XEUtils.keys([]),
    ).toEqual([])
    expect(
      XEUtils.keys(false),
    ).toEqual([])
    expect(
      XEUtils.keys({}),
    ).toEqual([])
    expect(
      XEUtils.keys(-1),
    ).toEqual([])
    expect(
      XEUtils.keys(123),
    ).toEqual([])
    expect(
      XEUtils.keys({ a: 11, b: 22 }),
    ).toEqual(['a', 'b'])
    expect(
      XEUtils.keys([{ a: 11 }, { a: 22 }, { a: 33 }]),
    ).toEqual(['0', '1', '2'])
    expect(
      XEUtils.keys([11, 22]),
    ).toEqual(['0', '1'])
    expect(
      XEUtils.keys('123'),
    ).toEqual(['0', '1', '2'])
  })

  it('values()', () => {
    expect(
      XEUtils.values(),
    ).toEqual([])
    expect(
      XEUtils.values(''),
    ).toEqual([])
    expect(
      XEUtils.values(false),
    ).toEqual([])
    expect(
      XEUtils.values({}),
    ).toEqual([])
    expect(
      XEUtils.values(-1),
    ).toEqual([])
    expect(
      XEUtils.values(123),
    ).toEqual([])
    expect(
      XEUtils.values({ a: 11, b: 22 }),
    ).toEqual([11, 22])
    expect(
      XEUtils.values([{ a: 11 }, { a: 22 }, { a: 33 }]),
    ).toEqual([{ a: 11 }, { a: 22 }, { a: 33 }])
    expect(
      XEUtils.values([11, 22]),
    ).toEqual([11, 22])
    expect(
      XEUtils.values('123'),
    ).toEqual(['1', '2', '3'])
  })

  it('entries()', () => {
    expect(
      XEUtils.entries(),
    ).toEqual([])
    expect(
      XEUtils.entries(null),
    ).toEqual([])
    expect(
      XEUtils.entries(undefined),
    ).toEqual([])
    expect(
      XEUtils.entries(''),
    ).toEqual([])
    expect(
      XEUtils.entries(false),
    ).toEqual([])
    expect(
      XEUtils.entries({}),
    ).toEqual([])
    expect(
      XEUtils.entries(-1),
    ).toEqual([])
    expect(
      XEUtils.entries(123),
    ).toEqual([])
    expect(
      XEUtils.entries({ a: 11, b: 22 }),
    ).toEqual([['a', 11], ['b', 22]])
    expect(
      XEUtils.entries([11, 22]),
    ).toEqual([['0', 11], ['1', 22]])
    expect(
      XEUtils.entries('123'),
    ).toEqual([['0', '1'], ['1', '2'], ['2', '3']])
  })

  it('pick()', () => {
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, 'name'),
    ).toEqual({ name: 'test11' })
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, ['age']),
    ).toEqual({ age: 25 })
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, val => XEUtils.isNumber(val)),
    ).toEqual({ age: 25, height: 176 })
  })

  it('omit()', () => {
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, 'name', 'height'),
    ).toEqual({ age: 25 })
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, ['name', 'age']),
    ).toEqual({ height: 176 })
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, val => XEUtils.isNumber(val)),
    ).toEqual({ name: 'test11' })
  })

  it('first()', () => {
    expect(
      XEUtils.first(),
    ).toEqual(undefined)
    expect(
      XEUtils.first(undefined),
    ).toEqual(undefined)
    expect(
      XEUtils.first(null),
    ).toEqual(undefined)
    expect(
      XEUtils.first(123),
    ).toEqual(undefined)
    expect(
      XEUtils.first(true),
    ).toEqual(undefined)
    expect(
      XEUtils.first({}),
    ).toEqual(undefined)
    expect(
      XEUtils.first([]),
    ).toEqual(undefined)
    expect(
      XEUtils.first('123'),
    ).toEqual('1')
    expect(
      XEUtils.first({ a: 11, b: 22 }),
    ).toEqual(11)
    expect(
      XEUtils.first([11, 22]),
    ).toEqual(11)
  })

  it('last()', () => {
    expect(
      XEUtils.last(),
    ).toEqual(undefined)
    expect(
      XEUtils.last(undefined),
    ).toEqual(undefined)
    expect(
      XEUtils.last(null),
    ).toEqual(undefined)
    expect(
      XEUtils.last(123),
    ).toEqual(undefined)
    expect(
      XEUtils.last(true),
    ).toEqual(undefined)
    expect(
      XEUtils.last({}),
    ).toEqual(undefined)
    expect(
      XEUtils.last([]),
    ).toEqual(undefined)
    expect(
      XEUtils.last('123'),
    ).toEqual('3')
    expect(
      XEUtils.last({ a: 11, b: 22 }),
    ).toEqual(22)
    expect(
      XEUtils.last([11, 22]),
    ).toEqual(22)
  })

  it('each()', () => {
    let rest = []
    XEUtils.each([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest,
    ).toEqual([[11, 0], [22, 1], [33, 2]])
    rest = []
    XEUtils.each({ a: 11, b: 22, c: 33 }, (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest,
    ).toEqual([[11, 'a'], [22, 'b'], [33, 'c']])
    rest = []
    XEUtils.each('12345', (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest,
    ).toEqual([['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'], ['5', '4']])
  })

  it('lastEach()', () => {
    let rest = []
    XEUtils.lastEach([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest,
    ).toEqual([[33, 2], [22, 1], [11, 0]])
    rest = []
    XEUtils.lastEach({ a: 11, b: 22, c: 33 }, (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest,
    ).toEqual([[33, 'c'], [22, 'b'], [11, 'a']])
    rest = []
    XEUtils.lastEach('12345', (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest,
    ).toEqual([['5', '4'], ['4', '3'], ['3', '2'], ['2', '1'], ['1', '0']])
  })

  it('has()', () => {
    expect(
      XEUtils.has(),
    ).toEqual(false)
    expect(
      XEUtils.has('123'),
    ).toEqual(false)
    expect(
      XEUtils.has(null),
    ).toEqual(false)
    expect(
      XEUtils.has(undefined),
    ).toEqual(false)
    expect(
      XEUtils.has(-1),
    ).toEqual(false)
    expect(
      XEUtils.has(0),
    ).toEqual(false)
    expect(
      XEUtils.has({}),
    ).toEqual(false)
    expect(
      XEUtils.has([]),
    ).toEqual(false)
    expect(
      XEUtils.has(/\d/),
    ).toEqual(false)
    expect(
      XEUtils.has(() => { }),
    ).toEqual(false)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }),
    ).toEqual(false)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, null),
    ).toEqual(false)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, undefined),
    ).toEqual(false)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, ''),
    ).toEqual(false)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, []),
    ).toEqual(false)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[3]'),
    ).toEqual(false)
    expect(
      XEUtils.has({ aa: undefined }, 'aa.bb.cc'),
    ).toEqual(false)
    expect(
      XEUtils.has({ aa: null }, 'aa.bb.cc'),
    ).toEqual(false)
    expect(
      XEUtils.has({ aa: { bb: null, cc: 11 } }, 'aa.bb.cc'),
    ).toEqual(false)
    expect(
      XEUtils.has([0, 1, null, undefined, -1, /\d/], 6),
    ).toEqual(false)
    expect(
      XEUtils.has([[[11]]], '[0][0][1]'),
    ).toEqual(false)
    expect(
      XEUtils.has({ aa: { bb: null } }, 'aa.bb'),
    ).toEqual(true)
    expect(
      XEUtils.has({ aa: { bb: { cc: undefined } } }, 'aa.bb.cc'),
    ).toEqual(true)
    expect(
      XEUtils.has('abc', '[2]'),
    ).toEqual(true)
    expect(
      XEUtils.has('abc', [0]),
    ).toEqual(true)
    expect(
      XEUtils.has([11, 22, 33], 1),
    ).toEqual(true)
    expect(
      XEUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], 1),
    ).toEqual(true)
    expect(
      XEUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1]'),
    ).toEqual(true)
    expect(
      XEUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1].b'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: { b: 0, c: 22, d: [33, 44] } }, 'a.b'),
    ).toEqual(true)
    expect(
      XEUtils.has({ 'a': { b: 11, c: 22, d: [33, 44] }, 'a.d': 333 }, 'a.d'),
    ).toEqual(true)
    expect(
      XEUtils.has({ 'a': { c: 22, d: [33, 44] }, 'a.b': 333 }, 'a.b'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [null] } }, 'a.d[0]'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, { f: 66 }] } }, 'a.d[1].f'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44, 55, undefined] } }, 'a.d[3]'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: { b: 11, c: undefined, d: [33, 44] } }, ['a', 'c']),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: { b: 11, c: 22, d: [33, 44], e: 0 } }, ['a', 'e']),
    ).toEqual(true)
    expect(
      XEUtils.has([0, 1, null, undefined, -1, /\d/], 0),
    ).toEqual(true)
    expect(
      XEUtils.has([0, 1, null, undefined, -1, /\d/], 1),
    ).toEqual(true)
    expect(
      XEUtils.has([0, 1, null, undefined, -1, /\d/], 2),
    ).toEqual(true)
    expect(
      XEUtils.has([0, 1, null, undefined, -1, /\d/], '3'),
    ).toEqual(true)
    expect(
      XEUtils.has([0, 1, null, undefined, -1, /\d/], '4'),
    ).toEqual(true)
    expect(
      XEUtils.has([0, 1, null, undefined, -1, /\d/], '5'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'a'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b.c'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.f'),
    ).toEqual(true)
    expect(
      XEUtils.has({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.e'),
    ).toEqual(true)
    expect(
      XEUtils.has([[[11]]], '[0][0][0]'),
    ).toEqual(true)
  })

  it('get()', () => {
    expect(
      XEUtils.get(),
    ).toEqual(undefined)
    expect(
      XEUtils.get('123'),
    ).toEqual(undefined)
    expect(
      XEUtils.get(null),
    ).toEqual(undefined)
    expect(
      XEUtils.get(undefined),
    ).toEqual(undefined)
    expect(
      XEUtils.get([]),
    ).toEqual(undefined)
    expect(
      XEUtils.get({}),
    ).toEqual(undefined)
    expect(
      XEUtils.get(-1),
    ).toEqual(undefined)
    expect(
      XEUtils.get(0),
    ).toEqual(undefined)
    expect(
      XEUtils.get(/\d/),
    ).toEqual(undefined)
    expect(
      XEUtils.get(() => { }),
    ).toEqual(undefined)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }),
    ).toEqual(undefined)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, null),
    ).toEqual(undefined)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, undefined),
    ).toEqual(undefined)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ''),
    ).toEqual(undefined)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, []),
    ).toEqual(undefined)
    expect(
      XEUtils.get('abc', '[2]'),
    ).toEqual('c')
    expect(
      XEUtils.get('abc', [0]),
    ).toEqual('a')
    expect(
      XEUtils.get([11, 22, 33], 1),
    ).toEqual(22)
    expect(
      XEUtils.get([[11, 22]], '[0][1]'),
    ).toEqual(22)
    expect(
      XEUtils.get({ a: [[11, 22]] }, 'a[0][1]'),
    ).toEqual(22)
    expect(
      XEUtils.get({ a: [[11, { bb: [33, 44, 55] }]] }, 'a[0][1].bb[1]'),
    ).toEqual(44)
    expect(
      XEUtils.get([[11, 22, [33, [44, 55]]]], '[0][2][1][0]'),
    ).toEqual(44)
    expect(
      XEUtils.get({ a: [[11, 22, [33, [44, 55]]]] }, 'a[0][2][1][0]'),
    ).toEqual(44)
    expect(
      XEUtils.get({ a: [[11, 22, [33, [{ cc: 88 }, 55]]]] }, 'a[0][2][1][0].cc'),
    ).toEqual(88)
    expect(
      XEUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], 1),
    ).toEqual({ a: 33, b: 44 })
    expect(
      XEUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1]'),
    ).toEqual({ a: 33, b: 44 })
    expect(
      XEUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1].b'),
    ).toEqual(44)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a'),
    ).toEqual({ b: 11, c: 22, d: [33, 44] })
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.b'),
    ).toEqual(11)
    expect(
      XEUtils.get({ 'a': { b: 11, c: 22, d: [33, 44] }, 'a.b': 333 }, 'a.b'),
    ).toEqual(333)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d'),
    ).toEqual([33, 44])
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[0]'),
    ).toEqual(33)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, { f: 66 }] } }, 'a.d[1].f'),
    ).toEqual(66)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[3]', '111'),
    ).toEqual('111')
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ['a', 'c'], '222'),
    ).toEqual(22)
    expect(
      XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ['a', 'e'], '333'),
    ).toEqual('333')
    expect(
      XEUtils.get([0, 1, null, undefined, -1, /\d/], 0),
    ).toEqual(0)
    expect(
      XEUtils.get([0, 1, null, undefined, -1, /\d/], 1),
    ).toEqual(1)
    expect(
      XEUtils.get([0, 1, null, undefined, -1, /\d/], 2),
    ).toEqual(null)
    expect(
      XEUtils.get([0, 1, null, undefined, -1, /\d/], '3'),
    ).toEqual(undefined)
    expect(
      XEUtils.get([0, 1, null, undefined, -1, /\d/], '4'),
    ).toEqual(-1)
    expect(
      XEUtils.get([0, 1, null, undefined, -1, /\d/], '5'),
    ).toEqual(/\d/)
    expect(
      XEUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'a'),
    ).toEqual(1)
    expect(
      XEUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b'),
    ).toEqual({ c: null, d: 33, cc: { f: undefined, e: 0 } })
    expect(
      XEUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b.c'),
    ).toEqual(null)
    expect(
      XEUtils.get({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.f'),
    ).toEqual(undefined)
    expect(
      XEUtils.get({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.e'),
    ).toEqual(0)
  })

  it('set()', () => {
    expect(
      XEUtils.set(null),
    ).toEqual(null)
    expect(
      XEUtils.set(undefined),
    ).toEqual(undefined)
    expect(
      XEUtils.set(''),
    ).toEqual('')
    expect(
      XEUtils.set(0),
    ).toEqual(0)
    expect(
      XEUtils.set(-1),
    ).toEqual(-1)
    expect(
      XEUtils.set({}),
    ).toEqual({})
    expect(
      XEUtils.set([]),
    ).toEqual([])
    expect(
      XEUtils.set({ a: 11 }, null),
    ).toEqual({ a: 11 })
    expect(
      XEUtils.set([11]),
    ).toEqual([11], null)
    expect(
      XEUtils.set({}, 'a', 11),
    ).toEqual({ a: 11 })
    expect(
      XEUtils.sum(XEUtils.set({ b: 22 }, 'a', 11)),
    ).toEqual(33)
    expect(
      XEUtils.set({}, 'a.b', 11),
    ).toEqual({ a: { b: 11 } })
    expect(
      XEUtils.set({}, 'a.d[0]', 33),
    ).toEqual({ a: { d: [33] } })
    expect(
      XEUtils.set({ a: [{ a: 4 }] }, 'a[1]', 33),
    ).toEqual({ a: [{ a: 4 }, 33] })
    expect(
      XEUtils.set({ a: [] }, 'a[0].b', 5),
    ).toEqual({ a: [{ b: 5 }] })
    expect(
      XEUtils.set({ a: [{ a: 4 }] }, 'a[0].b', 5),
    ).toEqual({ a: [{ a: 4, b: 5 }] })
    expect(
      XEUtils.set({ a: {} }, 'a.d[0].f.h', 44),
    ).toEqual({ a: { d: [{ f: { h: 44 } }] } })
    expect(
      XEUtils.set({}, 'a.d[0].f.h[0]', 55),
    ).toEqual({ a: { d: [{ f: { h: [55] } }] } })
    expect(
      XEUtils.set({ a: { d: [{ a: { h: [55] } }] } }, 'a.d[0].f.h[0]', 55),
    ).toEqual({ a: { d: [{ a: { h: [55] }, f: { h: [55] } }] } })
    expect(
      XEUtils.set({}, 'a[0][2]', 11),
    ).toEqual({ a: [[undefined, undefined, 11]] })
    expect(
      XEUtils.set({ a: [0, 1, 2] }, 'a[0][2]', 11),
    ).toEqual({ a: [[undefined, undefined, 11], 1, 2] })
    expect(
      XEUtils.set({ a: [[22], 1, 2] }, 'a[0][2]', 11),
    ).toEqual({ a: [[22, undefined, 11], 1, 2] })
    expect(
      XEUtils.set({}, 'a[0][2].b[1]', 22),
    ).toEqual({ a: [[undefined, undefined, { b: [undefined, 22] }]] })
    expect(
      XEUtils.set({}, ['a'], 11),
    ).toEqual({ a: 11 })
    expect(
      XEUtils.sum(XEUtils.set({ c: 33 }, ['a'], 11)),
    ).toEqual(44)
    expect(
      XEUtils.set({}, ['a', 'c'], 22),
    ).toEqual({ a: { c: 22 } })
    expect(
      XEUtils.set({}, ['a', 'd[0]', 'f', 'h'], 44),
    ).toEqual({ a: { d: [{ f: { h: 44 } }] } })
    expect(
      XEUtils.set({ a: {} }, ['a', 'd[0]', 'f', 'h[0]'], 55),
    ).toEqual({ a: { d: [{ f: { h: [55] } }] } })
    expect(
      XEUtils.set([], '[1][5][2]', 55),
    ).toEqual([undefined, [undefined, undefined, undefined, undefined, undefined, [undefined, undefined, 55]]])
    expect(
      XEUtils.set([], '[1][5][2].b.c[1].t[2]', 66),
    ).toEqual([undefined, [undefined, undefined, undefined, undefined, undefined, [undefined, undefined, { b: { c: [undefined, { t: [undefined, undefined, 66] }] } }]]])

    const obj1 = {}
    XEUtils.set(obj1, '__proto__.attr1', 1)
    expect(
      obj1.attr1 === 1,
    ).toEqual(true)
    expect(
      ({}).attr1 !== 1,
    ).toEqual(true)

    const obj2 = {}
    XEUtils.set(obj2, 'constructor', 1)
    expect(
      obj2.constructor !== 1,
    ).toEqual(true)

    const FN3 = function FN3() { }
    const obj3 = new FN3()
    XEUtils.set(obj3, 'prototype.a3', 1)
    expect(
      obj3.a3 === 1,
    ).toEqual(true)
    const obj4 = new FN3()
    expect(
      obj4.a3 !== 1,
    ).toEqual(true)
  })

  it('groupBy()', () => {
    expect(
      XEUtils.groupBy(),
    ).toEqual({})
    expect(
      XEUtils.groupBy(null),
    ).toEqual({})
    expect(
      XEUtils.groupBy(undefined),
    ).toEqual({})
    expect(
      XEUtils.groupBy({}),
    ).toEqual({})
    expect(
      XEUtils.groupBy([]),
    ).toEqual({})
    expect(
      XEUtils.groupBy(/\d/),
    ).toEqual({})
    expect(
      XEUtils.groupBy(0),
    ).toEqual({})
    expect(
      XEUtils.groupBy(-1),
    ).toEqual({})
    expect(
      XEUtils.groupBy(0, -1),
    ).toEqual({})
    expect(
      XEUtils.groupBy(-1, 'type'),
    ).toEqual({})
    expect(
      XEUtils.groupBy([{ type: 'a' }, { type: 'b' }], 'type'),
    ).toEqual({ a: [{ type: 'a' }], b: [{ type: 'b' }] })
    expect(
      XEUtils.groupBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type'),
    ).toEqual({ a: [{ type: 'a' }, { type: 'a' }], b: [{ type: 'b' }] })
  })

  it('countBy()', () => {
    expect(
      XEUtils.countBy(),
    ).toEqual({})
    expect(
      XEUtils.countBy(null),
    ).toEqual({})
    expect(
      XEUtils.countBy(undefined),
    ).toEqual({})
    expect(
      XEUtils.countBy({}),
    ).toEqual({})
    expect(
      XEUtils.countBy([]),
    ).toEqual({})
    expect(
      XEUtils.countBy(/\d/),
    ).toEqual({})
    expect(
      XEUtils.countBy(0),
    ).toEqual({})
    expect(
      XEUtils.countBy(-1),
    ).toEqual({})
    expect(
      XEUtils.countBy(0, -1),
    ).toEqual({})
    expect(
      XEUtils.countBy(-1, 'type'),
    ).toEqual({})
    expect(
      XEUtils.countBy([{ type: 'a' }, { type: 'b' }], 'type'),
    ).toEqual({ a: 1, b: 1 })
    expect(
      XEUtils.countBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type'),
    ).toEqual({ a: 2, b: 1 })
  })

  it('clone()', () => {
    expect(
      XEUtils.clone(),
    ).toEqual()
    expect(
      XEUtils.clone(null),
    ).toEqual(null)
    expect(
      XEUtils.clone(undefined),
    ).toEqual(undefined)
    expect(
      XEUtils.clone([]),
    ).toEqual([])
    expect(
      XEUtils.clone({}),
    ).toEqual({})
    expect(
      XEUtils.clone(0),
    ).toEqual(0)
    expect(
      XEUtils.clone(-1),
    ).toEqual(-1)
    expect(
      XEUtils.clone(/\n/),
    ).toEqual(/\n/)
    expect(
      XEUtils.clone([11, 22, { bb: 22 }]),
    ).toEqual([11, 22, { bb: 22 }])
    expect(
      XEUtils.clone({ aa: 11, bb: [{ hh: 44 }] }),
    ).toEqual({ aa: 11, bb: [{ hh: 44 }] })
    expect(
      XEUtils.clone([['11', /\d/], [[11, [[new Date()], 22, [{ aa: 33 }, 44]]], { jj: 99 }], { uu: 88 }]),
    ).toEqual([['11', /\d/], [[11, [[new Date()], 22, [{ aa: 33 }, 44]]], { jj: 99 }], { uu: 88 }])

    const v1 = {
      num: 11,
      str: 'abc',
      obj: { b1: 22 },
      date: new Date(),
      re: /\d/,
      set: new Set([11, 22, 33]),
      map: new Map([['aa', 11], ['bb', 22], [33, 0]]),
    }

    const v2 = XEUtils.clone(v1)
    expect(
      v1.num === v2.num,
    ).toEqual(true)
    expect(
      v1.str === v2.str,
    ).toEqual(true)
    expect(
      v1.obj === v2.obj,
    ).toEqual(true)
    expect(
      v1.date === v2.date,
    ).toEqual(true)
    expect(
      v1.re === v2.re,
    ).toEqual(true)
    expect(
      v1.set === v2.set,
    ).toEqual(true)
    expect(
      v1.map === v2.map,
    ).toEqual(true)

    const v3 = XEUtils.clone(v1, true)
    expect(
      v1.num === v3.num,
    ).toEqual(true)
    expect(
      v1.str === v3.str,
    ).toEqual(true)
    expect(
      v1.obj === v3.obj,
    ).toEqual(false)
    expect(
      v1.date === v3.date,
    ).toEqual(false)
    expect(
      v1.re === v3.re,
    ).toEqual(false)
    expect(
      v1.set === v3.set,
    ).toEqual(false)
    expect(
      v1.map === v3.map,
    ).toEqual(false)

    function Func1() {
      this.hhh = 22
    }
    Func1.prototype.val = 11

    const f1 = new Func1()
    const f2 = XEUtils.clone(f1, true)

    class Demo1 {
      constructor() {
        this.name = 1
      }
    }
    const d1 = new Demo1()
    const d2 = XEUtils.clone(d1, true)
    expect(
      d2 instanceof Demo1,
    ).toEqual(true)
    expect(d2.name).toEqual(1)
    expect(
      d1.name === d2.name,
    ).toEqual(true)
    expect(
      d1 === d2,
    ).toEqual(false)

    class Test1 {
      constructor(name) {
        this.name = name
      }
    }
    const t1 = new Test1(123)
    const t2 = XEUtils.clone(t1, true)
    expect(
      t2 instanceof Test1,
    ).toEqual(true)
    expect(t2.name).toEqual(123)
    expect(
      t1.name === t2.name,
    ).toEqual(true)
    expect(
      t1 === t2,
    ).toEqual(false)
  })

  it('clear()', () => {
    expect(
      XEUtils.clear(),
    ).toEqual()
    expect(
      XEUtils.clear(null),
    ).toEqual(null)
    expect(
      XEUtils.clear(undefined),
    ).toEqual(undefined)
    expect(
      XEUtils.clear({}),
    ).toEqual({})
    expect(
      XEUtils.clear([]),
    ).toEqual([])
    expect(
      XEUtils.clear(/\d/),
    ).toEqual(/\d/)
    expect(
      XEUtils.clear(0),
    ).toEqual(0)
    expect(
      XEUtils.clear(-1),
    ).toEqual(-1)
    expect(
      XEUtils.clear([11, 22, 33, 33]),
    ).toEqual([])
    expect(
      XEUtils.clear([11, 22, 33, 33], undefined),
    ).toEqual([undefined, undefined, undefined, undefined])
    expect(
      XEUtils.clear([11, 22, 33, 33], null),
    ).toEqual([null, null, null, null])
    expect(
      XEUtils.clear({ b1: 11, b2: 22 }),
    ).toEqual({})
    expect(
      XEUtils.clear({ b1: 11, b2: 22 }, undefined),
    ).toEqual({ b1: undefined, b2: undefined })
    expect(
      XEUtils.clear({ b1: 11, b2: 22 }, null),
    ).toEqual({ b1: null, b2: null })

    class MyTest {
      constructor() {
        this.abc = 1
      }
    }
    const test1 = [new MyTest()]
    const test2 = XEUtils.clone(test1)
    const test3 = XEUtils.clone(test1, true)
    test1[0].abc = null
    expect(test1[0] === test2[0]).toEqual(true)
    expect(test1[0].abc === test2[0].abc).toEqual(true)
    expect(test1[0] === test3[0]).toEqual(false)
    expect(test1[0].abc === test3[0].abc).toEqual(false)
  })

  it('remove()', () => {
    let list = [11, 22, 33, 44]
    XEUtils.remove(list)
    expect(list).toEqual([])

    list = [11, 22, 33, 44]
    XEUtils.remove(list, 2)
    expect(list).toEqual([11, 22, 44])

    list = [11, 22, 33, 44]
    XEUtils.remove(list, '2')
    expect(list).toEqual([11, 22, 33, 44])

    list = [11, 22, 33, 44]
    XEUtils.remove(list, item => item === 22)
    expect(list).toEqual([11, 33, 44])

    let obj = { a: 11, b: 22, c: 33 }
    XEUtils.remove(obj)
    expect(obj).toEqual({})

    obj = { a: 11, b: 22, c: 33 }
    XEUtils.remove(obj, item => item === 22)
    expect(obj).toEqual({ a: 11, c: 33 })

    obj = { a: 11, b: 22, c: 33 }
    XEUtils.remove(obj, 'c')
    expect(obj).toEqual({ a: 11, b: 22 })

    obj = { a: 11, b: 22, c: 33, 2: 33 }
    XEUtils.remove(obj, 2)
    expect(obj).toEqual({ a: 11, b: 22, c: 33, 2: 33 })
  })

  it('range()', () => {
    expect(
      XEUtils.range(),
    ).toEqual([])
    expect(
      XEUtils.range(null),
    ).toEqual([])
    expect(
      XEUtils.range(undefined),
    ).toEqual([])
    expect(
      XEUtils.range({}),
    ).toEqual([])
    expect(
      XEUtils.range([]),
    ).toEqual([])
    expect(
      XEUtils.range(/\d/),
    ).toEqual([])
    expect(
      XEUtils.range(-5),
    ).toEqual([])
    expect(
      XEUtils.range(0),
    ).toEqual([])
    expect(
      XEUtils.range(10),
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      XEUtils.range(-5, 5),
    ).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
    expect(
      XEUtils.range(0, 10, 0),
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      XEUtils.range(0, 10, 2),
    ).toEqual([0, 2, 4, 6, 8])
    expect(
      XEUtils.range(1, 50, 10),
    ).toEqual([1, 11, 21, 31, 41])
  })

  it('destructuring()', () => {
    expect(
      XEUtils.destructuring(),
    ).toEqual(undefined)
    expect(
      XEUtils.destructuring(undefined),
    ).toEqual(undefined)
    expect(
      XEUtils.destructuring(null),
    ).toEqual(null)
    expect(
      XEUtils.destructuring({}),
    ).toEqual({})
    expect(
      XEUtils.destructuring([]),
    ).toEqual([])
    expect(
      XEUtils.destructuring(/\d/),
    ).toEqual(/\d/)
    expect(
      XEUtils.destructuring(true),
    ).toEqual(true)
    expect(
      XEUtils.destructuring(0),
    ).toEqual(0)
    expect(
      XEUtils.destructuring(-1),
    ).toEqual(-1)
    expect(
      XEUtils.destructuring(null, { a: 11, b: 22, c: 33 }),
    ).toEqual(null)
    expect(
      XEUtils.destructuring({}, { a: 11, b: 22, c: 33 }),
    ).toEqual({})
    expect(
      XEUtils.destructuring({ a: null }, { a: 11, b: 22, c: 33 }),
    ).toEqual({ a: 11 })
    expect(
      XEUtils.destructuring({ a: 11, d: 44 }, { a: 11, b: 22, c: 33 }),
    ).toEqual({ a: 11, d: 44 })
    expect(
      XEUtils.destructuring({ a: 11, c: 33, d: 44 }, { a: 11, b: 22, c: null, e: 55, f: 66 }),
    ).toEqual({ a: 11, c: null, d: 44 })
  })
})
