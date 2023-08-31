import express from 'express';
const bodyParser = require('body-parser');

import formulario from './routes/formRoutes';
import auth       from './routes/authRoutes';
import emails from './routes/emailRoutes';

const cors = require('cors');
const app = express();


//cabeceras
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //permite el acceso a todos los dominios
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, auth'); //cabeceras que se van a aceptar
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); //metodos que se van a aceptar
  next();
})

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('port', process.env.PORT || 3000);
app.use(express.json());


app.use('/customerOpenCount',formulario);
app.use('/',auth);
app.use('/',emails);
app.use('*',(req, res) =>{
  return res.status(404).send(
    {
      msg : 'la ruta solicitada no existe'
    }
  )
});


export default app;

