const express = require('express');
const axios = require("axios");
const produto = require("../Dados/dados.json");
const app = express();

function cotacaoProduto(produto){
    var obj = JSON.stringify(produto);

    var config = {
        method: 'post',
        url: 'http://144.22.132.158:3000/cotacaoProduto',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : obj
      };
      axios(config)
      .then(function (response) {
          let result = JSON.stringify(response.data.data.content);
        // console.log(JSON.stringify(response.data.obj.content.delivery_options.length));
        // let optionFrete = result.delivery_options;
        // let id = result.content.id;
        // let client_id = result.content.client_id;

        // console.log(optionFrete, id, client_id);
        // console.log(JSON.stringify(response.data.data.content))
        console.log(result);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
}

function anyMarket(){
    var obj = JSON.stringify({
        'id_produto': 123456
    });

    var config = {
        method: 'get',
        url: 'http://466c-187-11-124-203.ngrok.io/cotacaoProduto',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : obj
      };
}


app.listen('3000', function (err) {
    console.log('rodou....')
    cotacaoProduto(produto);
    // anyMarket();
})

// module.exports = routes;