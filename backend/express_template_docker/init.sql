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
);

INSERT INTO herois (nome, universo, equipe_atual, especie, genero, ano_aparicao) VALUES
('Superman', 'DC', 'Liga da Justiça', 'Kryptoniano', 'Masculino', 1938),
('Batman', 'DC', 'Liga da Justiça', 'Humano', 'Masculino', 1939),
('Mulher-Maravilha', 'DC', 'Liga da Justiça', 'Amazona', 'Feminino', 1941),
('Homem-Aranha', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1962),
('Homem de Ferro', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1963),
('Capitã Marvel', 'Marvel', 'Vingadores', 'Humano', 'Feminino', 1968),
('Wolverine', 'Marvel', 'X-Men', 'Mutante', 'Masculino', 1974),
('Tempestade', 'Marvel', 'X-Men', 'Mutante', 'Feminino', 1975),
('Flash', 'DC', 'Liga da Justiça', 'Humano', 'Masculino', 1940),
('Aquaman', 'DC', 'Liga da Justiça', 'Atlante', 'Masculino', 1941);

INSERT INTO herois (nome, universo, equipe_atual, especie, genero, ano_aparicao) VALUES
('Thor', 'Marvel', 'Vingadores', 'Asgardiano', 'Masculino', 1962),
('Hulk', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1962),
('Viúva Negra', 'Marvel', 'Vingadores', 'Humano', 'Feminino', 1964),
('Pantera Negra', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1966),
('Doutor Estranho', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1963),
('Homem-Formiga', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1962),
('Ciclope', 'Marvel', 'X-Men', 'Mutante', 'Masculino', 1963),
('Jean Grey', 'Marvel', 'X-Men', 'Mutante', 'Feminino', 1963),
('Fera', 'Marvel', 'X-Men', 'Mutante', 'Masculino', 1963),
('Lanterna Verde', 'DC', 'Liga da Justiça', 'Humano', 'Masculino', 1940),
('Cyborg', 'DC', 'Liga da Justiça', 'Ciborgue', 'Masculino', 1980),
('Shazam', 'DC', 'Liga da Justiça', 'Humano', 'Masculino', 1940),
('Robin', 'DC', 'Titãs', 'Humano', 'Masculino', 1940),
('Ravena', 'DC', 'Titãs', 'Demônio-Humano', 'Feminino', 1980),
('Moça-Maravilha', 'DC', 'Titãs', 'Amazona', 'Feminino', 1965);

INSERT INTO herois (nome, universo, equipe_atual, especie, genero, ano_aparicao) VALUES
('Invencível', 'Invencível', 'Guardiões do Globo', 'Viltrumita-Humano', 'Masculino', 2003),
('Onipotente', 'Invencível', 'Guardiões do Globo', 'Viltrumita', 'Masculino', 2003),
('Atom Eve', 'Invencível', 'Guardiões do Globo', 'Humano', 'Feminino', 2003),
('Rex Splode', 'Invencível', 'Guardiões do Globo', 'Humano', 'Masculino', 2003),
('Immortal', 'Invencível', 'Guardiões do Globo', 'Imortal', 'Masculino', 2003),
('Dupli-Kate', 'Invencível', 'Guardiões do Globo', 'Humano', 'Feminino', 2003),
('Robô', 'Invencível', 'Guardiões do Globo', 'Robô/Clone', 'Masculino', 2003),
('Besouro Negro', 'Invencível', 'Guardiões do Globo', 'Humano', 'Masculino', 2003),
('Ciclope Nulificador', 'Invencível', 'Coalizão de Planetas', 'Sequide', 'Masculino', 2005),
('Motor Head', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1990),
('Falcão', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1969),
('Gavião Arqueiro', 'Marvel', 'Vingadores', 'Humano', 'Masculino', 1964),
('Miss Marvel', 'Marvel', 'Vingadores', 'Humano-Inumano', 'Feminino', 2013),
('Estelar', 'DC', 'Titãs', 'Tamaraniana', 'Feminino', 1980),
('Fera Besta', 'DC', 'Titãs', 'Metamorfo', 'Masculino', 1965);

INSERT INTO heroi_hoje (id) VALUES
(1);