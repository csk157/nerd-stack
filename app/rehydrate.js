'use strict';

var cache = require('cache');

module.exports = () => {
   var data = __DATA__.data;
   var token = __DATA__.token;
   Object.keys(data).forEach((key) => {
      cache.set(token, key, data[key]);
   });
   delete window.__DATA__;
   return token;
};