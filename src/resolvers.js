import { taks } from './tasksarray'
import User from './models/User'

export const resolvers = {
    Query: {

        hello : () => {
            return 'Hello World with graphql'
        },
        greet: (root, args) =>  {
            console.log(args.name)
            return `Dado ${args.name} Guardado`

        },
        task: () => {
            return taks
        },
         User: async () => {
            const Users = await User.find()
            return Users
        }
    },
    Mutation : {
        createTask(_, {input}){
            input.id = taks.length
            taks.push(input)
            return input
        }, 
        async createUser(_, { input }){
            const  newUser = new User(input)
            await newUser.save()
            return newUser
        }
    }
}