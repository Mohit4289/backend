import dotenv from "dotenv"
import connectDB from "./db/index.js";
import cors from 'cors'
import express from 'express'
import CookieParser from 'cookie-parser'
import {app} from './app.js'

dotenv.config({
    path: './.env'
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
