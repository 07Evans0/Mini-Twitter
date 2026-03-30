const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

//importação de rotas dos modulos
const postsRoutes = require('./routes/post.routes');

//Inclusão de rotas dos modulos na aplicação
app.use(postsRoutes);

module.exports = app;