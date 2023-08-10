import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("MongoDB connected")
        });

        connection.on("error", () => {
            console.log("MongoDB failed to connect");
            process.exit();
        })
    } catch (error) {
        console.log(error)
    }
}