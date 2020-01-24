const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {bienvenidos_usuario} = require('../app/models');
const {bienvenidos_publicacao} = require('../app/models');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



/* usuario */
app.get('/user', (req, res, next)=> {
    bienvenidos_usuario.findAll()
    .then((resp) => {
        res.status(200).send(resp);
    }).catch((e)=> {
        res.status(500).send(e);
    });
});

app.post('/user', (req, res, next)=> {
    bienvenidos_usuario.create(
        {
            funcao: req.body.funcao,
            email: req.body.email,
            senha: req.body.senha,
            status: req.body.status,
            avatar: req.body.avatar,
        }
    )
    .then((resp) => {
        res.status(201).send(resp);
    }).catch((e)=> {
        res.status(500).send(e);
    });
});

app.get('/pub', (req, res, next)=> {
    bienvenidos_publicacao.findAll()
    .then((resp) => {
        res.status(201).send(resp);
    }).catch((e)=> {
        res.status(500).send(e);
    });
});


app.post('/pub', (req, res, next)=> {
    bienvenidos_publicacao.create(
        {
            depoimento: req.body.depoimento,
        }
    )
    .then((resp) => {
        res.status(201).send(resp);
    }).catch((e)=> {
        res.status(500).send(e);
    });
});



module.exports = app;