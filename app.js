const express = require('express');

const dotenv = require('dotenv');

const conectarBanco = require('./config/db');

const contatoRoutes = require('./routes/contatoRoutes');


dotenv.config();
//pegar tudo no arquivo .env

const app = express();


// Middleware para interpretar JSON no corpo das requisições

app.use(express.json());


// Rotas principais

app.use('/api/contatos', contatoRoutes);
//rota para entidade 'contatos'


// Conectar ao banco e iniciar o servidor

conectarBanco();

const PORT = process.env.PORT || 3000;
//porta que vai rodar o serviço (ou pega a variável de ambiente da porta ou usa a porta padrão 3000)

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));