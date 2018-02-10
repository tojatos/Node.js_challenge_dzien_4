const http = require('http');

const srv = http.createServer((req, res)=>{
	res.end("Hello, World from back-end!");
});
srv.listen(3000, ()=>{ console.log("Serwer uruchomiony na porcie 3000"); });
