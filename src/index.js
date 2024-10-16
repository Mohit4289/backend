import  dotenv from "dotenv"
import ConnectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

ConnectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is runing at port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed", err)
})
