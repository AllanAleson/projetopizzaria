const express = require("express");
const path = require("path");

const app = express();
const PORT = 45000;

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`"[OK] - Servidor em PORT: ${PORT}`);
});
