import express from "express"
const router=express.Router()
import {getProducts , deleteProduct , updateProduct , addProduct} from "../controllers/product.controller.js"

router.get("/",getProducts)
router.post("/",addProduct)
router.delete("/:id",deleteProduct)
router.put("/:id",updateProduct)

export default router