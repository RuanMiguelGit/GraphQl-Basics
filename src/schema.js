import { makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'
const typeDef = `
type Query {
    hello:String
    greet(name:String!): String
    task:[Task]
}

type Task {
    id: ID
    title:String!
    descripition:String!
    number:Int!
}

type Mutation {
    createTask(input: taskInput):Task
}

input taskInput {
    title: String!
    descripition: String
    number: Int
}

`

export default makeExecutableSchema({
    typeDefs:typeDef,
    resolvers:resolvers
})