const http = require('http');

const srv = http.createServer((req, res)=>{
	const acceptLanguage = req.headers['accept-language'];
    console.log('Preferowane języki:', acceptLanguage);
});
srv.listen(3000, ()=>{
	console.log("Serwer uruchomiony na porcie 3000");
});
