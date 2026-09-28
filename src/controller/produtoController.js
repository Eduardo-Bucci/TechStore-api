const db = require("../config/database")

async function listarProdutos(req, res){
    try {
        const [produtos]= await db.query(
            "SELECT * from produtos"
        )
        res.status(200).json(produtos)
    } catch (error) {
        console.log(error)
    }
}

async function cadastrarProduto(req, res){
    try {
        const {nome, preco} = req.body;

        const sql = `
            INSERT INTO produtos (nome, preco)
            VALUES (?, ?)
        `;

        const [result] = await db.execute(sql, [
            nome,
            preco
        ]);

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso",
            produto: {
                id: result.insertId,
                nome,
                preco
                
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: "Erro ao cadastrar produto"
        });
    }
};

module.exports = {
    listarProdutos,
    cadastrarProduto
}
