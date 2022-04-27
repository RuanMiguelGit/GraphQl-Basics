import mongoose from 'mongoose'

export async function connect() {

    try {
        
    await mongoose.connect("mongodb://localhost/mongoDBGraph", {
        useNewUrlParser:true
   })
   console.log('db ist on ')
    }catch{
        console.log('algo não está funcionando')
    }


}




