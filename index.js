'use strict';

const defaultWrapper = ';(function(){@DATA})();';

class JsWrapBrunch {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.jswrap || {};
    this.config.wrapper = this.config.wrapper || defaultWrapper;
  }

  optimize(file) {
    const data = file.data;
    var wrappedData = this.config.wrapper.replace('@DATA', data);
    
    return Promise.resolve(wrappedData);
  }
}

JsWrapBrunch.prototype.brunchPlugin = true;
JsWrapBrunch.prototype.type = 'javascript';
JsWrapBrunch.prototype.extension = 'js';
JsWrapBrunch.prototype.defaultEnv = '*';


module.exports = JsWrapBrunch;
