const app = require('express')()
const path = require('path')

// então, criamos uma rota para '/'
app.get('/', (req, res) => {
  // aqui precisamos enviar o index.html para o cliente
  res.sendFile(path.join(__dirname + '/index.html'))
})

// no fim, iniciamos o serviço na porta 8001
app.listen(3000)
console.log('3000 é a porta mágica!')