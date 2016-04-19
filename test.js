const expect = require('chai').expect;
const Plugin = require('./');

const testData = 'function foo () { return window.innerHeight; }';

describe('JsWrapBrunch', () => {
  var plugin;

  beforeEach(() => {
    plugin = new Plugin({});
  });

  it('should be an object', () => {
    expect(plugin).to.be.ok;
    expect(plugin.optimize).to.be.an.instanceof(Function);
  });

  it('should have default wrapper', () => {
    expect(plugin.config.wrapper).to.be.ok;
  });

  it('should use user wrapper', (done) => {
    plugin.config.wrapper = 'begin @DATA end';

    plugin.optimize({data: testData}).then(result => {
      expect(result).to.be.equal('begin ' + testData + ' end');
      done();
    }, error => expect(error).not.to.be.ok);
  });
});