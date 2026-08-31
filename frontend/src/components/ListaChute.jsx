function ListaChute(props) {
    let chutados = []
    for (let i = 0; i < props.dados.length; i++) {
        let personagem = props.dados[i]
        let jaChutado = false

        for (let j = 0; j < props.listaChute.length; j++) {
            if (props.listaChute[j] == personagem.id) {
                jaChutado = true
            }
        }

        if (jaChutado) {
            if(personagem.id == props.heroiHoje.id){
                props.setAcertou(true)
            }

            let classeNome = "erro"
            if (personagem.nome == props.heroiHoje.nome) {
                classeNome = "acerto"
            }

            let classeUniverso = "erro"
            if (personagem.universo == props.heroiHoje.universo) {
                classeUniverso = "acerto"
            }

            let classeEquipe = "erro"
            if (personagem.equipe_atual == props.heroiHoje.equipe_atual) {
                classeEquipe = "acerto"
            }

            let classeEspecie = "erro"
            if (personagem.especie == props.heroiHoje.especie) {
                classeEspecie = "acerto"
            }

            let classeGenero = "erro"
            if (personagem.genero == props.heroiHoje.genero) {
                classeGenero = "acerto"
            }

            let classeAno = "erro"
            let texto = ""
            if(personagem.ano_aparicao > props.heroiHoje.ano_aparicao){
                texto = "⬇️"
            }
            if(personagem.ano_aparicao < props.heroiHoje.ano_aparicao){
                texto = "⬆️"
            }
            if (personagem.ano_aparicao == props.heroiHoje.ano_aparicao) {
                classeAno = "acerto"
            }

            chutados.unshift(
                <div key={personagem.id} className="chute">
                    <li className={classeNome}>{personagem.nome}</li>
                    <li className={classeUniverso}>{personagem.universo}</li>
                    <li className={classeEquipe}>{personagem.equipe_atual}</li>
                    <li className={classeEspecie}>{personagem.especie}</li>
                    <li className={classeGenero}>{personagem.genero}</li>
                    <li className={classeAno}>{personagem.ano_aparicao}{texto}</li>
                </div>
            )
        }
    }

    return (
        <>
            {chutados}
        </>
    )
}
export default ListaChute