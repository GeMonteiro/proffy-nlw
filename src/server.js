// Servidor

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Configurar nunjucks (template engine)

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor

server
//receber os dados do req.body
.use(express.urlencoded({ extended:true }))

// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)
