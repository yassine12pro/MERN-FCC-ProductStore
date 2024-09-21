
import Product from "../models/Product.model.js"

export const getProducts=async(req,res)=>{
    try{
     const data = await Product.find({})
     res.status(200).json({success:true ,data:data})
     }catch(error){
         res.status(404).json({success:false,message:error})
    }
 }

export const addProduct=async(req,res)=>{
    const product=req.body
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success : false , message: "all fields are required !"})
    }
    const newProduct = new Product (product)

    try{
        await newProduct.save()
        res.status(201).json({success:true,data:newProduct})


    }catch(error){
        console.error(error.message)
        res.status(400).json({success:false,message:"server error !"})
    }
}
export const deleteProduct=async(req,res)=>{
    const {id}=req.params
    

    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"product deleted !"})


    }catch(error){
        console.error(error.message)
        res.status(500).json({success:false,message:"product not found !"})
    }
}
export const updateProduct=async(req,res)=>{
    const {id}=req.params
    const product=req.body
    

    try{
        const updatedProduct =await Product.findByIdAndUpdate(id, product,{new:true })
        res.status(200).json({success:true,data:updatedProduct})


    }catch(error){
        console.error(error.message)
        res.status(500).json({success:false,message:"product not found !"})
    }
}