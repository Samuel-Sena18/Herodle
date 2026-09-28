import { useState, useEffect } from 'react'
import './App.css'
import Busca from './components/Busca'
import ListaChute from './components/ListaChute'
import Vitoria from './components/Vitoria'

const MAX_TENTATIVAS = 6

function App() {
  const [dadosOriginais, setDadosOriginais] = useState([])
  const [dados, setDados] = useState([])
  const [nome, setNome] = useState("")
  const [chute, setChute] = useState([])
  const [listaIdChute, setListaIdChute] = useState([])
  const [idHeroiHoje, setIdHeroiHoje] = useState(null)
  const [heroiHoje, setHeroiHoje] = useState([])
  const [acertou, setAcertou] = useState(false)
  const [erroCarregamento, setErroCarregamento] = useState(false)

  function mudaNome(e) {
    setNome(e.target.value)
  }

  function tentativa(personagem) {
    chute.push(personagem)
    setListaIdChute([...listaIdChute, personagem.id])
  }

  useEffect(() => {
    fetch("http://localhost:3000/personagens/heroi_hoje")
      .then(response => response.json())
      .then(data => setIdHeroiHoje(data.id))
      .catch(() => setErroCarregamento(true))

    fetch("http://localhost:3000/personagens")
      .then(response => response.json())
      .then(data => setDadosOriginais(data))
      .catch(() => setErroCarregamento(true))
  }, [])

  useEffect(() => {
    let url = "http://localhost:3000/personagens"
    if (nome) {
      url = url + "?name=" + nome
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setDados(data.filter(manter => !listaIdChute.includes(manter.id)))
        } else {
          setDados([])
        }
      })
      .catch(() => setDados([]))
  }, [nome, listaIdChute])

  useEffect(() => {
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].id == idHeroiHoje) {
        setHeroiHoje(dados[i])
      }
    }
  }, [dados, idHeroiHoje])

  const perdeu = !acertou && listaIdChute.length >= MAX_TENTATIVAS

  if (erroCarregamento) {
    return (
      <>
        <h1>HeroDle</h1>
        <p>Não foi possível carregar o jogo agora. Tente novamente mais tarde.</p>
      </>
    )
  }

  if (acertou) {
    return (
      <>
        <Vitoria tentativas={listaIdChute.length} maxTentativas={MAX_TENTATIVAS}></Vitoria>
      </>
    )
  }

  if (perdeu) {
    return (
      <>
        <h1>HeroDle</h1>
        <h2>Não foi dessa vez 😔</h2>
        <p>O herói de hoje era: <strong>{heroiHoje.nome}</strong></p>
      </>
    )
  }

  return (
    <>
      <h1>HeroDle</h1>
      <h2>Teste seus conhecimentos</h2>
      <p>Tentativas: {listaIdChute.length}/{MAX_TENTATIVAS}</p>
      <Busca mudaNome={mudaNome} dados={dados} nome={nome} mostrarLista={!!dados.length} tentativa={tentativa}></Busca> <br />
      <ListaChute listaChute={listaIdChute} dados={dadosOriginais} heroiHoje={heroiHoje} setAcertou={setAcertou}></ListaChute>
    </>
  )
}

export default App