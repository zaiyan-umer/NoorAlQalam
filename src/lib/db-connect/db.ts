import mongoose from "mongoose";

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = { connection: null, promise: null };
}

export async function dbConnect() {
    if(cached.connection){
        return cached.connection;
    }

    if(!cached.promise){
        mongoose.connect(process.env.MONGODB_URI!).then(() => mongoose.connection)
    }

    cached.connection = await cached.promise;
    return cached.connection;
}