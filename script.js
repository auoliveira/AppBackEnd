const express = require('express')
const app = express()
let dados = []
const fs = require('fs')
fs.readFileSync('./bd.json')

function getDados(){
    dados = fs.readFileSync('./bd.json')
}



app.get('/users',function(req,res){
    getDados()
    res.send(dados)

})

app.get('/users/:id',function(req,res){
    getDados()
    const id = req.params.id
    const usuario = dados.filter(function(item){
        return item.id == id
    })
    res.send(usuario)
})

app.listen(3000,function(){
    console.log("ta on porra!")
})

app.get('/users',function(req,res){
    res.send(dados)
})


   




