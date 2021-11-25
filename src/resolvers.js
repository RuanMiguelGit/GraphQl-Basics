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
    }
}