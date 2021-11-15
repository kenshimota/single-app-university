const express = require('express');
const app = express();
const port = 3000;


// evitando el problema de cors origin
const cors = require('cors');
app.use(cors());

// Para acceder al directorio actual
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// estableciendo porque puerto escuchara la aplicacion determinada
app.listen(port, function(){
	console.log("Ejemplo del listen de una app web por el puerto "  + port);
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

