var express = require('express')
var app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var port = 8080


app.use(require('./routes'))

app.all('*', (req, res)=>{
    res.status(404).send({status: 404, message: 'A rota ' + req.originalUrl + ' não existe'})
})


app.listen(port, (err)=>{
    console.log(err)
    console.log('oi')
})