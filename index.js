import express from 'express';

// create an express app
const app = express()
const port = +process.env.PORT || 4000

// Router
// app.get('/', (req, res)=> {
//     res.status(200).json({
//         msg: "You're welcome!!!"
//     })
// })

app.get('/', (req, res)=> {
    res.json({
        status: res.statusCode,
        msg: 'You are getting there!'
    })
})

app.get('*', (req, res)=> {
    res.json({
        status: 404,
        msg: '404 page'
    })
})
app.listen(port)