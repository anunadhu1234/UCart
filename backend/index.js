const port = 4000;
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const Product = require('./Models/Products');
const User = require('./Models/User');
const { nextTick } = require('process');

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://ag952006:Iitjee2020%40@cluster0.0yizmav.mongodb.net/ecommerce", {});
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit with a non-zero status code to indicate an error
    }
  };

connectDB();
app.get("/",(req,res)=>{
    res.send("Express App is running");
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage:storage});

//Creating upload endpoint
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Create endpoint for adding product
app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log('saved');
    res.json({
        success:true,
        name: req.body.name
    });
})


//Creating api for deleting products
app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log('removed');
    res.json({
        success:true,
        name:req.body.name
    })
})

//Creating Api for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
})



//Creating endpoint for registering user
app.post('/signup',async (req,res)=>{
    let check = await User.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:'Existing user found with same email id'});
    }
    let cart = {};
    for(let i=0;i<300;++i){
        cart[i]=0;
    }
    const user = new User({
        name : req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart
    });
    await user.save();
    const data ={
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'iamgoodguy');
    res.json({success:true,token});
})


//Creating endpoint for user login
app.post('/login',async (req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user: {
                    id:user.id
                }
            }
            const token = jwt.sign(data,'iamgoodguy');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,error:"Credentials not correct"});
        }
    }
    else{
        res.json({success:false,error:"Credentials not correct"});
    }
});


//Creating endpoint for popular in women
app.get('/popularinwomen',async(req,res)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    res.send(popular_in_women);
})
app.get('/newcollections',async (req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    res.send(newcollection);
})

//creating middleware to fetch user
const fetchuser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"});
    }else{
        try {
            const data = jwt.verify(token,'iamgoodguy');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Please authenticate using valid token"});
        }
    }
}
    //adding products in card
app.post('/addtocart',fetchuser,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send('added')
})

//removing product from cart
app.post('/removefromcart',fetchuser,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
        userData.cartData[req.body.itemId]-=1;
        await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
        res.send('Removed')
})


//creating endpoint to get cart data
app.post('/getcart',fetchuser,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    res.json(userData.cartData);
})
app.listen(port,(error)=>{
    if(!error){
        console.log("Server Connected");
    }else{
        console.log("Error: ",error);
    }
})