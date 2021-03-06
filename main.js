'use strict';

var getArg = function(a, args) {
    var res;
    args.forEach( function  (v,i) {
        if (v === a) {
            res = args[i+1];
        }
    });
    return res;
};

var server = require('./app/server.js');
var params = {
  "env": getArg('--env', process.argv) || process.env.NODE_ENV || 8000
}
var app = server(params);

app.run();

