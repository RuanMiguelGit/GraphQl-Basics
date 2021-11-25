import express from 'express'
import { graphqlHTTP } from "express-graphql" 
import schema from './schema'
 const app = express()


app.get('/',( req, res) => {
    return res.send('hello World')
})
app.use('/graphql', graphqlHTTP({
    graphiql:true,
    schema:schema
}))

app.listen(3001, () => console.log('servidor online'))