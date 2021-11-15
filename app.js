import path from 'path';
import cors from 'cors';
import express from 'express';
import history from 'connect-history-api-fallback';

const app = express();
const port = 3000;

// configurando el servidor del historial y renderizado de vue
app.use(cors());
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// estableciendo porque puerto escuchara la aplicacion determinada
app.listen(port, function(){
	console.log("Ejemplo del listen de una app web por el puerto "  + port);
});