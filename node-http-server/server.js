const http = require('http')
const os = require('os')
const systemInfo = require("../node-system-cli/app")
const { error } = require('console')
const server = http.createServer((req,res)=>{
    if (req.method === "GET" && req.url === "/") {
       const response = {
        status: "Running",
       }

       res.writeHead(200,{"Content-Type": "application/json"})
       res.end(JSON.stringify(response))
    }
    else if(req.method === "GET" && req.url === "/time"){
        const response = {
            time: new Date().toISOString()
        }

        res.writeHead(200,{"Content-Type": "application/json"})
        res.end(JSON.stringify(response))
    }
    else if(req.method === "GET" && req.url === "/system"){
        const data = systemInfo

        res.writeHead(200,{"Content-Type": "application/json"})
        res.end(JSON.stringify(data))
    }
    else{
        const response = {
            error: "Not Found"
        }
        res.writeHead(404,{"Content-Type": "application/json"})
        res.end(JSON.stringify(response))
    }

})

server.listen(3000,()=>{
    console.log(`Server is Runnig on localhost:${server.address().port}`);
    
})
