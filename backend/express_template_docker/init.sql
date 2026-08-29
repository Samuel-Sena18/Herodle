-- Preencha com o SQL de inicialização do 
CREATE TABLE herois(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(80),
    universo VARCHAR(20),
    equipe_atual VARCHAR(30),
    especie VARCHAR(50),
    genero VARCHAR(50),
    ano_aparicao INTEGER
);

CREATE TABLE heroi_hoje(
    id INTEGER PRIMARY KEY REFERENCES herois(id)
)