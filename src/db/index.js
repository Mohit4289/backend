import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const ConnectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected  !! DB HOST: ${connection.connection.host}`)
    } catch (error) {
     console.log("mongo error", error);
     process.exit(1)
    }
}

export default ConnectDB