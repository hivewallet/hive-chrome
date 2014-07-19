'use strict';

var origin = require('hive-origin');
var devMode;

module.exports = {
  beforeRequiringModules: function() {
    origin.setOrigin(this.isInDevMode() ? 'https://hive-js.herokuapp.com' : 'https://web.hivewallet.com');
  },

  isInDevMode: function() {
    if (devMode === undefined) {
      var manifestURL = chrome.runtime.getURL('manifest.json');
      var xhr = new XMLHttpRequest();
      xhr.open("GET", manifestURL, false);
      xhr.onload = function() {
        var json = JSON.parse(this.responseText);
        devMode = !('update_url' in json);
      };

      xhr.send();
    }

    return devMode;
  }
};
