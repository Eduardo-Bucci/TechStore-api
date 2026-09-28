require("dotenv").config()
const express = require("express")
const cors = require("cors")
const controller = require("./controller/produtoController")

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get("/produtos", controller.listarProdutos)

app.post("/produto", controller.cadastrarProduto)

app.get("/",(req,res)=>{
    res.json({
        mensagem:"API funcionando"
    })
})

app.listen(PORT, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})