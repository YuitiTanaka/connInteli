const express = require('express');
const app = express();

const cep = require('./intelipost.js');

app.get('/busca_cep', function(req, res){
    // console.log(res);
    cep.buscaCep('05568180').then(function(data){
        res.send(data);
    }).catch(function(error){
        res.send(error);
    });
})

app.listen('3000', function(req, res){
    console.log('rodou....')
})