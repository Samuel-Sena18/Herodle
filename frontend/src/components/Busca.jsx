function Busca(props) {
    function limpar(){

    }

    if (!props.nome || !props.dados || props.dados.length == 0 || !props.mostrarLista) {
        return (
            <div className="busca-container">
                <input
                    type="text"
                    placeholder="Buscar personagem..."
                    onChange={props.mudaNome}
                    className="busca-input"
                />
            </div>
        )
    }
    if(props.mostrarLista){
        return (
            <div className="busca-container">
                <input
                    type="text"
                    placeholder="Buscar personagem..."
                    onChange={props.mudaNome}
                    className="busca-input"
                />
                <ul className="busca-lista">
                    {props.dados.map((personagem) => (
                        <li key={personagem.id} className="busca-item"
                        onClick={() => props.tentativa(personagem)}
                        >
                            {personagem.nome}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Busca