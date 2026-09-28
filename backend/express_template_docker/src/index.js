const express = require("express");
const cors = require("cors");
const path = require("path");
const { iniciarRotacaoDiaria } = require("./services/rotacaoDiaria");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/personagens", require("./routes/personagens"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

iniciarRotacaoDiaria();

app.listen(3000, () => {
  console.log(`Servidor executando em http://localhost:3000`);
});