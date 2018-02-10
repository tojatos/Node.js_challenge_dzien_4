const http = require('http');

const srv = http.createServer((req, res)=>{
	const userAgent = req.headers['user-agent'];
	let u = require('util').inspect(userAgent, { depth: null });
	res.end(u);
});
srv.listen(3000, ()=>{ console.log("Serwer uruchomiony na porcie 3000"); });
