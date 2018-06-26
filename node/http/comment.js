var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content':'期待',
    'cid':'348'
});

var options = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/document',
    method:'post',
    header:{

    }
}

var req = http.request(options,function (res) {
    console.log('stutas' + res.statusCode);
    console.log('headers' + JSON.stringify(res.headers));
    
})