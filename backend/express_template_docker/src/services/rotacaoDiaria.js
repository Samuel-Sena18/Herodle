const cron = require("node-cron")
const db = require("../db")

async function sortearNovoHeroi() {
  try {
    const atual = await db.query("SELECT id FROM heroi_hoje")
    const idAtual = atual.rows[0]?.id

    const todos = await db.query("SELECT id FROM herois")
    let candidatos = todos.rows
    if (idAtual) {
      candidatos = candidatos.filter(h => h.id !== idAtual)
    }

    const sorteado = candidatos[Math.floor(Math.random() * candidatos.length)]

    await db.transaction(async (conexao) => {
      await conexao.query("DELETE FROM heroi_hoje")
      await conexao.query("INSERT INTO heroi_hoje(id) VALUES($1)", [sorteado.id])
    })

    console.log(`[rotacaoDiaria] Novo herói do dia: id ${sorteado.id}`)
  } catch (error) {
    console.error("[rotacaoDiaria] Erro ao sortear novo herói:", error)
  }
}

function iniciarRotacaoDiaria() {
  // Todo dia à meia-noite (horário do container)
  cron.schedule("0 0 * * *", sortearNovoHeroi)
}

module.exports = { iniciarRotacaoDiaria, sortearNovoHeroi }