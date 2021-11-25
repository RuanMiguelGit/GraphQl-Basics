import { taks } from './tasksarray'

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
        }
    },
    Mutation : {
        createTask(_, {input}){
            input.id = taks.length
            taks.push(input)
            return input
        }
    }
}