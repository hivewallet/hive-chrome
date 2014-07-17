'use strict';

var origin = window.location.origin;

module.exports = {
  getOrigin: function() {
    return origin;
  },

  setOrigin: function(newOrigin) {
    origin = newOrigin;
  }
};
