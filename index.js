import express from 'express'
import resovlers from './resolver'
import schema from './schema'
import {graphqlHTTP} from 'express-graphql'
import { graphql } from 'graphql'

const app= express()

app.get("/", (req, res)=>{
    res.send("Up and running")
})

const root ={ lco: () =>
    console.log("Code test")}
    
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphql:true
}))

app.listen(3500, () =>
    console.log("port 4000")
)