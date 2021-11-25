import { makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'
const typeDef = `
type Query {
    hello:String
}

`

export default makeExecutableSchema({
    typeDefs:typeDef,
    resolvers:resolvers
})