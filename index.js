import express from 'express'

const app= express()

app.get("/", (req, res)=>{
    res.send("Up and running")
})

app.listen(3500, () =>
    console.log("port 4000")
)