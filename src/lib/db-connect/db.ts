import mongoose from "mongoose";

let cached = global.mongoose;

const uri: string = process.env.MONGODB_URI!;
if (!uri) {
    throw new Error("MONGODB_URI is not defined. Check your .env.local");
}

if (!cached) {
    cached = global.mongoose = { connection: null, promise: null };
}

export async function dbConnect() {
    try {
        if (cached.connection) {
            console.log('---returning prev connection---');      
            return cached.connection;
        }

        if (!cached.promise) {
            console.log('---connecting to db---');
            mongoose.connect(uri).then(() => mongoose.connection)
        }

        cached.connection = await cached.promise;
        return cached.connection;
    } catch (err) {
        console.error("Database connection error:", err);
        throw new Error("Failed to connect to the database");
    }
}