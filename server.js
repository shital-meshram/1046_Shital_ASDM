var http = require("http");
var fs = require("fs");
var url = require("url");
const { Console } = require("console");

function process_request(req, resp){
    const p= url.parse(req.url);
    console.log(req.url);

    switch(p.pathname)
    {
        case("/"):
            fs.readFile("welcome.html", function(err, data){
                if(err){
                    resp.end("Error");
                }else{
                    resp.writeHead(200, {'Content-Type': 'text/html'});     
                    resp.write(data);     
                    resp.end();
                }
            });
            break;
        default :
            resp.end("URL Not match");
            break;
    }
}

var server=http.createServer(process_request);
server.listen(8081);
Console.log("Server is started at port number 8081");