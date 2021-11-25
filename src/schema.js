import { makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'
const typeDef = `
type Query {
    hello:String
    greet(name:String!): String
}

`

export default makeExecutableSchema({
    typeDefs:typeDef,
    resolvers:resolvers
})