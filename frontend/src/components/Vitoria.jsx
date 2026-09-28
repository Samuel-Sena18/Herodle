function gerarResumo(tentativas, maxTentativas) {
    const linhas = []
    for (let i = 0; i < maxTentativas; i++) {
        if (i < tentativas - 1) {
            linhas.push("🟥")
        } else if (i === tentativas - 1) {
            linhas.push("🟩")
        } else {
            linhas.push("⬜")
        }
    }
    return `HeroDle ${tentativas}/${maxTentativas}\n${linhas.join("")}`
}

function Vitoria({ tentativas, maxTentativas }) {
    function copiarResultado() {
        const resumo = gerarResumo(tentativas, maxTentativas)
        navigator.clipboard.writeText(resumo)
    }

    return(
        <>
            <h1>PARÁBENS PELA VITÓRIA</h1>
            <h2>Você acertou em {tentativas} tentativa{tentativas > 1 ? "s" : ""}!</h2>
            <button onClick={copiarResultado}>Copiar resultado</button>
            <p>Te esperamos amanhã s2</p>
        </>
    )
}
export default Vitoria