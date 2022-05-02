const routes = require("express").Router();
const axios = require("axios");
const produtoo = require("./Dados/dados.json");
const produto = require("./Dados/dados.json");

async function getProduct(produto) {
    var config = {
        method: 'post',
        url: 'https://api.intelipost.com.br/api/v1/quote_by_product',
        headers: {
            'api-key': '5de0e538ae1b4db7450176a60ac070a7f39f8576ea54b0cb2b9ad845bfc786f2',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(produto)
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                resolve(response.data);
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
    })
   
}

// get response test
routes.get("/", (req, res) => {
    res.send("Hello World");
});


routes.get("/cotacaoProduto", async (req, res) => {
    console.log('--- body ---');
    console.log(req.body)
    console.log('--- query ---');
    console.log(req.query)
    try {
        let product = await getProduct(produto);
        if (product) {
            console.log(product.data);
            return res.status(200).json({
                message: "Deu certo",
                obj: product
            });
        }
    } catch (error) {
        // show message erro from axios post 
        console.log(error.response.data);
        return res.status(400).json({
            message: "Erro"
        });
    }
});

module.exports = routes;