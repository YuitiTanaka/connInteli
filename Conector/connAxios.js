const routes = require("express").Router();
const axios = require("axios");
const produtoo = require("../JSON/cotacaoProduto.json");

async function getProduct(produto) {
    let dataProduct = await axios.post("https://api.intelipost.com.br/api/v1/quote_by_product", {
        headers: {
            "Content-Type": "application/json",
            "api-key": "5de0e538ae1b4db7450176a60ac070a7f39f8576ea54b0cb2b9ad845bfc786f2"
        },
        data: produto
    });
    if(dataProduct) return dataProduct;
}

routes.get("/cotacaoProduto", async (req, res) => {
    try {
        let product = await getProduct(produtoo);
        if(product)  {
            console.log(product.data);
            return res.status(200).json({message: "Deu certo"});
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Erro"});
    }
});

module.exports = routes;