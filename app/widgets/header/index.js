'use strict';

var Ractive = require('hive-ractive')
var emitter = require('hive-emitter')
var Big = require('big.js')
var sync = require('hive-wallet').sync
var getWallet = require('hive-wallet').getWallet

module.exports = function(el){
  var ractive = new Ractive({
    el: el,
    template: require('./index.ract').template,
    data: {
      bitcoinBalance: 'unknown',
      satoshiToBTC: satoshiToBTC,
      menuOpen: false
    }
  })

  ractive.updateFastclick()
  
  emitter.on('wallet-ready', function(){
    var wallet = getWallet();
    ractive.set('bitcoinBalance', wallet.getBalance())
  })

  emitter.on('update-balance', function() {
    var wallet = getWallet();
    ractive.set('bitcoinBalance', wallet.getBalance())
  })

  ractive.on('toggle', function(event){
    emitter.emit('toggle-menu', !ractive.get('menuOpen'))
  })

  function toggleIcon(open){
    ractive.set('menuOpen', open)
  }

  function satoshiToBTC(amount){
    var satoshi = new Big(amount)
    return satoshi.times(0.00000001)
  }


  ractive.on('sync', function(event){
    event.original.preventDefault();
    if(!ractive.get('updating_transactions')) {
      ractive.set('updating_transactions', true) 
      sync(function(err, txs){
        if(err) return alert(err);

        ractive.set('updating_transactions', false)
        emitter.emit('update-balance')
        emitter.emit('update-transactions', txs)
      })
    }
  })

  ractive.toggleIcon = toggleIcon

  return ractive
}
