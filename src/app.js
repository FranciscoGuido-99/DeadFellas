const express = require("express");
const app = express();
const path = require("path");
const middlewareEsUsuario = require('./middlewares/esUsuario');
var session = require('express-session');

app.set ('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../public') ));

app.use(session({secret: "Adloremipsum"}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(middlewareEsUsuario)

const generalRouter = require('./routers/indexRouter');
const productsRouter = require('./routers/productsRouter');
const productsDetailRouter = require('./routers/productsDetailRouter');
const productsCartRouter = require('./routers/productsCartRouter');
const loginRouter = require('./routers/loginRouter')
const registerRouter = require('./routers/registerRouter');

app.use(express.static(path.join(__dirname, '../public') ));

app.use('/products', productsRouter);
app.use('/', generalRouter);
app.use('/productsDetail', productsDetailRouter);
app.use('/productsCart', productsCartRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);



app.listen(3000, function(){
    console.log("Escuchando servidor 3000")
});