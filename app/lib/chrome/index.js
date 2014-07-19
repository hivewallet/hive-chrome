'use strict';

var origin = require('hive-origin');

module.exports = {
  beforeRequiringModules: function() {
    var devMode = (process.env.HIVE_ENV !== 'production');
    origin.setOrigin(devMode ? 'https://hive-js.herokuapp.com' : 'https://web.hivewallet.com');
  }
};
