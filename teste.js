const express = require('express');
const axios = require("axios");
const app = express();

app.get('/busca_cep', function (req, res) {
    //console.log(res)
    search_cep('05568180').then(function (data) {
        res.send(data);
    }).catch(function (error) {
        res.send(error);
    });
})

app.listen('3000', function (req, res) {
    console.log('rodou....')
})


function search_cep(cep = 0) {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: `https://api.intelipost.com.br/api/v1/cep_location/address_complete/${cep}`,
            headers: {
                'Content-Type': '',
                'api-key': '5de0e538ae1b4db7450176a60ac070a7f39f8576ea54b0cb2b9ad845bfc786f2'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response)
            resolve(response.data)
        }).catch(function (error) {
            reject(error)
        });
    })
}