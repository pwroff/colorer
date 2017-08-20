const should = require("should");
const helpers = require('../src/helpers');
const colorer = require('../src/main');

const {defineColorSchema} = helpers;

describe("Colorer", () => {
  const checkCS = (colors) => {
    Object.keys(colors).forEach(
      s => should.strictEqual(
        defineColorSchema(colors[s]), s
      )
    )
  };

  it("should return propper color schema", (done) => {
    const colors = {
      hex: '#efefef',
      rgba: 'rgb(0,0,0)',
      hsva: 'hsv(0,0%,0%)',
      hsla: 'hsl(0,0%,0%)'
    };
    checkCS(colors);
    done();
  });

  it("should return propper color", (done) => {
    const c = colorer('rgb(200,100,150)');

    should.strictEqual(`${c}`, 'rgba(200,100,150,1)');
    done();
  });

  it("should parse object", (done) => {
    const c = colorer({
      base: '#ffffff',
      primary: 'rgb(100, 200, 255)'
    });

    done();
  });

  it("should parse nested object", (done) => {
    const c = colorer({
      base: '#ffffff',
      nested: {
        primary: 'rgba(100,200,255,1)'
      }
    });

    should.strictEqual(`${c.nested.primary}`, 'rgba(100,200,255,1)');
    done();
  });

  it("should set proper values to color", (done) => {
    const c = colorer('rgba(100,200,255,1)');
    const ca = c.alpha(-50);

    should.strictEqual(ca.value.a, 0.5);

    done();
  })
});
