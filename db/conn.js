const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
})



try{
    sequelize.authenticate()
    console.log('Connected on Mysql')
}catch(err){
    console.log(`Erro ao conectar ${err}`)
}

module.exports = sequelize