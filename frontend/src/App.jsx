import { useState, useEffect } from 'react'
import './App.css'
import Busca from './components/Busca'

function App() {
  const [dados, setDados] = useState([])
  const [nome, setNome] = useState("")
  const [chute, setChute] = useState([])
  const [listaIdChute, setListaIdChute] = useState([])
  const [idHeroiHoje, setIdHeroiHoje] = useState(null)
  const [heroiHoje, setHeroiHoje] = useState([])

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
  }, [nome, listaIdChute])

  useEffect(() => {
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].id == idHeroiHoje) {
        setHeroiHoje(dados[i])
      }
    }
  }, [dados, idHeroiHoje])

  if (!dados.length && dados.codigo == 0) {
    return (
      <>
        <h1>HeroDle</h1>
        <h2>Teste seus conhecimentos</h2>
        <Busca mudaNome={mudaNome} dados={dados} nome={nome} mostrarLista={false}></Busca> <br />
      </>
    )
  } else {
    return (
      <>
        <h1>HeroDle</h1>
        <h2>Teste seus conhecimentos</h2>
        <Busca mudaNome={mudaNome} dados={dados} nome={nome} mostrarLista={true} tentativa={tentativa}></Busca> <br />
      </>
    )
  }
}

export default App
