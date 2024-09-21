import express from "express"
import dotenv from "dotenv"
import path from "path"
import {connectionDB} from "./config/db.js"
import productRoutes from "./routes/product.route.js"
dotenv.config()
const __dirname=path.resolve()


const app = express()
app.use(express.json())

app.use("/api/products",productRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}

const port =process.env.PORT || 5000
app.listen(port,()=>{
    connectionDB()
    console.log("server run on port "+ port)
})

