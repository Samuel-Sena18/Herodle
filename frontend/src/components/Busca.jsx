import { useRef } from 'react'

function Busca(props) {
    const inputRef = useRef(null)

    function limpar() {
        if (inputRef.current) {
            inputRef.current.value = ""
        }
        props.mudaNome({ target: { value: "" } })
    }

    function selecionar(personagem) {
        props.tentativa(personagem)
        limpar()
    }

    const semResultado = props.mostrarLista && props.nome && props.dados && props.dados.length === 0

    return (
        <div className="busca-container">
            <input
                ref={inputRef}
                type="text"
                placeholder="Buscar personagem..."
                onChange={props.mudaNome}
                className="busca-input"
            />
            {props.mostrarLista && props.dados && props.dados.length > 0 && (
                <ul className="busca-lista">
                    {props.dados.map((personagem) => (
                        <li key={personagem.id} className="busca-item"
                            onClick={() => selecionar(personagem)}
                        >
                            {personagem.nome}
                        </li>
                    ))}
                </ul>
            )}
            {semResultado && (
                <p className="busca-sem-resultado">Nenhum herói encontrado</p>
            )}
        </div>
    )
}

export default Busca