const express = require("express")
const router = express.Router()
const db = require("../db")

router.get("/", async(req, res) => {    
    try {
        const { name } = req.query
        let r;
        if(name){
            r = await db.query("SELECT * FROM herois WHERE nome ILIKE $1", [`%${name}%`])
        } else{
            r = await db.query("SELECT * FROM herois")
        }
        if(!r.rowCount){
            throw new Error("Nenhum heroí encontrado")
        }
        return res.status(200).json(r.rows)
    } catch (error) {
        return res.status(404).json({msg: `${error}`, codigo: 0})
    }
})

router.post("/", async(req, res) => {
    try {
        const { nome, universo, equipe, ano_aparicao, alinhamento, genero, qtd_filme} = req.body || {}
        if(!nome || !universo || !equipe || !ano_aparicao || !alinhamento || !genero){
            throw new Error("Parâmetros incompletos")
        }
        const r = await db.query("INSERT INTO herois(nome, universo,equipe, ano_aparicao, alinhamento, genero, qtd_filme) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
            [nome, universo, equipe, ano_aparicao, alinhamento, genero, qtd_filme])
        if(!r.rowCount){
            throw new Error("Erro ao adicionar heroi");
        }
        return res.status(201).json(r.rows)
    } catch (error) {
        return res.status(400).json({msg: `${error}`, codigo: 0})
    }
})

router.get("/heroi_hoje", async(req, res) => {
    try {
        const r = await db.query("SELECT * FROM heroi_hoje")
        if(!r.rowCount){
            throw new Error("Sem heroí hoje :(")
        }
        return res.status(200).json(r.rows[0])
    } catch (error) {
        return res.status(404).json({msg: `${error}`, codigo: 0})
    }
})

router.post("/heroi_hoje", async(req, res) => {
    try {
        const r3 = await db.query("DELETE FROM heroi_hoje RETURNING *")
        if(!r3.rowCount){
            throw new Error("Erro ao deletar heroí de ontem")
        }
        const { nome } = req.body || {}
        if(!nome){
            throw new Error("Parâmetros incompletos")
        }
        const r2 = await db.query("INSERT INTO heroi_hoje(nome) VALUES($1) RETURNING *", [nome])
        if(!r2.rowCount){
            throw new Error("Erro ao adicionar heroí de hoje")
        }
        return res.status(201).json(r2.rows)
    } catch (error) {
        return res.status(400).json({msg: `${error}`, codigo: 0})
    }
})

module.exports = router;