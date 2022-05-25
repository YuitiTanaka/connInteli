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
      console.log(result);
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
}

function statusOrder(){
  var config = {
      method: 'post',
      url: 'http://144.22.132.158:3000/statusOrder',
      headers: { 
        'Content-Type': 'application/json'
      },
      data:{
        "externalOrderNo": "teste",
        "externalOrderStatus": "teste2",
        "externalOrderText": "A caminho"
        }
    };
    axios(config)
    .then(function (response) {
        let result = JSON.stringify(response.data);
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
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
    // statusOrder()
    // anyMarket();
})

// module.exports = routes;