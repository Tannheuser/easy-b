import mongoose from "mongoose";

export async function dbConnect() {
    if (!process.env.MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
    }

    await mongoose.connect(process.env.MONGODB_URI);
}

