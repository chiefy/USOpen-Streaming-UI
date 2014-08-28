var _static = require('node-static'),
    file = new _static.Server('./public');

require('http').createServer(function(req,res){
    req.addListener('end', function() {
            file.serve(req,res);
        })
        .resume();
}).listen(5050);

