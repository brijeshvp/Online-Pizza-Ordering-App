const express = require('express')
const app = express()
// configure template engine(ejs)
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
// to generate path wherver needed
const path = require('path')

// // sending plain text to /
// app.get('/',(req,res) => {
//     res.send('Hello from server')
// })

// rendering html to  /
app.get('/',(req,res) => {
    res.render('home')
})

// set template engine
app.use(expressLayout)
// specifying views/template path
app.set('views',path.join(__dirname,'/resources/views'))
// specify express which template engine we'll use
app.set('view engine','ejs')


const PORT = process.env.PORT || 3000
app.listen(PORT,() =>{
    console.log(`Listening on port ${PORT}`)
}) 