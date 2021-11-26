import { makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'
const typeDef = `
type Query {
    hello:String
    greet(name:String!): String
    task:[Task]
    User:[User]
}

type Task {
    id: ID
    title:String!
    descripition:String!
    number:Int!
}

type User {
    id:ID
    firstName: String!
    lastName: String!
    age: Int
}

type Mutation {
    createTask(input: taskInput):Task
    createUser(input: userInput):User
}

input taskInput {
    title: String!
    descripition: String
    number: Int
}
input userInput {
    firstName: String!
    lastName : String!
    age: Int
}

`

export default makeExecutableSchema({
    typeDefs:typeDef,
    resolvers:resolvers
})