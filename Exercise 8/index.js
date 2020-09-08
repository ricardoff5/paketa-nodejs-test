var http = require('http');
const PORT = 3333;
const callHttp = () => {
    http.get('http://localhost:3333', function (res) {
        var bodyChunks = [];
        res.on('data', function (chunk) {
            bodyChunks.push(chunk);
        }).on('end', function () {
            var body = Buffer.concat(bodyChunks);
            console.log(`${body}`);
        })
    });

};

setTimeout(callHttp, 1500);

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' }); // http header
    res.write('data: { fintech: "Paketá"}'); //write a response
    res.end(); //end the response
}).listen(PORT, function () {
    console.log(`server start at port ${PORT}`); //the server object listens on port 3000
});

