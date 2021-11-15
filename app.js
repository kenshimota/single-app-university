const express = require('express');
const app = express();
const port = 3000;


// estableciendo porque puerto escuchara la aplicacion determinada
app.listen(port, function(){
	console.log("Ejemplo del listen de una app web por el puerto "  + port);
});



