const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal (opcional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:${PORT}');
  
  const express = require('express');
const app = express();
const path = require('path');

// Servir arquivos estáticos sem buscar index.html automaticamente
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
});

