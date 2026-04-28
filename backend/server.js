const express = require("express");
const cors = require("cors");

const produtosRoutes = require("./routes/produtosRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", produtosRoutes);

app.listen(3000, () => {
  console.log("🚀 API rodando em http://localhost:3000");
});
