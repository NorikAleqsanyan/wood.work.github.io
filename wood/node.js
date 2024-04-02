import { createServer } from "http";
import fs from "fs";
import path from "path";



const server = createServer((req, res) => {
    res.writeHead(200,{"content-type": "text/html"})
    fs.createReadStream(path.resolve("wood/wood.html")).pipe(res);
});


server.listen(3000);