import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected Successfully"));
        mongoose.connection.on('error', (err) => console.error("Database Connection Error:", err.message));
        
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            console.log("Warning: MONGODB_URI is not set in .env");
            return;
        }

        await mongoose.connect(uri);
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
    }
}

export default connectDB; 