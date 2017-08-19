const helpers = require('./helpers');
const {
  defineColorSchema,
  HEXtoRGB,
  RGBtoHSV,
  HSVtoHSL,
  HSLtoHSV,
  HSVtoRGB
} = helpers;

const RGB = 'rgb';
const HSL = 'hsl';
const HSV = 'hsv';

class Colorer {
  constructor(c) {
    let color = c;
    let cs = defineColorSchema(color);
    if (!cs) {
      throw new Error('Unsupported color schema');
    }

    if (cs === 'hex') {
      cs = RGB;
      color = HEXtoRGB(color);
    }

    this.model = cs;
    this.value = this._setValue(color);
    this._initialColor = color;
  }

  get stringValue() {
    const keys = Object.keys(this.value);
    const model = keys.join('');
    let val = `${model}(`;

    for (const k of keys) {
      let next;
      let value = this.value[k];

      if (/[hslv]/.test(k)) {
        value = Math.round(value * 100);
      }
      if (/[slv]/.test(k)) {
        value = Math.min(100, value);
        next = `${value}%,`;
      } else {
        next = `${value},`;
      }

      val += next;
    }

    return val.replace(/.$/, ')');
  }

  valueOf() {
    return this.stringValue;
  }

  toString() {
    return this.valueOf();
  }

  light(num = 0) {
    this.toHSV();
    let nextL = num / 100;
    let nextV = this.value.v + nextL;
    this.value.v = Math.min(1, nextV);
    this.toRGB();
    const ret = new Colorer(this.toString());

    this.value = this._setValue(this._initialColor);

    return ret;
  }

  depth(num = 0) {
    this.toHSV();
    let nextN = num / 100;
    let nextV = this.value.s + nextN;
    this.value.s = Math.min(1, nextV);
    this.toRGB();
    const ret = new Colorer(this.toString());

    this.value = this._setValue(this._initialColor);

    return ret;
  }

  tone(deg = 0) {
    this.toHSV();
    let nextH = this.value.h + (deg/100);
    this.value.h = nextH % 3.6;
    this.toRGB();
    const ret = new Colorer(this.toString());

    this.value = this._setValue(this._initialColor);

    return ret;
  }

  toHSL() {
    if (this.model === HSL) {
      return this;
    }
    if (this.model === RGB) {
      this.toHSV();
    }
    this.value = HSVtoHSL(this.value);
    this.model = HSL;
    return this;
  }

  toHSV() {
    if (this.model === HSV) {
      return this;
    }
    if (this.model === RGB) {
      this.value = RGBtoHSV(this.value);
      this.model = HSV;
    }
    if (this.model === HSL) {
      this.model = HSL;
      this.value = HSLtoHSV(this.value);
    }

    return this;
  }

  toRGB() {
    if (this.model === RGB) {
      return this;
    }
    if (this.model === HSL) {
      this.toHSV();
    }

    this.model = RGB;
    this.value = HSVtoRGB(this.value);

    return this;
  }

  _setValue(value) {
    const cleared = value.replace(/[a-z()%]/g, '').split(',');
    const val = {};

    for (let i = 0; i < cleared.length; i++) {
      const key = this.model[i] || 'a';

      val[key] = parseInt(cleared[i].trim(), 10);
    }

    val.a = val.a || 1;

    return val;
  }
}

const checkKeys = (ob) => {
  Object.keys(ob).forEach((k) => {
    if (typeof ob[k] === 'object') {
      ob[k] = checkKeys(ob[k]);
    } else {
      ob[k] = new Colorer(ob[k]);
    }
  });

  return Object.assign({}, ob);
}

module.exports = (c) => {
  if (typeof c === 'object') {
    return checkKeys(c);
  }
  return new Colorer(c);
};
